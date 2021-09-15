import React,{useEffect, useState, useLayoutEffect} from 'react'
import '../styles/header.scss'
import { UilEstate, UilUser, UilFileAlt, UilApps, UilMoon ,UilGraduationCap , UilBriefcaseAlt, UilScenery, UilMessage, UilTimes  } from '@iconscout/react-unicons'

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const themeToggler = () =>{
        if(theme == "light"){
            setTheme("dark")
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            setTheme("light")
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }


    const [showMenu, setShowMenu] = useState('')
    const handleToggle = () =>{
        setOpen(!isOpen)
    }

    useEffect(() =>{
        if(isOpen){
            setShowMenu('show-menu')
        }else{
            setShowMenu('')
        }
    },[isOpen])

    

    return (
        <header className="header" id="header" >
            <nav className="nav container">
                <a href="#" className="nav__logo">Carmen</a>
                <div className={`nav__menu ${showMenu}`} id="nav-menu" >
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={handleToggle}>
                                <UilEstate className="nav__icon"/> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={handleToggle}>
                                <UilUser className="nav__icon"/> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={handleToggle}>
                                <UilFileAlt className="nav__icon"/> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={handleToggle}>
                                <UilBriefcaseAlt className="nav__icon"/> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" className="nav__link" onClick={handleToggle}>
                                <UilGraduationCap className="nav__icon"/> Education
                                
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={handleToggle}>
                                <UilMessage className="nav__icon"/> Contact Me
                            </a>
                        </li>
                    </ul>
                    <UilTimes className="nav__close" id="nav-close" onClick={handleToggle}/>
                </div>
                <div className="nav-btns">
            
                    <div className="nav__toggle" onClick={handleToggle}>
                        <UilApps className="nav__icon"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
