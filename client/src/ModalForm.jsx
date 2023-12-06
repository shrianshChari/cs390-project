import React from "react";
import fetchPaste from "./pasteGet";

import './styles/ModalForm.css'

export default function ModalForm({ dataFromInput }) {
  const [isOpen, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("")

  // https://www.w3schools.com/js/js_regexp.asp
  function verifyPasteUrl(url) {
    const pattern = /https?:\/\/pokepast\.es\/[0-9a-f]+/

    return pattern.test(url)
  }

  function clearModal() {
    setOpen(false)
    setUrl("")
  }

  function processPokepaste(event) {
    event.preventDefault()

    if (verifyPasteUrl(url)) {
      /*
       * Ideally, I could just use this code. However,
       * for reasons explained in pasteGet.mjs, I can't
       * use the commented out lines of code.
       * Below I have put what should be the output of that code.
       */
      // const pasteData = fetchPaste(url)
      //   .then((res) => {
      //     console.log(res)
      //   })

      const pasteData = {
        pokepaste_url: "https://pokepast.es/d52689965a735213",
        pokemon: ["weezing-galar", "heatran", "arceus-grass", "zacian", "cyclizar", "palkia"],
        title: "Bulky Tran 4",
        author: "Grabby",
        format: "gen9ubersuu"
      }

      dataFromInput(pasteData)
    } else {
      alert('Please provide a PokePaste URL.')
    }
    clearModal()
  }

  return (
    <div className="completeModal">
      {/*
      * For using the <dialog> element: https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
      * For the idea of making the open state of the modal reactive: https://blog.rixlayer.dev/react-modals
      */}
      <button id="openModal" className="openModal" onClick={() => setOpen(true)}>Add Team</button>
      <dialog open={isOpen} className="dialog">

        {/* https://www.w3schools.com/react/react_forms.asp */}
        <form onSubmit={processPokepaste}>
          <label><h3 className="linkTitle">Pokepaste Link:</h3></label>

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

        <button id="closeModal" onClick={() => clearModal()}>Close</button>
      </dialog>
    </div>
  )
}
