import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  return (
    <>
  
      <div className="container">
        <section className="row justify-content-center mt-5">
          {people.map((people) => (
            <div className="col-md-6" key={`people-card-${people.id}`}>
              <div className="card shadow my-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>
                    <Link
                      to={`/People/${people.id}`}
                      id="moreinfo"
                    >
                      Read More...
                    </Link>
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

export default People;
