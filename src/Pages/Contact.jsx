import React from "react";
import transition from "../transition";
import Contactus from "../Contactcomp/Contactus";
import Map from "../Contactcomp/Map";
// import Footer from "../Componants/Footer";

const Contact = () => {
  return (
    <div className="container w-full">
        <Map/>
        <Contactus/>
        {/* <Footer /> */}
    </div>
  );
};

export default transition(Contact);
