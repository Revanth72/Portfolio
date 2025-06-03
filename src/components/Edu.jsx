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
                <p class="">Graduate in Computer Science with focus on web development and software engineering.</p>
                <div class="education-tags">
                    
                    <span class="education-tag">4 GPA</span>
                </div>
            </div>
            
            <div class="education-overlay">
               
                <p class="overlay-description">Earned a Graduate Degree in Computer Science, specializing in machine learning methodologies and advanced data structures.</p>
                <ul class="overlay-features">
                    <li>Advanced coursework in algorithms and data structures</li>
                    <li>Integrated AI detection results into a plant detection web portal</li>
                    <li>Senior project: Developed a AI based Application for Voilence Detection</li>
                    
                    
                </ul>
                
            </div>
        </div>
        
        <div class="education-card">
            <div class="education-image">
                <img src={snist} alt="UnderGrad" />
            </div>
            <div class="education-content">
                <h3 class="education-title">Under Graduate Degree</h3>
                <p class="">Bachelor of Technology in Computer Science with focus on OOPS in java, web development, computer networks , system design and software engineering.</p>
                <div class="education-tags">
                    
                    <span class="education-tag">7.6 GPA</span>
                    
                </div>
            </div>
            
            <div class="education-overlay">
               
                <p class="overlay-description">Earned a Bachelor of Technology in Computer Science with honors, specializing in modern web technologies and application development methodologies.</p>
                <ul class="overlay-features">
                    <li>Advanced coursework in java, system design and computer networks</li>
                    <li>Senior project: Developed an hand gesture model using openCV</li>
                    <li>Teaching assistant in System Design for freshmans</li>
                </ul>
            </div>
        </div>
    </div>
</section>
)
}

export default Edu
