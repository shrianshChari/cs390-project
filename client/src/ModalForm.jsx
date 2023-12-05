import React from "react";

import './styles/ModalForm.css'

export default function ModalForm() {
  const [isOpen, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("")

  function printLink(event) {
    event.preventDefault()
    alert(`You're trying to analyze ${url}`)
    setOpen(false)
    setUrl("")
  }

  return (
    <div className="completeModal">
    {/*
      * For using the <dialog> element: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
      * For the idea of making the open state of the modal reactive: https://blog.rixlayer.dev/react-modals
      */}
      <button id="openModal" className="openModal" onClick={() => setOpen(true)}>Add Team</button>
      <dialog open={isOpen}>

        {/* https://www.w3schools.com/react/react_forms.asp */}
        <form onSubmit={printLink}>
          <label>Pokepaste Link:</label>

          <br />

          <input
            type="text"
            name="pokepasteUrl"
            placeholder="https://pokepast.es/"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <br />

          <button type="submit">Submit</button>
        </form>

        <button id="closeModal" onClick={() => setOpen(false)}>Close</button>
      </dialog>
    </div>
  )
}
