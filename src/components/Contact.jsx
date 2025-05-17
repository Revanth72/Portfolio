import React from 'react'
import "./Contact.css"
const Contact = () => {
return (
    <section id="contact" class="animate-in">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">✉</div>
                    <div class="contact-text">
                        <span>Email</span>
                        revanthbabu2001@gmail.com
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <div class="contact-text">
                        <span>Phone</span>
                        +1 785-317-4192
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-text">
                        <span>Location</span>
                        Manhattan 
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Contact
