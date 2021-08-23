import React from 'react'
import Modal from 'react-modal'

const ModalForm = ({ modalIsOpen, closeModal, itemSelected, deleteItem }) => {

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

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      ariaHideApp={false}
      overlayClassName="overlay-modal"
      contentLabel="Example Modal"
    >
      <div className="row d-flex flex-column justify-content-center">
        <h5 className="py-2 px-5">Eliminar página</h5>

        <p className="fw-bolder mt-3 py-2 px-5">¿Está seguro que quiere remover la página "{itemSelected.name}"?</p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-secondary me-md-2 text-dark" type="button"
                  onClick={closeModal}>Cancelar
          </button>
          <button className="btn btn-primary" type="button"
                  onClick={() =>{deleteItem(itemSelected.id)}}>Aceptar
          </button>
        </div>

      </div>
    </Modal>
  );
};

export default ModalForm
