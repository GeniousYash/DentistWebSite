import React, { useEffect } from "react";
import transition from "../transition";
import Banner from "../Homecomp/Banner";
import ImgCompair from "../Homecomp/ImgCompair";
import CompAboutus from "../Homecomp/CompAboutus";
import FAQ from "../Homecomp/FAQ";
import OurServices from "../Homecomp/OurServices";
import WhatWeDo from "../Homecomp/WhatWeDo";
import OurTeam from "../Homecomp/OurTeam";
import Textscrolleffect from "../Homecomp/Textscrolleffect";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';




const Home = () => {
    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        // Destroy Locomotive Scroll instance on unmount
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);
    return (
        <div data-scroll-container className="w-full">
            <Banner />
            <WhatWeDo />
            <CompAboutus />
            <Textscrolleffect />
            <ImgCompair />
            <OurServices />
            <OurTeam />
            <FAQ />
        </div>
    );
};

export default transition(Home);
