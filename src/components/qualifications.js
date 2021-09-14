import React from 'react'
import '../styles/qualifications.scss'
import { UilGraduationCap , UilSuitcaseAlt, UilCalendarAlt  } from '@iconscout/react-unicons'
const Qualifications  =() =>{



    return(
        <section className="qualification__section section" id="education">
            <h2 className="section__title">Education & Work</h2>
            <span className="section__subtitle">My Journey</span>
            <div className="qualification__container container ">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <UilGraduationCap className="qualification__icon"/>
                        Education
                    </div>
                    <div className="qualification__button button--flex">
                        <UilSuitcaseAlt  className="qualification__icon"/>
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Universidad de Guanajuato</h3>
                                <span className="qualification__subtitle">Tourist Resource Management</span>
                                <div className="qualification__calendar">
                                    <UilCalendarAlt className="calender__icon"/>
                                    2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>

                            
                            
                        </div>
                        <div className="qualification__data">
                            <div>

                            </div>
                            

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">Restaurant Owner</h3>
                                <span className="qualification__subtitle">La Cochata</span>
                                <div className="qualification__calendar">
                                    <UilCalendarAlt className="calender__icon"/>
                                    2019 - 2020
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Qualifications