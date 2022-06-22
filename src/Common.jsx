import React from "react";
import { NavLink } from "react-router-dom";

const Common =(props)=>{
    return(
        <>
     
        <section id ="header" className="d-flex align-items-center mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column ">
                            <h1>{props.name}<strong className="brand-name"> Prince Technology</strong></h1>
                            <h5 className="my-3">
                                {props.content}
                            </h5>
                            <div className="mt-4">
                                <NavLink to={props.visit} className="btn-get-started" >  {props.btname} </NavLink>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-md-6 col-12 order-1 order-lg-2 header-img">
                            <img  className="img-fluid imgsr" src={props.imgsrc} alt="Brand Img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Common ;