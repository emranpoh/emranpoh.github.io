# Pre-commit audit checklist

Run through this before committing/pushing changes to this site. Most steps are
scriptable one-liners — paste them as-is.

## 1. Build clean

```
bundle exec jekyll build --trace
```
No warnings, no Liquid errors.

## 2. Scope check

```
git status --short
```
- Everything listed should be explained by the task just done — nothing
  unrelated sneaking in.
- `tools/photo-annotator/`, `assets/images-source/`, and other gitignored
  paths should NOT appear as untracked (confirms `.gitignore` is still doing
  its job). Spot check with `git check-ignore -v <path>` if unsure.

## 3. Image pipeline consistency

For every new/changed image referenced in `_data/*.yml` or `content/`:
- A matching file exists in `assets/images-source/<category>/` (the gitignored
  original).
- The built `.webp` exists in `assets/images/<category>/` (this is what
  actually ships — it'll show as `??` in `git status` until committed).
- Reused images aren't duplicated under a second filename.

Quick check for orphaned/missing image refs across the whole built site:
```
python3 - <<'EOF'
import re, os, glob
site = "_site"
missing = []
for f in glob.glob(os.path.join(site, "**", "*.html"), recursive=True):
    content = open(f, encoding="utf-8", errors="ignore").read()
    for m in re.finditer(r'(?:data-gallery-image|<img[^>]+src)="([^"]+\.(?:webp|png|jpe?g))"', content):
        src = m.group(1)
        if src.startswith('http'):
            continue
        path = site + src.split('?')[0]
        if not os.path.exists(path):
            missing.append((f, src))
if missing:
    print(f"MISSING ({len(missing)}):")
    for f, s in missing[:50]:
        print(f, "->", s)
else:
    print("No missing image references found.")
EOF
```

## 4. Data model consistency

- New `_data/pubs.yml` / `events.yml` / `presentations.yml` entries follow the
  established field conventions (`gallery_order`, `hidden`, `extra_images`,
  `image` vs `thumbnail` — see field comments at the top of `gallery-strip.html`
  / `gallery-strip-tile.html` if unsure which one governs what).
- Grep for the new image filename(s) across `_data/` and `content/` to check
  they're referenced exactly where intended and not orphaned or duplicated:
  ```
  grep -rn "<filename>" _data/ content/
  ```
- All `url:`/`permalink:` pairs actually resolve to a built page:
  ```
  python3 - <<'EOF'
  import yaml, os
  pubs = yaml.safe_load(open("_data/pubs.yml"))
  for p in pubs:
      url = p.get("url")
      if url and not os.path.exists(os.path.join("_site", url.strip("/"), "index.html")):
          print("MISSING:", p.get("title"), "->", url)
  EOF
  ```

## 5. Attribution / caption accuracy

- Every new caption that names a person, role (e.g. "chair", "organizer"), or
  claims who is doing something in a photo must be something the user
  explicitly confirmed — not inferred from visual context alone.
- When unsure, write the caption passively (what's happening) rather than
  attributing it to a specific named/titled person, or ask before committing
  to a specific claim.
- This applies to filenames too, not just visible captions — don't bake an
  unverified claim into a permanent asset filename.

## 6. No secrets / stray artifacts

```
git diff | grep -iE "api[_-]?key|secret|password|token|bearer"
```
- No test data, scratch files, or debug output staged.
- If a local tool (like the photo annotator) was used for verification, its
  test/scratch state (e.g. `tools/photo-annotator/annotations/`) is cleared
  back out, not left sitting there.

## 7. Browser verification

For any UI/behavior change (not just data additions):
- Rebuild, hard-reload the affected page(s) in the browser.
- Check console for errors (`onlyErrors: true`).
- Exercise the actual interaction (click, hover, keyboard nav) — don't just
  eyeball a screenshot.

## 8. Process hygiene

- Kill any background dev servers/processes started only for verification
  (e.g. a one-off `node server.js` for local testing) once done.
- Close any browser tabs opened for verification.

## 9. Final diff read

```
git diff -- <each changed file>
```
Read every hunk once, end to end, before staging. Look specifically for:
- Leftover debug code / commented-out blocks.
- Accidentally reverted unrelated lines.
- Whitespace-only noise that obscures the real diff.
