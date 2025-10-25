
import './Contact.css'
import Modal from './Modal'
import { FiDownload, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import cv from "../../assets/cv.pdf";
import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Top from '../backToTop/Top';
import 'animate.css/animate.min.css'



export default function Contact() {
    const [inputs,setInputs] = useState({name:"",email:"",subject:"",message:""});
    const [showModal,setShowModal] = useState(false)
    const [animation,SetAnimation] = useState('animate__fadeInUp animate__slow')
    const [errorMessage,SetErrorMessage] = useState(null)
    

    function handleFormSupmit(e) {
        e.preventDefault()
        SetErrorMessage(null)
        const {name,email,subject,message} = inputs
        if(name.trim().length < 6){
            SetErrorMessage("enter your full name please 🤨 !!")
        }
        else if(!email.includes("@")){

            SetErrorMessage("enter avalid email please 😡 !!")
        }else if(subject.trim().length < 3){

            SetErrorMessage("enter your subject please 🙄 !!")
        }else if (message.trim().length < 5){
            SetErrorMessage("enter your Message please 🤬 !!")
        }
        setShowModal(true)
        
    }

    function handleDivClick() {
        if(showModal){

            setShowModal(false)
        }
        
        
    }

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
                <div className={ `contact-content animate__animated ${animation}`}>
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
                <div className={ `contact-form animate__animated ${animation}`} onClick={handleDivClick}>
                    <h3>Get in touch</h3>
                        <input placeholder="Your Full Name *" value={inputs.name} onChange={((e)=>{setInputs({...inputs,name:e.target.value})})}/>
                        <input placeholder="Your Email *" value={inputs.email} onChange={((e)=>{setInputs({...inputs,email:e.target.value})})}/>
                        <input placeholder="Subject *" value={inputs.subject} onChange={((e)=>{setInputs({...inputs,subject:e.target.value})})}/>
                        <textarea placeholder="Your Message *" value={inputs.message} onChange={((e)=>{setInputs({...inputs,message:e.target.value})})}/>
                        <button  onClick={handleFormSupmit}>Send Message</button>
                        <Modal errorMessage={errorMessage} isVisible={showModal}/>
                    
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