# Tremor Raw Design Checklist

Use this checklist when adding or changing Tremor-style dashboard components.

## Foundations

- Use Tailwind CSS utilities as the styling API and keep component output copy-paste friendly.
- Prefer neutral surfaces: white backgrounds, gray borders, subtle shadows, and dark-mode equivalents.
- Keep radius small (`rounded-sm` or `rounded-md`) unless the primitive needs a circular shape.
- Use blue as the primary accent for selected, active, and focus states.
- Preserve dark mode classes beside light mode classes for every visible surface.
- Keep text compact and dashboard-oriented: `text-sm` for primary UI copy and `text-xs` for dense metadata.

## Component Structure

- Build on accessible primitives when available, especially Radix UI for overlays, menus, tabs, toggles, and form controls.
- Expose `className` and relevant primitive props so consumers can extend components without forking.
- Keep public component names and exported types stable.
- Mark interactive client components with `"use client"`.
- Use `forwardRef` for components that render focusable or layout-significant DOM nodes.
- Put visual variants in `tailwind-variants` only when a component has meaningful reusable variants.

## Interaction States

- Apply the shared `focusRing` or `focusInput` helpers to every keyboard-focusable control.
- Include hover, active, disabled, invalid, selected, and dark-mode states where relevant.
- Disabled controls should block pointer interactions and visibly reduce contrast.
- Preserve ARIA state mapping from primitives, such as `aria-selected`, `aria-disabled`, and `aria-invalid`.
- Avoid layout shift in hover or selected states.

## Forms

- Use consistent input padding, border, background, and placeholder colors across inputs, textareas, selects, date pickers, and sliders.
- Render invalid state with red border/ring classes via shared helpers.
- Keep trigger text truncated with `text-ellipsis` for compact layouts.
- Use native semantics where possible, and primitive semantics where native controls are insufficient.

## Charts

- Use the shared chart color palette from `src/utils/chartColors.ts`.
- Keep legends, tooltips, axes, and labels compact and readable in both light and dark themes.
- Normalize tooltip payloads before exposing them to callbacks or custom tooltip components.
- Support controlled callbacks such as `onValueChange` without requiring consumers to know Recharts internals.
- Avoid chart animation in components where deterministic rendering matters.

## Calendar And Date Picking

- Use `react-day-picker` primitives and preserve keyboard navigation.
- Keep month navigation compact, with optional year-jump controls when `enableYearNavigation` is enabled.
- Keep date range visuals continuous: start and end dates rounded outward, middle range cells flat.
- Maintain locale support through `date-fns` locale objects.
- Map legacy navigation bounds to current DayPicker props where compatibility matters.

## Storybook Coverage

- Every component should have at least one story showing the default state.
- Add stories for disabled, invalid, controlled, multi-item, dark-background, and overflow states when applicable.
- Stories should use realistic dashboard data instead of placeholder-only examples.
- Keep stories typed with `Meta` and `StoryObj` from the active Storybook React framework.

## Upgrade Checks

- Run `pnpm install` after dependency changes and commit the lockfile.
- Run `pnpm lint`.
- Run `pnpm exec tsc --noEmit`.
- Run `pnpm exec vitest run`.
- Run `pnpm build` to verify the Storybook production bundle.
- Review package-manager peer warnings and avoid unresolved mixed-major Storybook packages.
