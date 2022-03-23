import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);


  return (
    <>

      <div className="container">
        <section className="row justify-content-center mt-5">
          {films.map((films) => (
            <div className="col-md-6" key={`films-${films.id}`}>
              <div className="card shadow my-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{films.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {films.description}
                    </h6>
                    <Link to={`/Films/${films.id}`} id="moreinfo">Read More...</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default Films;
