# Study Finder Feature Migration Notes

This document records the changes made in this chat so the same feature can be implemented in another codebase.

## Feature Added

A study finder was added to the homepage hero section. It asks the visitor to select:

1. Degree program
2. Education level
3. Study destination

After submission, the visitor is routed to:

`/destination/detail?program=...&level=...&destination=...`

The detail page displays the selected destination, matching degree programs, study level, and institutes/universities for that destination.

## Homepage Hero Changes

The hero was converted into a client component with form navigation:

- Uses `useRouter` from `next/navigation`.
- Uses a native HTML `<form>` with three required `<select>` controls.
- Uses `FormData` to read the selected values.
- Uses `URLSearchParams` to create a shareable query string.
- Calls `router.push()` to navigate to `/destination/detail`.
- Added a study search panel over the existing hero image.
- Added a submit button labeled `Explore programs`.
- Added accessible labels using visually hidden text.
- Existing hero heading, CTA links, and statistics were retained.

The three form field names are:

- `program`
- `level`
- `destination`

## Shared Study Data

A shared data module was added at `lib/study-data.ts`.

It contains:

### Education Levels

- `undergraduate`: Undergraduate / Bachelor's
- `postgraduate`: Postgraduate / Master's
- `phd`: PhD / Doctorate

### Degree Programs

- Art & Humanities
- Business & Management
- Computing & Technology
- Engineering
- Healthcare & Life Sciences
- Social Sciences

### Destinations

- United Kingdom
- Australia
- Canada
- New Zealand
- Europe
- Turkey

Each destination includes:

- URL-safe value
- Display name
- Flag
- Short description
- Institute/university list

### Program Catalog

Generalized programs were added for the main categories, including:

- Art, Design & Creative Practice
- English Literature & Cultural Studies
- Business Administration & Management
- Finance, Accounting & Economics
- Computer Science & Software Engineering
- Data Science & Artificial Intelligence
- Engineering & Renewable Energy
- Public Health & Healthcare Management
- Biomedical & Life Sciences
- International Relations & Development
- Psychology & Social Sciences

Each program includes a category and typical duration. The selected education level is displayed with the result.

## New Route

A new route was added at:

`app/destination/detail/page.tsx`

The page is a server component and reads the query parameters through the Next.js App Router API:

```ts
type DetailPageProps = {
  searchParams: Promise<{
    program?: string;
    level?: string;
    destination?: string;
  }>;
};
```

The route:

- Awaits `searchParams`.
- Resolves the selected destination from the shared data module.
- Resolves display labels for the selected program and education level.
- Filters the program catalog by the selected degree category.
- Displays the destination flag, title, description, selected filters, matching programs, and institutes.
- Includes a link back to the homepage study finder.
- Includes a CTA linking to `/contact`.
- Falls back to United Kingdom if the destination parameter is missing or invalid.
- Falls back to all supported labels if program or level parameters are missing or invalid.

## Files Added

- `lib/study-data.ts`
- `app/destination/detail/page.tsx`
- `STUDY-FINDER-MIGRATION.md`

## Files Updated

- `components/Hero.tsx`

## Styling and UI Notes

The implementation follows the existing Pace Setter design system:

- Primary navy background
- Emerald accent color
- Existing hero imagery
- Rounded controls and panels
- Responsive one-column/mobile and two-column/desktop layout
- Lucide icons for search, arrows, graduation, institute, location, and confirmation states
- Tailwind utility classes

## Navigation Example

A submitted selection can produce a URL like:

`/destination/detail?program=computing&level=postgraduate&destination=australia`

Expected result:

- Destination: Australia
- Program category: Computing & Technology
- Level: Postgraduate / Master's
- Programs include Computer Science & Software Engineering and Data Science & Artificial Intelligence
- Institutes include University of Melbourne, University of Sydney, Monash University, University of Queensland, and UNSW Sydney

## Validation Completed

The following checks passed after implementation:

```text
npx tsc --noEmit
npm run build
```

The production build confirmed the new route as a dynamic server-rendered route:

```text
/destination/detail
```

A route smoke test also returned HTTP 200 and confirmed that the filtered program and institute content rendered for the Australia + Computing + Postgraduate example.

## Known Existing Lint Issues

`npm run lint` still reports issues that were already present outside the new feature, including:

- Unescaped apostrophes in `app/events/page.tsx`
- Unescaped apostrophe in `app/faqs/page.tsx`
- Synchronous state update warning in `components/Navbar.tsx`
- Unused imports/variables in existing pages

The new hero component and new destination detail route did not produce lint errors after repair.

## Porting Checklist

1. Copy the shared study data structure into the target codebase.
2. Add the hero form and its required select fields.
3. Submit the form through the target router to `/destination/detail`.
4. Add the detail route and parse `program`, `level`, and `destination` query parameters.
5. Render filtered programs and destination institutes.
6. Replace the sample institute/program catalog with real partner data when available.
7. Update styling tokens and image paths to match the target codebase.
8. Run the target project type check, lint, build, and a real URL smoke test.
