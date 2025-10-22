import React from "react";
import me from "../../assets/me.jpg";
import cv from "../../assets/cv.pdf";
import "./Home.css";
import HomeSocials from "./HomeSocials";

export default function Home() {
  return (
    <div className="home-content">
        <div className="home" id="home">
            <div className="container home-container">
                <div className="info">
                    
                    <h1>Husham Ahmed</h1>
                    <h4 className="text-light">Frontend Developer</h4>
                    <div className="btns">
                        <a className="btn" href={cv} download={true}>Download CV</a>
                        <a className="btn btn-primary" href="#contact">Get In Touch</a>
                    </div>
                    <HomeSocials />
                </div>

                <div className="me">
                <img src={me} alt="picture" />
                </div>
        
            </div>
        </div>
    </div>
  );
}
