import React, { useRef } from "react"
import person_icon from "../images/person_icon.png"
import phone_email_icon from "../images/phone_email_icon.png"
import subject_icon from "../images/subject_icon.png"
import emailjs from "@emailjs/browser"

function Contact() {

    // ----------- Set page title -------------
    document.title = "Contact Me | Lucid Atom"
    //-----------------------------------------

    /**
     * Send email from submited form
     */
    
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        alert("Form sent sucessfully. Thanks for reaching out!")

        emailjs.sendForm('service_u8b7kar', 'lucid_atom_template', form.current, 'eiClv0JnXOsyGQdOk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return (
        <section className="contact_container">

            <span className="contact-h1-neu neu embedded-neu"><h1 className="h1-contact">Get In Touch</h1></span>

            <form onSubmit={sendEmail} ref={form} className="contact_form" action="" method="POST" >

                <div className="contact-input">
                    <input className="form-input neu extruded-neu" name="first_name" placeholder="First Name" required />
                    <span><img className="contact_icon" src={person_icon}/></span>
                    <input className="form-input neu extruded-neu" name="last_name" placeholder="Last Name" required />
                </div>
                
                <div className="contact-input">
                    <input className="form-input neu extruded-neu" name="phone" type="phone" placeholder="Phone" />
                    <span><img className="contact_icon" src={phone_email_icon}/></span>
                    <input className="form-input neu extruded-neu" name="email" type="email" placeholder="Email" required />
                </div>
                
                <div className="contact-input">
                    <span><img className="contact_icon" src={subject_icon}/></span>
                    <input className="form-input subject_input neu extruded-neu" name="subject" placeholder="Subject" required />
                </div>

                <textarea name="message" className="textbox neu extruded-neu" required placeholder="How can I help?" />

                <div className="submit">
                    <input className="submit_input" name="submit" type="submit" value={"Submit"}/>
                </div>

            </form>

        </section>
    )
}

export default Contact;