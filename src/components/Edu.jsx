import React from 'react';
import "./Edu.css";
import ks from "../../assets/kansas.png"; 
import snist from "../../assets/btech.png"; 
const Edu = () => {
return (
    <section id="education" class="animate-in">
    <h2 class="section-title">My Education</h2>
    <div class="education-grid">
        <div class="education-card">
            <div class="education-image">
                <img src={ks}alt="University" height={60} width={60}/>
            </div>
            <div class="education-content">
                <h3 class="education-title">Graduate Degree</h3>
                <p class="">Graduate in Computer Science with focus on artificial intelligence and web development.</p>
                <div class="education-tags">
                    
                    <span class="education-tag">4 GPA</span>
                </div>
            </div>
            
            <div class="education-overlay">
               
                <p class="overlay-description">Earned a Graduate Degree in Computer Science, specializing in artificial intelligence, and web development.</p>
                <ul class="overlay-features">
                    <li>Worked as a Graduate Research and Teaching Assistant in AI domain</li>
                    <li>Advanced coursework in algorithms and data structures</li>
                    <li>Senior project: Developed a deep learning based application for Violence Detection</li>
                    
                    
                </ul>
                
            </div>
        </div>
        
        <div class="education-card">
            <div class="education-image">
                <img src={snist} alt="UnderGrad" />
            </div>
            <div class="education-content">
                <h3 class="education-title">Under Graduate Degree</h3>
                <p class="">Bachelor of Technology in Computer Science with focus on OOPS in java, Python, web development, data Structures & algorithms, computer networks and software engineering.</p>
                <div class="education-tags">
                    
                    <span class="education-tag">3.24 GPA</span>
                    
                </div>
            </div>
            
            <div class="education-overlay">
               
                <p class="overlay-description">Earned a Bachelor's degree in Computer Science, specializing in modern web technologies and application development methodologies.</p>
                <ul class="overlay-features">
                    <li>Advanced coursework in java, python, cybersecurity, and computer networks</li>
                    <li>Major project: Developed a crop yield prediction model using machine learning.</li>
                    <li>Participated in hackathons and coding competitions, winning multiple awards</li>
                </ul>
            </div>
        </div>
    </div>
</section>
)
}

export default Edu
