import React from 'react'
import { useForm } from '../hooks/useForm'
import Modal from 'react-modal'

const AddItemForm = ({ addItem, modalIsOpen, closeModal }) => {

  const initialForm = {
    title: '',
    link: '',
    description: '',
    tags: ''
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [formValues, handleChange] = useForm(initialForm)
  const { title, link, description, tags } = formValues

  const submitData = (evt) => {

    evt.preventDefault()

    addItem(title, link, description, tags)

  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      ariaHideApp={false}
      overlayClassName="overlay-modal"
      contentLabel="Add Form"
    >
      <div className="">
        <form onSubmit={submitData}>
          <div className="form-group text-left mb-3">
            <label htmlFor="inputTitle">Titulo</label>
            <input type="title"
                   name="title"
                   className="form-control"
                   aria-describedby="titleHelp"
                   placeholder="Enter title"
                   value={title}
                   onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-3">
            <label htmlFor="inputPassword">Link</label>
            <input type="text"
                   name="link"
                   className="form-control"
                   placeholder="Link"
                   value={link}
                   onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-3">
            <label htmlFor="inputApp mb-1">Descripcion</label>
            <textarea
                   cols="70" rows="5"
                   name="description"
                   className="form-control"
                   value={description}
                   onChange={handleChange}
            />
          </div>
          <div className="form-group text-left mb-5">
            <label htmlFor="inputPassword">Tags</label>
            <input type="text"
                   name="tags"
                   className="form-control"
                   placeholder="tags"
                   value={tags}
                   onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-secondary me-md-2 text-dark" type="button"
                    onClick={closeModal}>Cancelar
            </button>
            <button className="btn btn-primary" type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </Modal>
  )

}

export default AddItemForm
