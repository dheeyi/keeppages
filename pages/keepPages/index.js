import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchTextField from '../../components/SearchTextField'
import ListCard from '../../components/ListCard'
import Modal from '../../components/Modal'
import AddItemForm from '../../components/addItemForm';

const KeepPage = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)
  const [formIsOpen, setIsOpenForm] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  useEffect(() => {

    axios.get('/api/keep-pages/list', {})
      .then((response) => {

        setData(response?.data || [])

      })
      .catch((errors) => {

        console.log(errors)

      });

  }, [])

  useEffect(() => {

    axios.post('/api/keep-pages/search', {
      search
    })
      .then((response) => {

        setData(response?.data || [])

      })
      .catch((errors) => {

        console.log(errors)

      })

  }, [search])

  const deleteItem = ( id ) => {

    axios.post('/api/keep-pages/delete', {
      id
    })
      .then((response) => {

        setIsOpen(false)
        setData(response?.data || [])

      })
      .catch((errors) => {

        setIsOpen(false)
        console.log(errors)

      })
  }

  const sortAscFn = ( checked ) => {

    axios.post('/api/keep-pages/sort', {
      checked
    })
      .then((response) => {

        setIsOpen(false)
        setData(response?.data || [])

      })
      .catch((errors) => {

        setIsOpen(false)
        console.log(errors)

      })
  }

  const addItem = (title, link, description, tags) => {

    axios.post('/api/keep-pages/add', {
      title,
      link,
      description,
      tags
    })
      .then((response) => {

        setIsOpenForm(false)
        setData(response?.data || [])

      })
      .catch((errors) => {

        setIsOpenForm(false)
        console.log(errors)

      })

  }

  const updateItemSelected = (id, name) => {
    setItemSelected({id, name})
    setIsOpen(true)
  }

  return (
    <div className="col-12">

      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="py-3"><a href="https://keeppagesbydw.herokuapp.com/" className="text-primary">Keep Pages!</a></h1>

        <Modal
          modalIsOpen={modalIsOpen}
          closeModal={() => {setIsOpen(false)}}
          itemSelected={itemSelected}
          deleteItem={deleteItem}
        />

        <AddItemForm
          modalIsOpen={formIsOpen}
          closeModal={() => {setIsOpenForm(false)}}
          addItem={addItem}
        />

        <div className="row row-cols-1 w-100 ps-3">
          <SearchTextField  searchFn={(value) => {
            setSearch(value)
          }} sortAscFn={sortAscFn}/>
        </div>

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-3">
          {
            data.map((item, index) => {
              return <ListCard data={item} openModalFn={updateItemSelected} key={index}/>
            })
          }
        </div>

        <button className="btn btn-primary rounded-circle fs-2 fw-bold fixed-button"
          type="button"
          onClick={() => {setIsOpenForm(true)}}
          >+
        </button>

      </div>
    </div>
  );
};

export default KeepPage;
