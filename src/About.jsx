import React from "react";
import about from "../src/images/about.png"; 
import Common from "./Common";

const About =()=>{
    return(
        <>
     
        <Common name=" Welcome To About Page" imgsrc={about} visit="/contact" btname="Contact Now" content="Hii we are devlopers works with Prince Technology .we devlope the resonsive and inteactive web,app and software. We are provide you Digitaly Access. You want any problem Contact Us." />
        </>
    )
}

export default About;