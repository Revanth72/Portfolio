import React from 'react'
import './Pro.css'
import pro from "../../assets/project.png"; 
const Pro = () => {
return (
    <section id="projects" class="animate-in">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid">
           <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="Library" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Video Surveillance App</h3>
                    <p class="">A Deep learning-based website for Surveillance on cameras to detect whether a fight is happening or not.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">React</span>
                        <span class="project-tag">Deep Learning</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Video Surveillance App</h3>
                    <ul class="overlay-features">
                        <li>An application that analyzes video inputs using a Long-term Recurrent Convolutional Network (LRCN) model.</li>
                        <li>The backend is built with Python using a pre-trained .h5 model, while the frontend was built on React, providing an intuitive interface for users. The application features three main tabs: Home, Maps, and Settings.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Revanth72/Revanth_690_Project" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="food" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Blog-Post-web-application-using-Django-and-React</h3>
                    <p class="">A full-stack Blog Post Web Application built using Python Django (backend), React.js (frontend), and deployed on AWS EC2.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">React.js</span>
                        <span class="project-tag">Django</span>
                        <span class="project-tag">AWS</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Blog-Post-web-application-using-Django-and-React</h3>
                    <ul class="overlay-features">
                        <li>This is a full-stack Blog Post Web Application built using Python Django (backend), React.js (frontend), and deployed on AWS EC2. The application provides CRUD functionality for managing blog posts.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Revanth72/Blog-Post-web-application-using-Django-and-React" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="posts" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">My-Ecommerce-website</h3>
                    <p class="">It is a basic Ecommerce Website with all functionalities except the payment </p>
                    <br></br>
                    <div class="project-tags">
                        <span class="project-tag">Angular</span>
                        <span class="project-tag">Java</span>
                        <span class="project-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">My-Ecommerce-website</h3>
                    <ul class="overlay-features">
                        <li>It is a basic Ecommerce Website with all functionalities except the payment and done on Java,MySQL as backend and database respectively and Angular as frontend.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Revanth72/My-Ecommerce-website" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="posts" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Online-Yoga-Class-Management-System-using-C-sharp</h3>
                    <p class="">The Yoga Class Management System is a web-based application that allows users to register, log in, and book yoga classes online.</p>
                    <br></br>
                    <div class="project-tags">
                        <span class="project-tag">JQuery</span>
                        <span class="project-tag">C#</span>
                        <span class="project-tag">ASP.NET</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Online-Yoga-Class-Management-System-using-C-sharp</h3>
                    <ul class="overlay-features">
                        <li>The Yoga Class Management System is a web-based application that allows users to register, log in, and book yoga classes online. Instructors can manage class schedules, while users can view available classes and make bookings.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Revanth72/Online-Yoga-Class-Management-System-using-C-sharp" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="Library" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Chess_Game </h3>
                    <p class="">A Basic Chess Game developed to play the Opponent as a 2 Player game</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">Java</span>
                        <span class="project-tag">JWT</span>
                        <span class="project-tag">UI</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Chess_Game</h3>
                    <ul class="overlay-features">
                        <li>This is a Game That will have 2 players in the board who can make move moves and it will be displayed in the terminal</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Revanth72/Chess_Game" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Pro
