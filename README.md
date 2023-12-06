# PasteHub

cs390wap final project

## PasteHub backend

The backend and frontend integration is not complete (honestly neither is complete), but this is what my backend is so far:

- [PocketBase](https://pocketbase.io/) - Instead of building out a backend infrastructure myself, I figured I would use PocketBase as the foundation of my backend. I also tried SupaBase, but I didn't want to have a Docker container running on my computer since that has more overhead.
- [pb_schema.json](./pb_schema.json) - Configuration for the PocketBase backend, which you can just import into a fresh PocketBase instance.

How to get it working:
- Download PocketBase from website (It's a standalone executable so you don't have to install it. It might require Go to work since it is written in Go, but I personally doubt that it will.).
- Run `./pocketbase serve` and open `http://localhost:8090` in web browser
- Log in on admin screen.
- Navigate to `Settings > Import Collections`.
- Either load `pb_schema.json` or copy its contents into the text box to import it.
- PocketBase should now be prepared for the database.
- In `./server/pb_backup/`, run `npm i` and `node index.mjs` to populate the backend with some data.
- Your database (with some test data) should be fully ready!

## Client (less than) MVP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

My notes:
- It's functional but there is some stuff that doesn't work at the moment.
- The documentation for [this React page](https://react.dev/reference/react-dom/components/form#usage) is straight up wrong and it cost me at least 40 minutes trying to figure out why. Essentially, the `action` attribute of the `<form>` component expects strings only, but the `onSubmit` attribute of the component expects functions only. It tells us to use `action` while passing in a function, and cue me being extremely confused for over half an hour. I want to die.
- The path forward would be to fix the things that don't work (namely setting up an additional backend service to conduct `fetch` requests on Pokepaste so that I don't have to deal with CORS, and fixing my issues with initially setting up the `teamList` state in the `App` component).
