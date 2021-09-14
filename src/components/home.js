import React from 'react'
import { UilTwitterAlt,UilMouseAlt ,UilLinkedinAlt, UilArrowDown, UilInstagram    } from '@iconscout/react-unicons'
import Blob from "../images/cam.inline.svg";
import { StaticImage } from "gatsby-plugin-image"
import '../styles/home.scss'
import { UilMessage } from '@iconscout/react-unicons'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/" target="_blank" >
                            <UilLinkedinAlt className="home__social-icon"/>
                        </a>
                        <a href="https://www.instagram.com/mexicantoqui/?hl=en" target="_blank" >
                            <UilInstagram className="home__social-icon"/>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" >
                            <UilTwitterAlt className="home__social-icon"/>
                        </a>
                    </div>
                    <div className="home__img">
                        <StaticImage src="../images/camImage.png" alt="blob" className="home__blob"/>
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm Carmen</h1>
                        <h3 className="home__subtitle">Business Manager</h3>
                        <p className="home__description">High level experience in bussiness management, marketing and producing quality work </p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <UilMessage className="button__icon"/> </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <UilMouseAlt className="home__scroll-mouse"/>
                        <span className="home__scroll-name">Scroll Down</span>
                        <UilArrowDown className="home__scroll-arrow"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
