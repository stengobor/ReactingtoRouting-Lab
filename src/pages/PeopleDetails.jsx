import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PeopleDetails = () => {
  const { personid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
      .then((res) => res.json())
      .then((person) => setPerson(person));
  }, [personid]);

  if (!person) {
    return <h1> Loading...</h1>;
  }
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="card col-md-6">
          <h5 className="card-header">{person.name}</h5>
          <div className="card-body">
            <h5 className="card-text text-muted">Age: {person.age}</h5>
            <h5 className="card-text text-muted">
              Hair Color: {person.hair_color}
            </h5>
            <h5 className="card-text text-muted">
              Eye Color: {person.eye_color}
            </h5>
            <Link to="/People" id="moreinfo">
              Back to People...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeopleDetails;

{
  /* <div className="card col-md-6">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-subtitle mb-2 text-muted">Eye Color: {person.eye_color}</p>
          <p className="card-subtitle mb-2 text-muted">Producer: {person.hair_color}</p>
          <p className="card-subtitle mb-2 text-muted">Released Date: {person.age}</p>
          <Link to="/People" id="moreinfo">Back to People...</Link>
      </div> */
}
