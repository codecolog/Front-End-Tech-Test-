---

# SwipeJobs

Frontend Developer Technical Test Solution

<p  style="text-align: center;"><img  src="https://abhinavbakshi.in/static/logo-alt.png"  width="256"></p>

## Development server

Run `nx serve swipe-jobs` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build swipe-jobs` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Salient Features

- Uses context API to maintain route, theme, setting and auth information
- Uses redux toolkit to store worker and jobs information
- Uses entity adapter to manage jobs CRUD
- Uses axios mock API adapter with fake-db to allow development even when backend is unreachable (Set line 6 to true in fake-db/index.ts to enable)
- Integrated material UI theming to allow creating themes. Ships with two themes, light and dark. Click on user name in header to toggle theme
- Uses custom routing implementation to allow fine grain control over routing and lazy loaded components
- Uses custom generated font-family for icons
- Has auth guard to protect routes
