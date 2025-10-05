1. Project Title: Movie Library

2. Project Description: A simple and responsive Movie Library application built with React.

The app allows users to ->

- Search for movies by title
- View movie details in form of cards.
- Add or remove movies from a personal Watchlist
- Persistent storage using browser localStorage

3. Tech Stack:

   Frontend: React (Vite), TailwindCSS
   API: OMDB API
   Routing: React Router
   State Management: React Hooks, LocalStorage

4. Steps for run locally:
   Follow these steps to run the project locally:

- Clone the repository
  git clone https://github.com/TusharJetagi/Movie-Library.git
  cd movie-library

- Install dependencies
  npm install

- Create a .env file in the root and add OMDB API key:

VITE_API_KEY = e84c8c73

- Start development server
  npm run dev

Now, open http://localhost:5173 in your browser.

5. Assumptions and Design Choices:

- Movie Data Source = Used OMDB API and Since the OMDB API does not provide a popular movies endpoint, I used a hardcoded movie title to display movie cards on the initial page load.

- For CSS = Used Tailwind CSS
