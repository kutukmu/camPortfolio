import React,{useState} from 'react'
import { UilBracketsCurly, UilAngleDown  } from '@iconscout/react-unicons'
import "../styles/skills.scss"

const Skills = () =>{

    const [skillToggle, setToggle] = useState('skills__open')
    const handleClick = () =>{
        if(skillToggle === "skills__open"){
            setToggle("skills__close")
        }else{
            setToggle("skills__open")
        }
    }


    return(
        <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My Skills</span>
                <div className="skills__container container grid">
                    <div>
                        <div className={`skills__content`} onClick={handleClick}>
                            <div className="skills__header">
                                <UilBracketsCurly className="skills__icon"/>

                                <div>
                                    <h1 className="skills_title">Social Media Marketing</h1>
                                    <span className="skills_subtitle">More than 3 years</span>
                                </div>
                                <UilAngleDown className={`skills__arrow ${skillToggle === "skills__open" ? "up" : "down"}`}/>

                            </div>
                            <div className={`skills__list ${skillToggle} grid`}>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Photoshop</h3>
                                        <span className="skill__number">100%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__excel"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Word</h3>
                                        <span className="skill__number">80%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__word"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">PowerPoint</h3>
                                        <span className="skill__number">95%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__power"></span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__title">
                                        <h3 className="skills__name">Gmail</h3>
                                        <span className="skill__number">85%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__gmail"></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
    
}

export default Skills