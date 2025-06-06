import React from 'react'
import './About.css'
import myImage from "../../assets/rev photo.jpeg"; 
const About = () => {
    return (
    <section id="about" class="animate-in">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="about-image">
                { <img src={myImage}  alt="Revanth Raavi" /> }
            </div>
            <div class="about-text">
                <p>I am a Software Engineer and Full Stack Developer with 4+ years of experience delivering scalable, high-performance web applications using Java, Spring Boot, React, Angular, Node.js, ASP.NET Core, and cloud technologies (AWS, Azure, GCP). I bring proven expertise from professional roles where I’ve designed microservices architectures, built robust APIs, integrated real-time data pipelines, and deployed cloud-native solutions, alongside additional experience applying AI and machine learning in web-based projects.</p>
                <div class="skills">
                    
                    <span class="skill">JavaScript</span>
                    <span class="skill">TypeScript</span>
                    <span class="skill">Java</span>
                    <span class="skill">Python</span>
                    <span class="skill">Springboot</span>
                    <span class="skill">React JS</span>
                    <span class="skill">Node JS</span>
                    <span class="skill">Django</span>
                    <span class="skill">Flask</span>
                    <span class="skill">C#</span>
                    <span class="skill">ASP.NET</span>
                    <span class="skill">Angular JS</span>
                    <span class="skill">HTML5</span>
                    <span class="skill">CSS3</span>
                    <span class="skill">MySQL</span>
                    <span class="skill">PostgreSQL</span>
                    <span class="skill">Git & Github</span>
                    <span class="skill">Mongo DB</span>
                    <span class="skill">Neo4j</span>
                    <span class="skill">Graph DB</span>
                    <span class="skill">AWS</span>
                    <span class="skill">Azure</span>
                    <span class="skill">Docker</span>
                    <span class="skill">Kubernetes</span>
                    <span class="skill">CI/CD</span>
                    <span class="skill">Jenkins</span>
                    <span class="skill">Terraform</span>
                    <span class="skill">Kafka</span>
                    <span class="skill">RabbitMQ</span>
                    <span class="skill">Redis</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
