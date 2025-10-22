import React from "react"
import './Project.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const portfolioData = [
    {
        id: 1,
        img: img1,
        title: "portfolio item 1",
        github: 'https://github.com/project1',
        demo: 'https:/demo1.com'

    },
    {
        id: 2,
        img: img2,
        title: "portfolio item 2",
        github: 'https://github.com/project2',
        demo: 'https:/demo2.com'

    },
    {
        id: 3,
        img: img3,
        title: "portfolio item 3",
        github: 'https://github.com/project3',
        demo: 'https:/demo3.com'

    },
    {
        id: 4,
        img: img4,
        title: "portfolio item 4",
        github: 'https://github.com/project4',
        demo: 'https:/demo4.com'

    },
    {
        id: 5,
        img: img5,
        title: "portfolio item 5",
        github: 'https://github.com/project5',
        demo: 'https:/demo5.com'

    },
    {
        id: 6,
        img: img6,
        title: "portfolio item 6",
        github: 'https://github.com/project6',
        demo: 'https:/demo6.com'

    },
    
    
]

export default function Project() {
    return(
        <section className="project" id="project">

            <div className='top-section'>
                <h4 className='text-light'>My Recent Work</h4>
                <h2>Projects</h2>
            </div>

            <div className="container project-container">
                {portfolioData.map(({id,img,title,github,demo})=>(

                    <article key={id} className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={img} alt="pic"></img>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-btns">
                        <a href={github} className="btn" target="blank">Github <FaGithub className="icon2"/></a>
                        <a href={demo} className="btn btn-primary" target="blank">Live Demo <FaArrowUpRightFromSquare className="icon"/></a>
                    </div>
                    </article>



                ))}
                
            </div>
        </section>
    )
}