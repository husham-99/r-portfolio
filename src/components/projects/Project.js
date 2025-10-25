import React,{useState} from "react"
import './Project.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import 'animate.css/animate.min.css'

const portfolioData = [
    {
        id: 1,
        img: img1,
        title: "E-Commerce 1",
        github: 'https://github.com/husham-99/e-commerce-2',
        demo: 'https://husham-99.github.io/e-commerce-2'

    },
    {
        id: 2,
        img: img2,
        title: "E-Commerce 2",
        github: 'https://github.com/husham-99/e-commerce',
        demo: 'https://husham-99.github.io/e-commerce'

    },
    {
        id: 3,
        img: img3,
        title: "Tasks Planner",
        github: 'https://github.com/husham-99/tasks',
        demo: 'https://husham-99.github.io/tasks'

    },
    {
        id: 4,
        img: img4,
        title: "Hotels Reservation",
        github: 'https://github.com/husham-99/hotels',
        demo: 'https://husham-99.github.io/hotels'

    },
    {
        id: 5,
        img: img5,
        title: "Memory Game",
        github: 'https://github.com/husham-99/memory-game',
        demo: 'https://husham-99.github.io/memory-game'

    },
    {
        id: 6,
        img: img6,
        title: "Adhan Timing",
        github: 'https://github.com/husham-99/adhan',
        demo: 'https://husham-99.github.io/adhan'

    },
    {
        id: 7,
        img: img6,
        title: "Quis App",
        github: 'https://github.com/husham-99/quis-app',
        demo: 'https://husham-99.github.io/quis-app'

    },
    {
        id: 8,
        img: img6,
        title: "Building Project",
        github: 'https://github.com/husham-99/building-project',
        demo: 'https://husham-99.github.io/building-project'

    },
    
    {
        id: 9,
        img: img6,
        title: "Silver Design",
        github: 'https://github.com/husham-99/s.design',
        demo: 'https://husham-99.github.io/s.design'

    }
    
    
]

export default function Project() {
    const [animation,SetAnimation] = useState('animate__fadeInUp animate__slow')
    return(
        <section className="project" id="project">

            <div className='top-section'>
                <h4 className='text-light'>My Recent Work</h4>
                <h2>Projects</h2>
            </div>

            <div className="container project-container">
                {portfolioData.map(({id,img,title,github,demo})=>(

                    <article key={id} className={ `portfolio-item animate__animated ${animation}`}>
                    <div className="portfolio-item-img">
                        <img src={img} alt="pic"></img>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-btns">
                        <a href={github} className="btn" target="blank"><FaGithub className="icon2"/>Show Code </a>
                        <a href={demo} className="btn btn-primary" target="blank"><FaArrowUpRightFromSquare className="icon"/>Live Demo </a>
                    </div>
                    </article>



                ))}
                
            </div>
        </section>
    )
}