import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmsDetails = () => {
  const { filmsid } = useParams([]);
  const [film, setfilm] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
      .then((res) => res.json())
      .then((film) => setfilm(film));
  }, []);

  return (
    <>
      <div className="morecontainer">
        <section className="row justify-content-center">
          {film.map((film) => (
            <div className="col-md-6" key={film.id}>
                <h1 className="text-primary">Hello</h1>
                <p className="card-subtitle">{film.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default FilmsDetails;
