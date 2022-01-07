import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  return (
    <div key={props.id} className="col">
      <div className="card card-min-height shadow">
        <Link to={`characters/${props.id}`}>
          <img
            src={props.image}
            className="card-img-top rounded"
            alt={props.name}
          />
        </Link>
        <div className="card-body">
          <Link className="text-decoration-none" to={`/characters/${props.id}`}>
            <h5 className="card-title text-center text-info fs-4 pt-2">
              {props.name}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
