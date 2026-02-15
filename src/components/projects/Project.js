import { useEffect } from "react";
import './Project.css'
import img1 from '../../assets/electro-mart.png'
import img2 from '../../assets/digi-store.png'
import img3 from '../../assets/tasks.jpeg'
import img4 from '../../assets/hotel-resevation.jpeg'
import img5 from '../../assets/memorygame.jpeg'
import img6 from '../../assets/adhan.jpeg'
import img7 from '../../assets/quis-app.jpeg'
import img8 from '../../assets/الفجر الساطع.jpeg'
import img9 from '../../assets/silver-design.jpeg'
import img10 from '../../assets/weatherhub.jpeg'

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import 'animate.css/animate.min.css'

const portfolioData = [
    {
        id: 1,
        img: img1,
        title: "E-Commerce 1",
        github: 'https://github.com/Maxii109/ecommerce-1',
        demo: 'https://maxii109.github.io/ecommerce-1/'

    },
    {
        id: 2,
        img: img2,
        title: "E-Commerce 2",
        github: 'https://github.com/Maxii109/ecommerce-2',
        demo: 'https://maxii109.github.io/ecommerce-2/'

    },
    {
        id: 3,
        img: img3,
        title: "Tasks Planner",
        github: 'https://github.com/Maxii109/task3',
        demo: 'https://maxii109.github.io/task3/'

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
        img: img7,
        title: "Quis App",
        github: 'https://github.com/husham-99/quis-app',
        demo: 'https://husham-99.github.io/quis-app'

    },
    {
        id: 8,
        img: img8,
        title: "Building Project",
        github: 'https://github.com/husham-99/building-project',
        demo: 'https://husham-99.github.io/building-project'

    },
    
    {
        id: 9,
        img: img9,
        title: "Silver Design",
        github: 'https://github.com/husham-99/s.design',
        demo: 'https://husham-99.github.io/s.design'

    },
    {
        id: 10,
        img: img10,
        title: "WeatherHub",
        github: 'https://github.com/Maxii109/weather-app',
        demo: 'https://maxii109.github.io/weather-app'

    }
    
    
]




export default function Project() {
    useEffect(() =>{

    
        const protfoliContainer = document.querySelectorAll('.project-container .portfolio-item');

        function isINView(element) {
        const rect = element.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight - 100;
        }

        function handleScroll() {
        protfoliContainer.forEach((card) => {
            if (isINView(card)) {
            card.classList.add("visible");
            }
        });
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // لتشغيل الأنيميشن عند التحميل

        return () => window.removeEventListener("scroll", handleScroll);
    },[])
    
    return(
        <section className="project" id="project">

            <div className='top-section'>
                <h4 className='text-light'>My Recent Work</h4>
                <h2>Projects</h2>
            </div>

            <div className="container project-container ">
                {portfolioData.map(({id,img,title,github,demo})=>(

                    <article key={id} className='portfolio-item'>
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