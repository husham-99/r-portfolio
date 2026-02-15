import { useEffect } from "react";
import './Service.css'
import { SiCssdesignawards } from "react-icons/si"
import { GoRocket } from "react-icons/go";
import { FaCode } from "react-icons/fa6";


export default function Service() {
    useEffect(() =>{
    
        
            const content = document.querySelectorAll('.content .service-box');
    
            function isINView(element) {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight - 100;
            }
    
            function handleScroll() {
            content.forEach((card) => {
                if (isINView(card)) {
                card.classList.add("visible");
                }
            });
            }
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // لتشغيل الأنيميشن عند التحميل
    
            return () => window.removeEventListener("scroll", handleScroll);
        },[])
    return (
        <section className="service" id='service'>

            <div className='top-section'>
                <h4 className='text-light'>What I Offer</h4>
                <h2>My Services</h2>
            </div>

            <div className="content container">
                <div className='service-box'>
                    <SiCssdesignawards className='icon' style={{color:'orange'}}/>
                    <h3>UI/UX Design</h3>
                    <p className='text-light'>I design responsive and modern user interfaces that provide a smooth user experience across all devices</p>
                </div>
                <div className="service-box">
                    <GoRocket className='icon' style={{color:'silver'}}/>
                    <h3>Performance Optimaization</h3>
                    <p className='text-light'>I build fast and optimized websites using best practices and recent modern technologies</p>
                </div>
                <div className="service-box">
                    <FaCode className='icon' style={{color:'red'}}/>
                    <h3>Clean & Reusable Code</h3>
                    <p className='text-light'>I write clean, reusable and well strectured code using react, tailwind and modern development tools</p>
                </div>
            </div>
        </section>
    )
}