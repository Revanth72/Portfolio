import React from 'react'
import './About.css'
import myImage from "../../assets/NM_intro1.jpeg"; 
const About = () => {
    return (
    <section id="about" class="animate-in">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="about-image">
                <img src={myImage}  alt="Revanth Raavi" />
            </div>
            <div class="about-text">
                <p>I am a Software Engineer and a Full Stack Developer with 3+ years of experience building scalable web applications using Java, React, Angular, Node.js, Spring Boot, and ASP.NET Core. Currently pursuing an MS in Computer Science at Kansas State University and working as a Graduate Research Assistant, where I apply AI and machine learning in web-based solutions for real-world challenges. Skilled in deploying full-stack systems to the cloud (AWS, Azure, GCP) and integrating intelligent models into modern web platforms.</p>
                <div class="skills">
                    <span class="skill">HTML5</span>
                    <span class="skill">CSS3</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">Python</span>
                    <span class="skill">Java Springboot</span>
                    <span class="skill">React JS</span>
                    <span class="skill">Node JS</span>
                    <span class="skill">Express JS</span>
                    <span class="skill">SQL and PostgreSQL</span>
                    <span class="skill">Git & Github</span>
                    <span class="skill">Mongo DB</span>
                    <span class="skill">AWS</span>
                    <span class="skill">Terraform</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
