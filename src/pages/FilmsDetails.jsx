import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FilmsDetails = () => {
  const { filmid } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  }, [filmid]);

  if (!details) {
    return <h1> Loading...</h1>
  }
  return (
    <>
    <div className="row justify-content-center">
      <div className="card col-md-6">
        <img src={details.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p className="card-subtitle mb-2 text-muted">Director: {details.director}</p>
          <p className="card-subtitle mb-2 text-muted">Producer: {details.producer}</p>
          <p className="card-subtitle mb-2 text-muted">Released Date: {details.release_date}</p>
          <p className="card-text">{details.description}</p>
          <Link to="/Films" id="moreinfo">Back to Films...</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default FilmsDetails;
