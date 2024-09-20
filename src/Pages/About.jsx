import React from "react";
import transition from "../transition";
import Aboutusdiv from "../Aboutcomp/Aboutusdiv";
import AboutTeam from "../Aboutcomp/AboutTeam";
// import Footer from "../Componants/Footer";

const About = () => {
    return (
        <div className="w-full">
            <Aboutusdiv />
            <AboutTeam />
        </div>
    );
};

export default transition(About);
