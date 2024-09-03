import React from "react";
import transition from "../transition";
import Banner from "../Homecomp/Banner";
import ImgCompair from "../Homecomp/ImgCompair";
import CompAboutus from "../Homecomp/CompAboutus";
import FAQ from "../Homecomp/FAQ";
import OurServices from "../Homecomp/OurServices";



const Home = () => {

  return (
    <div className="w-full m-auto">
        <Banner />
        <CompAboutus />
        <ImgCompair />
        <OurServices />
        <FAQ/>
    </div>
  );
};

export default transition(Home);
