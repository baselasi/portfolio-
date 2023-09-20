import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function ContactMe(){

    const form=useRef()

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_qvzehng', 'template_2cbjn74', form.current, 'BVdexWPl-F39b-Vsi')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
          console.log(error.text);
        });
    }

    return(
        <section style={{backgroundColor:"rgb(255, 255, 255"}} className="row">
            <div className="col-sm-6">

            </div>
            <form className="col-sm-6" ref={form} onSubmit={sendEmail} >
                <div class="form-group">
                    <label for="name" >Name</label>
                    <input type="text" name="name" class="form-control" id="name"  placeholder="enter name"></input>
                    <label for="email">Email address</label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="enter email"></input>
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" className="form-control" id="subject" placeholder="enter subject"></input>
                    <label for="textArea">Message</label>
                    <textarea class="form-control" name="text" id="textArea" rows="4"></textarea>
                    <input type="submit" className="btn"></input>
                </div>
                
            
            </form>
        </section>
    )
}