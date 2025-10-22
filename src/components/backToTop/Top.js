import React,{useState} from "react";
import { FaArrowUp } from "react-icons/fa6";
import 'animate.css/animate.min.css'


export default function Top() {
    const [animation,SetAnimation] = useState('animate__bounce animate__infinite')
    const backToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    
    return (

        <button className={`animate__animated ${animation}`} style={{border:'none',padding:'5px',
        background:'var(--color-primary-variant)',
        borderRadius:'5px', color:'#fff', cursor:'pointer',margin:'30px 13px 0 auto', display:'block'}}
        onClick={backToTop}><FaArrowUp/></button>
    )
}