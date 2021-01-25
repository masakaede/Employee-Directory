import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default Card;
