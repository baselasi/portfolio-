import React, { forwardRef, useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "../style.css"
export function ContactMe(props) {
    const [sectionIntersction, setSectionIntersction] = useState(false)
    useEffect(() => {
        const observSection = new IntersectionObserver((entrie) => {
            setTimeout(() => {
                setSectionIntersction(entrie[0].isIntersecting)
            }, 500)
        })
        observSection.observe(section.current)
    }, [])
    const binaryLetter = "01100101"
    let section = useRef()
    const form = useRef()
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_qvzehng', 'template_2cbjn74', form.current, 'BVdexWPl-F39b-Vsi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    if (props.scrollintoView) {
        section.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' })
        props.scroll(false)
    }
    return (
        <div ref={section} className=" flex justify-content-center marging-padding">
            <div className="col-sm-8 row">
                <h2 className="col-md-6">{sectionIntersction ? "HIT ME UP" : binaryLetter}</h2>
                <form className="col-md-6" ref={form} onSubmit={sendEmail} >
                    <div class="form-group">
                        <label for="name" >Name:</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Name" required></input>
                        <label for="email">Email address:</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="Email" required></input>
                        <label for="subject">Subject:</label>
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required ></input>
                        <label for="textArea">Message:</label>
                        <textarea class="form-control" name="text" id="textArea" rows="4" required></textarea>
                        <input type="submit" className="btn btn-primary col-10 mt-3"></input>
                    </div>
                </form>
            </div>
            <div className="col-sm-6">
            </div>
        </div>
    )
}

const ContactSection = forwardRef((props, contactForm) => {


    return (
        <div ref={contactForm} className=" flex justify-content-center marging-padding">
            <div className="col-sm-12 row">
                <h2 className="col-md-6 text-highlight">HIT ME UP</h2>
                <form className="col-md-6"   >
                    <div class="form-group text-color">
                        <label for="name" >Name:</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Name" required></input>
                        <label for="email">Email address:</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="Email" required></input>
                        <label for="subject">Subject:</label>
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required ></input>
                        <label for="textArea">Message:</label>
                        <textarea class="form-control" name="text" id="textArea" rows="4" required></textarea>
                        <input type="submit" className="my-btn  col-12 mt-3"></input>
                    </div>
                </form>
            </div>
            <div className="col-sm-6 ">
            </div>
        </div>
    )
})

export default ContactSection