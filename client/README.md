# PasteHub client (less than) MVP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

My notes:
- It's functional but the frontend doesn't actually communicate with the backend because I stayed up WAY too late last night working on the modal.
- The documentation for [this React page](https://react.dev/reference/react-dom/components/form#usage) is straight up wrong and it cost me at least 40 minutes trying to figure out why. Essentially, the `action` attribute of the `<form>` component expects strings only, but the `onSubmit` attribute of the component expects functions only. It tells us to use `action` while passing in a function, and cue me being extremely confused for over half an hour. I want to die.
- In theory, it shouldn't be too difficult to get the frontend talking with the backend, especially since I won't be communicating directly with Express, and instead there's an API that I can just call. However, that'll take time, which I don't have.
- The path forward would be to replace `printLink` with a different function that would take the data passed in, run it through the `pasteGet` function, [pass it to the parent component](https://www.freecodecamp.org/news/pass-data-between-components-in-react/), and then update the backend (by creating a new entry) and the frontend (by pulling from the updated backend).

