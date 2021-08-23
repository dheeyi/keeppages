import React from 'react';

const ListCard = ({ data, openModalFn }) => {

  const {id = 0, title = '', description = '', tags = []} = data;

  return (
    <div className="col">
      <div className="card rounded-end-top shadow p-2 h-100">
        <div className="card-body">
          <h5 className="card-title text-primary fs-5 pb-3">{title}</h5>
          <p className="card-text text-muted fs-7">{description}</p>
        </div>
        <div className="container">
          <div className="row row-cols-auto">
            {
              tags.map((tag, indexTag) => {
                return <a href="#" className="col btn btn-light btn-sm rounded-pill text-muted fw-bolder me-2"
                          key={indexTag}>#{tag}</a>;
              })
            }
          </div>
        </div>
        <div className="container my-3">
          <div className="row row-cols-auto float-end">
            <span className="icon-click" id="basic-addon-search2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
            </span>
            <span className="icon-click text-danger" onClick={() => {openModalFn(id, title)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
