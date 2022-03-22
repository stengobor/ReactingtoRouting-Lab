import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmsDetails = () => {
  const { filmid } = useParams([]);
  const [films, setfilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allfilms) => setfilms(allfilms));
  }, []);

  return (
    <>

    <main className="morecontainer">
      <section className="row justify-content-center">
        <div className="card col-md-6">
          <h1 className="text-primary">Hello {filmid} </h1>
          <p className="card-subtitle">{films.description}</p>
          </div>
      </section>
    </main>
      {/* <div class="container">
        <section className="row justify-content-center mt-5">
          {films.map((films) => (
            <div className="col-md-6" key={`films-card-${films.id}`}>
              <div className="card shadow my-2">
                <img src={films.image} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-header">{filmsid}</h4>
                  <p className="card-subtitle">Director: {films.director}</p>
                  <p className="card-subtitle">Producer: {films.producer}</p>
                  <p className="card-subtitle">
                    Released in: {films.release_date}
                  </p>
                  <p className="card-subtitle">
                    Rotten Tomatoes Score: {films.rt_score}
                  </p>
                  <div className="card-footer">
                    <p className="card-subtitle">{films.description}</p>
                    <a
                      href="https://ghibliapi.herokuapp.com/films"
                      class="card-link"
                    >
                      API Resource Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div> */}
    </>
  );
};

export default FilmsDetails;