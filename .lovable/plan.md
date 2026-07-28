Add an interactive "Spice Level Explorer" card to the Alpha Bistro PWA home page, placed between the Menu carousel and the Loyalty Rewards card.

What will be built:
- New component: `src/components/bistro/SpiceLevelExplorer.tsx`
  - Editable `SPICE_LEVELS` data object at the top of the file containing all copy, SHU ranges, featured peppers, descriptions, and icon strings for Levels 0–4.
  - Client-side React state (`useState`) tracking the selected level.
  - A custom-styled range slider (Levels 0–4) with stepped labels.
  - An informational card that updates in real time as the slider moves:
    - High-visibility icon badge above the title.
    - Title, SHU range, featured pepper, and description.
    - Subtle background/border color transition:
      - Level 0: deep green (`#10B981`)
      - Level 2: deep amber (`#F59E0B`)
      - Level 4: vibrant crimson (`#EF4444`)
      - Intermediate levels blend between the nearest anchors.
  - Mobile-first touch-friendly sizing and spacing consistent with existing bistro components.
- Route integration: import and render `<SpiceLevelExplorer />` in `src/routes/index.tsx` between `<MenuCarousel />` and `<LoyaltyCard />`.
- Styling: use Tailwind semantic utilities where possible; for the exact hex interpolation required by the spec, use inline styles derived from the data object so the colors remain editable in one place.

Out of scope:
- No backend or persistent state; selection lives in component state only.
- No changes to navigation, manifest, or service worker.

Verification:
- Confirm the component renders on the home page and updates smoothly as the slider moves.
- Spot-check the color interpolation at each level and the responsive layout in the mobile preview.