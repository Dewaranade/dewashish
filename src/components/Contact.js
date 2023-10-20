import React, {useState} from "react";
import CV from '../assets/Duolingo.pdf';
import {Modal, ModalHeader} from "reactstrap";
import "../Styles/contact.css";
import ContactForm from "./ContactForm";

const Contact = () =>{
  const [modal, setmodal] = useState(false)
    return(
        <div>

        {/* <Modal 
        size="lg"
        isOpen={modal}
        toggle={()=>setmodal(!modal)}
        >
          <ModalHeader
          toggle={()=>setmodal(!modal)}
          >
            Popup
          </ModalHeader>
        </Modal> */}

        <section className="contact section" id="contact">
            <h2 className="section__title" id="contactme">Ready to work with the master of UX? <br/> 
            Get in touch with Dewashish!</h2>
            <span className="section__subtitle">{/*Who Am I?*/}</span>
            <ContactForm />
           
        </section>
        </div>

    )
}

export default Contact;