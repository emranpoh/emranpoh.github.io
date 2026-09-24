// Gallery strip: shared overlay open/close, PDF viewer, and tile click-navigation logic
// (used by both the publications strip and the works strip)
(function () {
  var overlay = document.getElementById('gallery-overlay');
  var backdrop = document.getElementById('gallery-overlay-backdrop');
  var closeBtn = document.getElementById('gallery-overlay-close');
  var imageWrap = document.getElementById('gallery-overlay-image-wrap');
  var image = document.getElementById('gallery-overlay-image');
  var video = document.getElementById('gallery-overlay-video');
  var imageCaption = document.getElementById('gallery-overlay-image-caption');
  var imageCaptionText = document.getElementById('gallery-overlay-image-caption-text');
  var imageCaptionDims = document.getElementById('gallery-overlay-image-caption-dims');
  var pdfWrap = document.getElementById('gallery-overlay-pdf');
  var pdfPages = document.getElementById('gallery-overlay-pdf-pages');
  var pdfCanvas1 = document.getElementById('gallery-overlay-pdf-canvas-1');
  var pdfCanvas2 = document.getElementById('gallery-overlay-pdf-canvas-2');
  var pdfPrevBtn = document.getElementById('gallery-overlay-pdf-prev');
  var pdfNextBtn = document.getElementById('gallery-overlay-pdf-next');
  var pdfLabel = document.getElementById('gallery-overlay-pdf-label');
  var title = document.getElementById('gallery-overlay-title');
  var authors = document.getElementById('gallery-overlay-authors');
  var venue = document.getElementById('gallery-overlay-venue');
  var abstract = document.getElementById('gallery-overlay-abstract');
  var linksWrap = document.getElementById('gallery-overlay-links');
  var pageLink = document.getElementById('gallery-overlay-page-link');
  var citationWrap = document.getElementById('gallery-overlay-citation-wrap');
  var citationEl = document.getElementById('gallery-overlay-citation');
  var copyBtn = document.getElementById('gallery-overlay-copy-btn');
  var resizeHandle = document.getElementById('gallery-overlay-resize-handle');
  var overlayContent = overlay ? overlay.querySelector('.gallery-overlay-content') : null;
  if (!overlay) return;

  if (resizeHandle && overlayContent) {
    var MIN_BODY_PCT = 20;
    var MAX_BODY_PCT = 60;
    var SNAP_STEP_PCT = 5;
    var isDraggingHandle = false;

    function setBodyWidthPct(pct) {
      pct = Math.max(MIN_BODY_PCT, Math.min(MAX_BODY_PCT, pct));
      pct = Math.round(pct / SNAP_STEP_PCT) * SNAP_STEP_PCT;
      overlayContent.style.setProperty('--overlay-body-width', pct + '%');
    }

    function onHandlePointerMove(e) {
      if (!isDraggingHandle) return;
      var rect = overlayContent.getBoundingClientRect();
      var pct = ((rect.right - e.clientX) / rect.width) * 100;
      setBodyWidthPct(pct);
    }

    function stopHandleDrag() {
      if (!isDraggingHandle) return;
      isDraggingHandle = false;
      resizeHandle.classList.remove('is-dragging');
      document.body.style.userSelect = '';
    }

    resizeHandle.addEventListener('pointerdown', function (e) {
      isDraggingHandle = true;
      resizeHandle.classList.add('is-dragging');
      document.body.style.userSelect = 'none';
      e.preventDefault();
    });
    window.addEventListener('pointermove', onHandlePointerMove);
    window.addEventListener('pointerup', stopHandleDrag);
  }

  var LINK_LABELS = {
    doi: 'DOI',
    repository: 'Repository',
    program: 'Program',
    pdf: 'PDF'
  };

  var PDFJS_VERSION = '3.11.174';
  var pdfjsLoadPromise = null;
  function loadPdfjs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (pdfjsLoadPromise) return pdfjsLoadPromise;
    pdfjsLoadPromise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/' + PDFJS_VERSION + '/pdf.min.js';
      script.onload = function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/' + PDFJS_VERSION + '/pdf.worker.min.js';
        resolve(window.pdfjsLib);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return pdfjsLoadPromise;
  }

  var pdfDoc = null;
  var pdfCurrentPage = 1;
  var pdfNumPages = 0;

  function pdfPagesPerView() {
    return window.matchMedia('(min-width: 641px)').matches ? 2 : 1;
  }

  function renderPdfPage(canvas, pageNum) {
    if (!pageNum || pageNum > pdfNumPages) {
      canvas.classList.remove('is-visible');
      return Promise.resolve();
    }
    return pdfDoc.getPage(pageNum).then(function (page) {
      var containerHeight = pdfPages.clientHeight || 600;
      var pagesPerView = pdfPagesPerView();
      var containerWidth = (pdfPages.clientWidth || 900) / pagesPerView - 8;
      var baseViewport = page.getViewport({ scale: 1 });
      var scale = Math.min(containerHeight / baseViewport.height, containerWidth / baseViewport.width);
      var dpr = window.devicePixelRatio || 1;
      var viewport = page.getViewport({ scale: scale * dpr });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = (viewport.width / dpr) + 'px';
      canvas.style.height = (viewport.height / dpr) + 'px';
      canvas.classList.add('is-visible');
      var ctx = canvas.getContext('2d');
      return page.render({ canvasContext: ctx, viewport: viewport }).promise;
    });
  }

  function renderPdfSpread() {
    var pagesPerView = pdfPagesPerView();
    var second = pagesPerView === 2 ? pdfCurrentPage + 1 : null;
    pdfCanvas2.classList.remove('is-visible');
    Promise.all([
      renderPdfPage(pdfCanvas1, pdfCurrentPage),
      second ? renderPdfPage(pdfCanvas2, second) : Promise.resolve()
    ]);
    var rangeEnd = second && second <= pdfNumPages ? second : pdfCurrentPage;
    pdfLabel.textContent = pdfCurrentPage === rangeEnd ? (pdfCurrentPage + ' / ' + pdfNumPages) : (pdfCurrentPage + '–' + rangeEnd + ' / ' + pdfNumPages);
    pdfPrevBtn.disabled = pdfCurrentPage <= 1;
    pdfNextBtn.disabled = pdfCurrentPage + pagesPerView > pdfNumPages;
  }

  function pdfStep(delta) {
    if (!pdfDoc) return;
    var pagesPerView = pdfPagesPerView();
    var next = pdfCurrentPage + delta * pagesPerView;
    pdfCurrentPage = Math.max(1, Math.min(next, pdfNumPages));
    renderPdfSpread();
  }

  function openPdf(url) {
    pdfDoc = null;
    pdfCurrentPage = 1;
    pdfNumPages = 0;
    pdfCanvas1.classList.remove('is-visible');
    pdfCanvas2.classList.remove('is-visible');
    pdfLabel.textContent = '';
    loadPdfjs().then(function (pdfjsLib) {
      return pdfjsLib.getDocument(url).promise;
    }).then(function (doc) {
      pdfDoc = doc;
      pdfNumPages = doc.numPages;
      pdfCurrentPage = 1;
      renderPdfSpread();
    });
  }

  pdfPrevBtn.addEventListener('click', function () { pdfStep(-1); });
  pdfNextBtn.addEventListener('click', function () { pdfStep(1); });
  window.addEventListener('resize', function () {
    if (pdfDoc && imageWrap.classList.contains('has-pdf')) renderPdfSpread();
  });

  function closeOverlay() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    video.pause();
  }

  function openOverlay(tile) {
    var imgSrc = tile.getAttribute('data-gallery-image');
    var videoSrc = tile.getAttribute('data-gallery-video');
    var tileTitleForAlt = tile.getAttribute('data-gallery-title') || '';
    var tileImageCaption = tile.getAttribute('data-gallery-image-caption') || tileTitleForAlt;
    var linksRawForImage = tile.getAttribute('data-gallery-links');
    var linkTagsForImage = [];
    if (linksRawForImage) {
      try { linkTagsForImage = JSON.parse(linksRawForImage) || []; } catch (e) { linkTagsForImage = []; }
    }
    var pdfLink = null;
    linkTagsForImage.forEach(function (tag) {
      if (tag && tag.name === 'pdf' && tag.url) pdfLink = tag.url;
    });

    video.pause();
    video.removeAttribute('src');
    video.load();
    imageWrap.classList.remove('no-image', 'has-pdf', 'has-video');

    if (videoSrc) {
      image.src = '';
      imageCaption.classList.remove('is-visible');
      imageWrap.classList.add('has-video');
      video.src = videoSrc;
    } else if (imgSrc) {
      imageCaptionText.textContent = tileImageCaption;
      imageCaptionDims.textContent = '';
      imageCaption.classList.add('is-visible');
      image.onload = function () {
        imageCaptionDims.textContent = image.naturalWidth + ' × ' + image.naturalHeight;
      };
      image.src = imgSrc;
      image.alt = tileTitleForAlt;
    } else if (pdfLink) {
      image.src = '';
      imageCaption.classList.remove('is-visible');
      imageWrap.classList.add('has-pdf');
      pdfPages.setAttribute('aria-label', tileTitleForAlt ? ('PDF preview: ' + tileTitleForAlt) : 'PDF preview');
      openPdf(pdfLink);
    } else {
      image.src = '';
      imageCaption.classList.remove('is-visible');
      imageWrap.classList.add('no-image');
    }
    title.textContent = tile.getAttribute('data-gallery-title') || '';

    authors.innerHTML = '';
    var avatarsRaw = tile.getAttribute('data-gallery-author-avatars');
    var avatarList = [];
    if (avatarsRaw) {
      try { avatarList = JSON.parse(avatarsRaw) || []; } catch (e) { avatarList = []; }
    }
    avatarList.forEach(function (person) {
      if (!person || !person.name) return;
      var el = document.createElement(person.url ? 'a' : 'div');
      if (person.url) {
        el.href = person.url;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      }
      el.className = 'gallery-overlay-author' + (person.isMe ? ' gallery-overlay-author-me' : '');
      el.setAttribute('role', 'listitem');
      el.title = person.name;

      var circle = document.createElement('div');
      circle.className = 'gallery-overlay-author-circle';
      if (person.photo) {
        var img = document.createElement('img');
        img.src = person.photo;
        img.alt = '';
        circle.appendChild(img);
      } else {
        circle.textContent = person.initials || '';
      }
      el.appendChild(circle);

      if (person.isMe) {
        var dot = document.createElement('span');
        dot.className = 'gallery-overlay-author-me-dot';
        el.appendChild(dot);
      }

      authors.appendChild(el);
    });

    venue.textContent = tile.getAttribute('data-gallery-venue') || '';
    abstract.textContent = tile.getAttribute('data-gallery-abstract') || '';

    var pageUrl = tile.getAttribute('data-gallery-url');
    if (pageUrl) {
      pageLink.href = pageUrl;
      pageLink.style.display = '';
    } else {
      pageLink.removeAttribute('href');
      pageLink.style.display = 'none';
    }

    linksWrap.innerHTML = '';
    var linksRaw = tile.getAttribute('data-gallery-links');
    var linkTags = [];
    if (linksRaw) {
      try { linkTags = JSON.parse(linksRaw) || []; } catch (e) { linkTags = []; }
    }
    linkTags.forEach(function (tag) {
      if (!tag || !tag.url) return;
      var a = document.createElement('a');
      a.href = tag.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'gallery-overlay-link-btn';
      a.textContent = LINK_LABELS[tag.name] || tag.name;
      linksWrap.appendChild(a);
    });

    var citationText = (tile.getAttribute('data-gallery-citation') || '').trim();
    citationEl.textContent = citationText;
    citationWrap.style.display = citationText ? '' : 'none';

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.gallery-strip-tile').forEach(function (tile) {
    tile.addEventListener('click', function () {
      var tileLink = tile.getAttribute('data-gallery-link');
      if (tileLink) {
        window.open(tileLink, '_blank', 'noopener,noreferrer');
        return;
      }
      var tileUrl = tile.getAttribute('data-gallery-url');
      var tileCount = parseInt(tile.getAttribute('data-gallery-count'), 10) || 0;
      var tileOpenPage = tile.getAttribute('data-gallery-open-page') === 'true';
      if (tileUrl && (tileCount > 1 || tileOpenPage)) {
        window.location.href = tileUrl;
        return;
      }
      openOverlay(tile);
    });
  });

  copyBtn.addEventListener('click', function () {
    var text = citationEl.textContent.trim();
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      var original = copyBtn.textContent;
      copyBtn.textContent = 'copied!';
      setTimeout(function () { copyBtn.textContent = original; }, 1500);
    });
  });

  backdrop.addEventListener('click', closeOverlay);
  closeBtn.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOverlay();
  });
})();
