import React from "react"
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { StaticImage } from "gatsby-plugin-image"
import "../styles/about.scss"
const About = () =>{

    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <StaticImage src="../images/ocean.PNG" className="about__image"/>
                <div className="about__data">
                    <p className="about__description">
                        I have a passion for bussiness management and a relentless drive for continuous improvement in all of my endeavors. 
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">+1</span>
                            <span className="about__info-name">Years <br/> experience</span>
                        </div>
                        
                        <div>
                            <span className="about__info-title">+1</span>
                            <span className="about__info-name">Companies <br/> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a className="button button--flex" style={{cursor:"pointer"}}>Download <UilDownloadAlt className="button__icon"/> </a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About