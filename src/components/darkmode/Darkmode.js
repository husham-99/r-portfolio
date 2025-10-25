import React,{useState,useEffect} from 'react'
import './Darkmode.css'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Darkmode() {
    const [darkMode,setDarkMode] = useState(false)
    useEffect(()=>{

       const storedMode = localStorage.getItem('darkMode')
       if (storedMode === 'true'){
        setDarkMode(true)
         document.body.classList.add('dark-mode')
       }
        
    },[darkMode])

    
    function toggleDarkMode() {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark-mode')
        localStorage.setItem('darkMode',!darkMode )

    }
    

    

    return(

        <button className='dark-button' onClick={toggleDarkMode}>{darkMode? <MdOutlineLightMode className="icon"/>:<MdDarkMode className="icon"/>}</button>
    )
}