import React,{useState,useEffect} from 'react'
import './Darkmode.css'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

    

    

    return(

        <button className='dark-button' onClick={toggleDarkMode}>{darkMode? <MdOutlineLightMode className="icon"/>:<MdDarkMode className="icon"/>}</button>
    )
}