# Specification

## Summary
**Goal:** Build a single-page romantic Valentine proposal UI with a pink-and-white theme, an evasive “No” button (desktop + iPad touch), and a “Yes” celebration state showing a meme image and the text “Good choice”.

**Planned changes:**
- Create a single landing view that displays the question “Will you be my Valentine?” with exactly two prominent buttons: “Yes” and “No”, styled in a coherent pink-and-white romantic theme and sized to avoid overflow on iPad Chrome.
- Implement evasive behavior for the “No” button: on desktop hover and on touch/pointer interaction, reposition it within the viewport/container so it stays visible but effectively cannot be clicked; keep the “Yes” button stable and clickable.
- Implement a “Yes” success state that replaces/de-emphasizes the prompt and shows the exact text “Good choice” plus a meme image.
- Add the required static image asset under `frontend/public/assets/generated` and reference it via a static frontend path (no backend changes).

**User-visible outcome:** On one page, the user sees “Will you be my Valentine?” with “Yes” and an unclickable evasive “No”; tapping/clicking “Yes” shows a celebration view with “Good choice” and a meme image.
