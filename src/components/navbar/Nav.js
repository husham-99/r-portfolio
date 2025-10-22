import React, { useState } from "react"
import './Nav.css'
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa6";
import Home from "../home/Home";
import {NavLink} from 'react-router-dom'


export default function Nav() {
    const [activeNav,setActiveNav] = useState('#')
    const [show,setShow] = useState(false)
    return(
        <>
        <header className="header">
            <div className="container">
                <a href="" className="logo" >Portfolio</a>
                <MdMenu id="menu-icon" onClick={()=> setShow(!show)}/>
                
                <nav className={show?"navbar":"navbar2"}>
                    
                    <li>
                        {show?<FaHome className="home-icon"/>:""}
                        <a className={activeNav === '#'?'active':''} href="#home" onClick={()=>{setActiveNav('#')}}>Home</a>
                    </li>
                    <li>
                        {show?<BsGooglePlay className="home-icon"/>:""}
                        <a className={activeNav === '#about'?'active':''} href="#skill" onClick={()=>{setActiveNav('#about')}}>Skills</a>
                    </li>
                    <li>
                        {show?<FaServicestack className="home-icon"/>:""}
                        <a className={activeNav === '#service'?'active':''} href="#service" onClick={()=>{setActiveNav('#service')}}>Services</a>
                    </li>
                    <li>
                        {show?<GrProjects className="home-icon"/>:""}
                        <a className={activeNav === '#project'?'active':''} href="#project" onClick={()=>{setActiveNav('#project')}}>Projects</a>
                    </li>
                    <li>
                        {show?<RiContactsFill className="home-icon"/>:""}
                        <a className={activeNav === '#contact'?'active':''} href="#contact" onClick={()=>{setActiveNav('#contact')}}>Contact</a>
                    </li>
                </nav>
            </div>
            
            
        </header>
        <div className={show?"nav-bg":""}></div>
        </>
        
    )
}