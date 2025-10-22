
import './Contact.css'
import { FiDownload, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import cv from "../../assets/cv.pdf";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Top from '../backToTop/Top';



export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m99dzkw', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY',)
      e.target.reset()
    };
    return(
        <>
        <section className="contact" id="contact">

            <div className='top-section'>
                
                <h2>Get In Touch</h2>
            </div>
            <div className="container contact-container">
                <div className="contact-content">
                    <p className="text-light first">Im always interested in hearing about new projects and opportunities. Whatever you're looking
                        for a developer, have aquestion or just want to connect, feel free to reach out  
                    </p>
                    <div className="contact-info">
                        <h3>Let's work together</h3>
                        <p className='text-light'>Ready to bring ideas to life? I'm available for freelance 
                            projects and full-time opportunities
                        </p>
                        <div>
                            <a href="#">
                            <FiLinkedin className="icon"/>Linkedin
                            </a>
                        </div>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=966501637943" target='blank'>
                            <FaWhatsapp className="icon"/>Whatsaap
                            </a>
                        </div>
                        <div>
                            <a href={cv} className="download" download={true}>
                            <FiDownload className="icon"/>Download CV
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Get in touch</h3>
                        <input placeholder="Your Full Name"/>
                        <input placeholder="You Email"/>
                        <input placeholder="Subject"/>
                        <textarea placeholder="Your Message"/>
                        <button>Send Message</button>
                    
                </div>
            </div>


        </section>
        <Top/>
        <footer>
            <p>&copy; 2025 | Husham Ahmed, All rights reserved</p>
        </footer>
        </>
    )
}