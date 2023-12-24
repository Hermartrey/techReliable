import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";
import contactImage1 from "../../assets/contactImage1.jpeg";
import "./Contact.scss";

const Contact = () => {
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
            .sendForm(
                "service_tcivzpr",
                "template_09ivifn",
                form.current,
                "vcWUMzo66qYO5Gbd0"
            )
            .then(
                (result) => {
                console.log(result.text);
                e.target.reset()
                },
                (error) => {
                console.log(error.text);
                }
            );
        };

    return (
        <section id="contact" className="contact">
            <h1 className="contact-us">Contact Us</h1>
            <div className="contact-content">
                <div className="contact-message">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="to_name" placeholder="name" />
                        <input type="email" name="from_name" placeholder="email" />
                        <textarea name="message" placeholder="message" />
                        <Button content="send"/>
                    </form>
                </div>
                <div className="contact-img">
                    <img src={contactImage1} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
