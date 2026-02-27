# Unreachable Pages

Pages that exist but cannot be reached by clicking any link from the main navigation or other reachable pages. Entry points: `/` (landing), `/research`, `/works`.

*Last updated: 2025-02-27*

---

## Intentional Templates (2)

| URL | Source |
|-----|--------|
| `/research/template/` | `content/publication-template.markdown` |
| `/notes/` | `content/notes.markdown` |

---

## Research / Publication Detail Pages (3)

| URL | Source |
|-----|--------|
| `/research/when-not-to-help` | `content/research/when-not-to-help.md` |
| `/research/desire-paths-software-learning` | `content/research/desire-paths-software-learning.md` |
| `/research/artefact-awareness-workspaces` | `content/research/artefact-awareness-workspaces.md` |

---

## Total: 5 unreachable pages

**Reason:** Publication cards use `selected-work-card.html` with a non-clickable `<div>` instead of an `<a>` tag, so detail pages are never linked. Publication and notes templates are intentionally inaccessible—reference files only, not for navigation.
