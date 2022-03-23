import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmsDetails = () => {
  const { filmid } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  }, [filmid]);

  return (
    <>
      <div className="card col-md-8">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hello {details.title}</h5>
          <p className="card-text">dheksalk</p>
        </div>
      </div>
    </>
  );
};

export default FilmsDetails;
