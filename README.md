A React + Vite webapp utilizing RESTCountries API.

Working features:

- Fetching the countries in random order (by RESTCountries)
- Sort alphabetically, by population or by area
- Search for a country by name
- Filter countries either by continent, timezone or language
- See more info on a country by clicking Learn more
- Neighbors of the selected country are also clickable

Planned features:

- Multiple filters used at the same time
- Additional filters: landlocked/not, independent/not
- Clear all filters button
- Add/remove countries to 'visited' or 'want to visit' list, in Localstorage
- Going back to country list from a selected country should keep previous settings (sort, filter)
- Throw me a random country
- Translations of the country's name
- When sorted, a number should appear in front of the name in the list
- Google maps integration
- Weather data for the capital by API

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
