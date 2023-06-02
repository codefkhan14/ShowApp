import React from "react";

const ShowItem = (props) => {
  return (
    <div className="my-3">
      <div className="card">
        <img src={props.imageUrl} className="card-img-top" alt="Loading..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Rating {props.rating}</p>
          <p className="card-text">{props.summary}</p>

          <a href={props.showUrl} className="btn btn-sm btn-primary">
            Read More
          </a>
          <a href="/" className="btn mx-3 btn-sm btn-primary">
            Book Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
