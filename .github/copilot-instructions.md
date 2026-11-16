# Copilot Instructions for the Portfolio Website

This repository is a static portfolio site for Tracy Ann Jacot. Keep all updates aligned with the responsive, fluid design standards defined in [.github/instructions/Standards.instructions.md](../.github/instructions/Standards.instructions.md).

## Project goals

- Preserve a clean, modern portfolio aesthetic.
- Keep the layout responsive across mobile, tablet, and desktop screens.
- Prefer fluid sizing and proportional spacing over fixed pixel values.
- Maintain consistent structure and navigation across all pages.

## Summary of current standards

### 1. Fluid sizing

- Avoid layout-affecting `px` values for width, height, margin, padding, spacing, and typography.
- Prefer `%`, `rem`, `em`, `vw`, `vh`, and `clamp()`.
- Use `1px` only for hairline borders or subtle decorative details.

### 2. Consistent global navigation

- Use the same top navigation across every page.
- Keep the order and labels consistent:
  - logo/profile image
  - Home
  - Works
  - About
  - Resume
  - LinkedIn
- Reuse shared markup or a common component instead of creating page-specific nav variations.

### 3. 10% inset layout system

- Use a 10% left/right inset for the main nav, project sections, and About section.
- Keep content within a proportional 80% content band instead of fixed-width gutters.
- Use flex/grid layouts to allow content to reflow naturally.

### 4. Responsive images and media

- Use fluid image sizing rules such as `width: 100%` and `height: auto`.
- Prefer `clamp()` and `aspect-ratio` for scalable image blocks.
- Avoid fixed pixel dimensions for hero or project images.

### 5. Maintainable implementation pattern

- Favor reusable HTML/CSS structure over one-off custom markup.
- Update shared styles rather than patching a single page in isolation.
- Check that changes remain consistent across the portfolio and case-study pages.

## Working expectations

When generating or editing any HTML, CSS, or JavaScript in this repo:

- Follow the standards in [.github/instructions/Standards.instructions.md](../.github/instructions/Standards.instructions.md) before finalizing code.
- Keep the design fluid, accessible, and responsive.
- Preserve a consistent portfolio experience rather than introducing page-specific layout exceptions.
- Prefer reusable, scalable patterns over hard-coded dimension tuning.

This project will be updated to fully align with these standards soon, so all future edits should be written with that target structure in mind.
