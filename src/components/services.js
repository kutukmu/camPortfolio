import React,{useState} from 'react'
import "../styles/services.scss"
import { UilWebGrid, UilArrowRight, UilTimes,UilChartLine , UilCheckCircle   } from '@iconscout/react-unicons'
const Services = () =>{

    const [activeModal, setModal] = useState(0)


    return(
        <section className="services__section section" id="services">
            <h3 className="section__title">Services</h3>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                        <div>
                            <UilWebGrid className="services__icon"/>
                            <h3 className="services__title">Squareup <br/> Integration</h3>
                        </div>
                        <span className="button button--flex button--small button--link services__button" onClick ={() => setModal(1)}>
                            View More
                            <UilArrowRight className="button__icon" />
                        </span>
                        <div className={`services__modal ${activeModal == 1 ? "active-modal":""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Squareup</h4>
                                <UilTimes className="services__modal-close" onClick ={() => setModal(0)}/>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I integrate Squareup to your restaurant</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I help your bussiness to reaching more customers online.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I connect your restaurant, from kitchen to community</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="services__content">
                        <div>
                            <UilChartLine  className="services__icon"/>
                            <h3 className="services__title">Social Media <br/> Marketing</h3>
                        </div>
                        <span className="button button--flex button--small button--link services__button" onClick ={() => setModal(2)}>
                            View More
                            <UilArrowRight className="button__icon" />
                        </span>
                        <div className={`services__modal ${activeModal == 2? "active-modal":""}`}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Marketing</h4>
                                <UilTimes className="services__modal-close" onClick ={() => setModal(0)}/>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I help you to increse your brand awareness</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I help you to grow your brand's audience</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <UilCheckCircle className="services__modal-icon"/>
                                        <p>I connect your restaurant, from kitchen to community</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                
            </div>
        </section>
    )

}

export default Services