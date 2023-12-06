# PasteHub client (less than) MVP

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

