# FCC Ink in Motion — design QA

final result: passed

## Source and evidence

This is an adaptation of the six supplied FCC brand images, not a pixel clone of a flyer or the OpenAI website. The rejected concepts are not used.

- Source visual truth: supplied `01679B7D-E3FA-45BF-85F5-6AC76C2DD43F.jpeg`, 1536×864, preserved as `public/assets/retreat.jpg`; other original posters: `ecclesiastes.jpg`, `membership.jpg`.
- Motion reference: https://openai.com/index/gpt-6-astra/ — live inspection of draggable artwork, scroll transitions, tabbed content.
- Implementation: Vite preview, desktop 1363×936 CSS pixels, phone 390×844 CSS pixels in same-origin iframe. CI also tests native 390×844 and 1440×1000 viewports.
- Captures: `artifacts/ink-qa/desktop-final.jpg`, `artifacts/ink-qa/phone-final.jpg`. The gray phone-capture surround is QA infrastructure, not app UI.
- Full-view comparison: `artifacts/ink-qa/comparison-final.jpg`. Source and implementation scaled proportionally and letterboxed; comparison concerns brand vocabulary, not identical content or page geometry. Density 1.
- Focused checks: full-size screenshots and browser inspection of logo, hatching, script, Spanish wrapping, chapter controls, event carousel and dialog.

## Comparison history

1. P1: white artwork rectangles inside transformed layers. Added ivory backing at compositing boundaries, multiplied artwork, clipped scene overflow. Recaptured and compared; exposed edges resolved.
2. P2: longer Spanish headline touched citrus. Adjusted Spanish type scale and indent; desktop and phone rechecked.
3. P2: whole-hero transform moved visit controls during scrolling. Isolated transformation to the composition. Phone dialog opened successfully afterward.
4. P2: About link measured 36×44 px. Set minimum width 44 px. Responsive CI rerun passed.

## Required fidelity surfaces

- Typography: self-hosted Inter Variable and Caveat adapt the source's bold sans/loose-script pairing. EN/ES wrapping reviewed. No generic high-contrast editorial serif.
- Layout: wide desktop composition; separately arranged phone hero; stacked phone chapters. No horizontal overflow in tested viewports. Existing ministry layouts retained.
- Color: warm ivory and near-black, with restrained dark worship section. Compositing boundaries rechecked after transforms.
- Assets: original event posters retain lettering and QR imagery. Tree, tomb and communion artwork prepared from supplied drawings; not CSS/SVG substitutes. Prepared WebPs total approximately 240 KB. Existing actual FCC worship photograph retained.
- Content: bilingual UI and honest visit panel; no fake registration submission. Event links go to teaching/contact, not invented registration forms. Original poster language retained.

## Verification

- Production build passed; routing tests 3/3 passed.
- PR quality run 33937586298 passed.
- Responsive run 33937586295 passed: EN/ES home and ten ministry routes at 390×844 and 1440×1000, overflow, tap targets, dialog/FAQ, chapter controls, keyboard tab navigation and event scrolling.
- Manual browser: language controls; Spanish phone dialog; FAQ expansion; closing dialog; chapter selection and arrow keys; artwork keyboard rotation and reset; event advance (523 px observed); return to top.
- No app-origin console error observed. One extension metadata error excluded.
- Reduced-motion CSS and pause implemented. Physical iPhone Safari and OS reduced-motion behavior remain unverified device-level checks.

## Remaining polish

P3: subtle paper tint in the small pre-existing branch. P3: extend the homepage motion language into retained ministry layouts in a future pass. Neither blocks core use.

## Checklist

- [x] Correct compositing and Spanish overlap.
- [x] Stabilize controls and pass mobile target tests.
- [x] Compare source and final browser captures.
- [x] Preserve original posters and ministry routes.
- [x] Separate preview; main homepage is not replaced.
