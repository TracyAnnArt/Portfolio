---
applyTo: "**/*.{html,css,js}"
description: "Portfolio website standards for responsive layout, navigation consistency, and fluid sizing."
---

# Portfolio Website Standards

These instructions apply to the portfolio website in this repository. Follow them whenever generating or updating HTML, CSS, or JavaScript so the site stays fluid, responsive, and consistent across all pages.

## 1. Use fluid sizing instead of hard-coded pixel layout values

- Do not use `px` for layout-affecting values such as widths, heights, margins, paddings, font sizes, gaps, or positioning.
- Prefer relative units:
  - `%` for container widths and padded content bands.
  - `rem` for typography and spacing that should scale with the root font size.
  - `em` for spacing tied to the local text size.
  - `vw` and `vh` for viewport-based sizing where appropriate.
  - `clamp(min, preferred, max)` for values that need to scale smoothly across breakpoints.
- Acceptable exceptions:
  - `1px` for hairline borders or subtle shadows.
  - Small decorative radius values when they are not affecting layout.
- If a suggestion includes a layout-affecting `px` value, convert it to a relative value before finalizing.

```css
/* Avoid */
.card { width: 320px; padding: 24px; font-size: 18px; }

/* Prefer */
.card {
  width: 100%;
  max-width: 40rem;
  padding: clamp(1rem, 3vw, 2rem);
  font-size: clamp(1rem, 1.2vw + 0.5rem, 1.25rem);
}
```

## 2. Keep the global navigation consistent on every page

Every page must use the same top navigation order and labels:

1. Profile picture / logo
2. Home
3. Works
4. About
5. Resume
6. LinkedIn

- Do not create page-specific nav variants.
- Reuse a shared nav partial, component, or template so all pages stay in sync.
- Keep item labels and order identical across the site.

## 3. Use 5% edge padding for the main navigation

The navigation container should align with a 5% inset from the left and right edges of the viewport.

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}
```

- Do not use a fixed-width wrapper with `max-width: XXXpx; margin: 0 auto;` for the nav if the goal is proportional spacing from the viewport edge.
- Prefer padding-based inset rules or `5vw` equivalents.

## 4. Apply the same 5% padding pattern to project sections and the About section

For each project section and the About section:

- Keep content aligned with a 5% inset from the relevant viewport edge.
- Use a flex or grid layout so the image and text share the remaining width proportionally.
- Avoid fixed-width columns.

```css
.project-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}

.project-section__image,
.project-section__content {
  flex: 1 1 45%;
  min-width: 0;
}
```

On smaller screens, stack the columns with a responsive layout while preserving the same outer padding ratio.

## 5. Keep images fluid and responsive

- Never set a hero or project image width or height in `px`.
- Use responsive image sizing patterns such as:

```css
.project-section__image img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}
```

- For controlled but scalable images, use `clamp()` or `aspect-ratio` with `object-fit: cover`.

```css
.profile-photo {
  width: clamp(6rem, 15vw, 12rem);
  height: auto;
}

.hero-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

## 6. Maintain responsive layout behavior

- Use `flex` or `grid` layouts instead of fixed-width columns.
- Ensure content reflows cleanly on mobile, tablet, and desktop viewports.
- Avoid overflow, clipping, or truncated text caused by fixed pixel values.

## 7. Self-check before finalizing CSS

Before accepting or suggesting CSS, verify the following:

- [ ] No `px` is used for width, height, margin, padding, font-size, or positional layout values except for 1px hairlines.
- [ ] The nav markup is shared and consistent across all pages.
- [ ] Nav padding uses a proportional inset such as `5%` or `5vw`.
- [ ] Project sections and the About section follow the same 5%/5% edge alignment rule.
- [ ] Images use fluid sizing patterns instead of fixed pixel dimensions.
- [ ] Layouts are responsive and reflow correctly at narrow, medium, and wide viewports.