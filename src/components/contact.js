import React,{useState} from 'react'
import { UilEnvelope, UilMapMarker, UilMessage   } from '@iconscout/react-unicons'
import "../styles/contact.scss"
import { useForm, ValidationError } from '@formspree/react';



const Contact = () =>{

    const [form, setFrom] = useState({
        name:"",
        email:"",
        project:"",
        message:""
    })

    const [state, handleSubmit] = useForm("mknqvezz");


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
                            <span className="contact__subtitle">carmentorres2388@gmail.com</span>              
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
                <form className="contact__form grid"  action="https://formspree.io/f/mpzkbqzp"
  method="POST">
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label for="" className="contact__label">Name</label>
                    <input type="text" className="contact__input" name="name" value={form.name} onChange={(e) => setFrom({...form, [e.target.name]:e.target.value})}/>
                    
                </div> 
                <div className="contact__content">
                    <label for="" className="contact__label">Email</label>
                    <input type="email" className="contact__input" name="email" value={form.email} onChange={(e) => setFrom({...form, [e.target.name]:e.target.value})}/>
                    <ValidationError  prefix="Email"  field="email" errors={state.errors} />
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">Project</label>
                    <input type="text" className="contact__input" name="project" value={form.project} onChange={(e) => setFrom({...form, [e.target.name]:e.target.value})}/>
                </div>
                <div className="contact__content">
                    <label for="" className="contact__label">Message</label>
                    <textarea name="message" cols="0" rows="7" className="contact__input" value={form.message} onChange={(e) => setFrom({...form, [e.target.name]:e.target.value})}/>
                    <ValidationError  prefix="Message"  field="message" errors={state.errors}
      />
                </div>
                <input type="text" name="_gotcha" style={{display:"none"}} />
                <div>

                </div>
            </div>
            <div>
                <button  style={{cursor:"pointer"}} type='submit' href="#" className="button button--flex">
                    Send Message  <UilMessage />
                </button>
            </div>
        </form>
            </div>
            

        </section>
        
    )

}
export default Contact