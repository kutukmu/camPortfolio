import React from 'react'
import { UilEnvelope, UilMapMarker, UilMessage   } from '@iconscout/react-unicons'
import "../styles/contact.scss"


const Contact = () =>{


    return(
        <section className="contact section" id="contact">

            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get In Touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <UilEnvelope className="contact__icon"/>
                        <div>
                            <h3 className="contact__title">Email</h3> 
                            <span className="contact__subtitle">torrescam96@gmail.com</span>              
                        </div>
                    </div>
               
                    <div className="contact__information">
                        <UilMapMarker  className="contact__icon"/>
                        <div>
                            <h3 className="contact__title">Location</h3> 
                            <span className="contact__subtitle">Mexico</span>              
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label for="" className="contact__label">Name</label>
                    <input type="text" className="contact__input"/>
                </div> 
                <div className="contact__content">
                    <label for="" className="contact__label">Email</label>
                    <input type="email" className="contact__input"/>
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">Project</label>
                    <input type="text" className="contact__input"/>
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">Message</label>
                    <textarea name="" cols="0" rows="7" className="contact__input"/>
                </div>
                <div>

                </div>
            </div>
            <div>
                <a href="#" className="button button--flex">
                    Send Message  <UilMessage />
                </a>
            </div>
        </form>
            </div>
            

        </section>
        
    )

}
export default Contact