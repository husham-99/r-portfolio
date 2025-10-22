import React from 'react'
import './About.css'
import css from '../../assets/css3.svg'
import express from '../../assets/expressjs.svg'
import figma from '../../assets/figma.svg'
import javascript from '../../assets/javascript.svg'
import mongodb from '../../assets/mongodb.svg'
import nodejs from '../../assets/nodejs.svg'
import reactjs from '../../assets/react.svg'
import tailwind from '../../assets/tailwindcss.svg'
import bootstarp from '../../assets/bootstrap.png'
import axios from '../../assets/axios.png'
import nextjs from '../../assets/nextjs.jpg'
import html from '../../assets/html.png'
import material from '../../assets/material.png'

const skillsData = [
    {
        id: 1,
        img: html,
        title: "HTML 5",
        desc: "Interaction"
    },
    {
        id: 2,
        img: css,
        title: "CSS 3",
        desc: "User Interface"
    },
    {
        id: 3,
        img: bootstarp,
        title: "Bootstrap",
        desc: "User Interface"
    },
    {
        id: 4,
        img: material,
        title: "MUI",
        desc: "React UI Libary"
    },
    {
        id: 5,
        img: javascript,
        title: "JavaScript",
        desc: "Interaction"
    },
    {
        id: 6,
        img: reactjs,
        title: "React.js",
        desc: "Framework"
    },
    {
        id: 7,
        img: tailwind,
        title: "Tailwind",
        desc: "User Interface"
    },
    {
        id: 8,
        img: figma,
        title: "Figma",
        desc: "Design Tool"
    },
    {
        id: 9,
        img: nextjs,
        title: "Next.js",
        desc: "Framework"
    },
    {
        id: 10,
        img: axios,
        title: "Axios",
        desc: "HTTP Client"
    },
    {
        id: 11,
        img: nodejs,
        title: "NodeJs",
        desc: "Web Server"
    },
    {
        id: 12,
        img: express,
        title: "ExpressJs",
        desc: "Framework"
    },
    {
        id: 13,
        img: mongodb,
        title: "Mongodb",
        desc: "Data-Base"
    },
]
export default function About() {
    
    return (
        <section className='skill' id='skill'>
            <div className='top-section'>
                <h4 className='text-light'>What Skills I Have</h4>
                <h2>My Experience</h2>
            </div>

            <div className='container container-skill'>
                {skillsData.map(({ id, img, title, desc }) => (
                    <article key={id} className='card-skill'>
                        <div className='icon'>
                            <img src={img} alt='pic' />
                        </div>
                        <div className='content'>
                            <h4>{title}</h4>
                            <p className='text-light'>{desc}</p>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    )
}