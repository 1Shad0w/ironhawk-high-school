# Ironhawk High School

Official website concept for a fictional American high school. Built with a
React + Vite frontend and a Node.js + Express backend.

## Structure

```
client/            React + Vite frontend
  src/
    components/    Reusable UI components
    pages/         Route-level pages
    data/          Sample content (news, events, athletics, staff, etc.)
    assets/        (reserved) bundled assets
    styles/        Global CSS theme, layout, components, pages
  public/images/   Ironhawk photography, crest, and mascot
server/            Express API
  routes/          news, events, athletics, contact
  data/            Sample data served by the API
  server.js        App entry point
```

## Requirements

- Node.js 18 or newer

## Getting started

```bash
npm install        # installs client + server workspaces
npm run dev        # runs Express (:5000) and Vite (:5173) together
```

Open http://localhost:5173. Vite proxies `/api` requests to the Express server.

## Production

```bash
npm run build      # builds the client
npm start          # builds the client, then serves it from Express (:5000)
```

## API

| Method | Route                 | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | `/api/news`           | All news posts             |
| GET    | `/api/news/:slug`     | A single article           |
| GET    | `/api/events`         | Upcoming events            |
| GET    | `/api/athletics`      | All athletic programs      |
| GET    | `/api/athletics/:slug`| A single program           |
| POST   | `/api/contact`        | Contact / enrollment form  |
| GET    | `/api/health`         | Health check               |

The frontend fetches news, events, and athletics from the API and falls back to
the local sample data in `client/src/data` if the server is unavailable.
