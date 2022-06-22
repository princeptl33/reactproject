import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top" alt="services img" />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold"> {props.title}</h5>
                    <p className="card-text">
                     Click on Get started and explore example of contents.</p>
                    <NavLink to="/" className="btn btn-primary">
                      Start
                    </NavLink>
                  </div>
                </div>
                </div>
    </>
  );
};

export default Card;
