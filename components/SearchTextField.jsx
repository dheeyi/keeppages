import { useForm } from '../hooks/useForm'

const SearchTextField = ({ searchFn, sortAscFn }) => {

  const initialForm = {
    search: ''
  }

  const [formValues, handleChange] = useForm(initialForm)
  const { search } = formValues

  const submitData = (evt) => {

    evt.preventDefault()

  }

  const handleOnChange = () => {

    searchFn(search)

  }

  return (
    <div className="row">
      <div className="col-6">

        <form onSubmit={submitData}>
          <div className="input-group">
            <span className="input-group-text icon-click" id="basic-addon-search" onClick={handleOnChange}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                   viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>

            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon-search"
              value={search}
              onChange={handleChange}
            />
          </div>
        </form>

      </div>
      <div className="col-6">
        <div className="form-check form-switch mt-2 float-end pe-2">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={(evt) => {
            sortAscFn(evt.target.checked)
          }} />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate"
               viewBox="0 0 16 16">
            <path
              d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
            <path
              d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchTextField
