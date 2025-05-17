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
                    <img src={pro} alt="food" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">FoodOrderApp</h3>
                    <p class="">Implemented real-time Food ordering app using MERN stack.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">React.js</span>
                        <span class="project-tag">Node.js</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">FoodOrderApp</h3>
                    <p class="overlay-description">Implemented real-time Food ordering app using MERN stack</p>
                    <ul class="overlay-features">
                        <li>A full-featured food delivery application built using the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to browse food items, place orders, make payments using Stripe, and track their order status. The app features user authentication, order management, and real-time updates.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Nikhitha-Mannem/MERN-FoodOrderApp" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="posts" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">MERN-PostsApp</h3>
                    <p class="">A fully responsive Posts app with JWT user Auth and Mysql as database.</p>
                    <br></br>
                    <div class="project-tags">
                        <span class="project-tag">React js</span>
                        <span class="project-tag">Express js</span>
                        <span class="project-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">MERN-PostsAp</h3>
                    <p class="overlay-description">Developed a PostsApp using react, node, and JavaScript and designed a responsive and user-friendly interface with CSS for a clean layout..</p>
                    <ul class="overlay-features">
                        <li>A full-stack post management application built using the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to create, edit, delete, and manage posts with role-based access control (RBAC) and authentication. The app also features responsive UI using MUI components and efficient state management.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Nikhitha-Mannem/MERN-POSTSAPP" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>

            
            <div class="project-card">
                <div class="project-image">
                    <img src={pro} alt="Library" />
                </div>
                <div class="project-content">
                    <h3 class="project-title">Book Recommendtions </h3>
                    <p class="">Developed a Book management system using Express, React, AWT.</p>
                    <br/>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">JWT</span>
                        <span class="project-tag">Express</span>
                        <span class="project-tag">Node</span>
                    </div>
                </div>
                
                <div class="project-overlay">
                    <h3 class="overlay-title">Book Recommendtions</h3>
                    <p class="overlay-description">Developed a Book management system using Express, React, AWT for a user-friendly experience.</p>
                    <ul class="overlay-features">
                        <li>A full-stack Book Recommendation System built using Flask (Backend) and HTML/CSS/JavaScript (Frontend). This application uses collaborative filtering and cosine similarity to recommend books based on the user's input.</li>
                    </ul>
                    <div class="overlay-links">
                        <a href="https://github.com/Nikhitha-Mannem/BOOKRecommendtions" class="overlay-link">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Pro
