import React from 'react'
import "./Exp.css"
import exp1 from "../../assets/Ab exp1.png";
import exp2 from "../../assets/Accenture.png";
import exp3 from "../../assets/kansas.png"; 
const Exp = () => {
return (
    <section id="experience" class="animate-in">
    <h2 class="section-title">My Experience</h2>
    
    {/*Augumented Byte*/ }
    <div class="experience-grid">
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp1} alt="Augumented Byte" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Software Developer</h3>
                <p class="">Worked on various types of data to make sure model gets trained well by using EC2, S3 buckets, RDS from AWS.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Python</span>
                    <span class="experience-tag">OpenCV</span>
                    <span class="experience-tag">Machine Learning</span>
                    <span class="experience-tag">Deep Learning</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Enhanced system performance by conducting bottleneck analysis, optimizing database queries, and reducing processing time by 40% through cloud-based auto-scaling solutions.</p>
                <ul class="overlay-features">
                    <li>Integrated DevOps practices, including containerization with Docker and orchestration using Kubernetes, ensuring smooth deployment and high availability.</li>
                    <li>Actively participated in agile project management, adhering to the Software Development Lifecycle (SDLC), fostering collaboration, and streamlining development processes.</li>
                </ul>
            </div>
        </div>
    

    {/*Accenture*/ }
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp2} alt="Accenture" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Software Engineer</h3>
                <p class="">Enhanced system performance by conducting bottleneck analysis, optimizing database queries, and reducing processing time by 40% through cloud-based auto-scaling solutions.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Python</span>
                    <span class="experience-tag">OpenCV</span>
                    <span class="experience-tag">Machine Learning</span>
                    <span class="experience-tag">Deep Learning</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Led frontend development for a team of five engineers, implementing modern UI solutions and establishing best practices for code quality and application architecture.</p>
                <ul class="overlay-features">
                    <li>Developed and deployed RESTful APIs with real-time data synchronization. </li>
                    <li>Ensuring compliance with privacy standards (HIPAA) and leveraging CI/CD pipelines for seamless updates.</li>
                </ul>
            </div>
        </div>
    
    
    {/*Kansas State University*/ }
    
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp3} alt="rk_tech" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Web Developer</h3>
                <p class="">• Created responsive web applications using HTML, CSS, and JavaScript, focusing on cross-browser compatibility.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Python</span>
                    <span class="experience-tag">OpenCV</span>
                    <span class="experience-tag">Machine Learning</span>
                    <span class="experience-tag">Deep Learning</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Led frontend development for a team of five engineers, implementing modern UI solutions and establishing best practices for code quality and application architecture.</p>
                <ul class="overlay-features">
                    <li>Reduced application load time by 40% through code optimization</li>
                    <li>Mentored co-junior developers and conducted code reviews</li>
                </ul>
            </div>
        </div>
    
    </div>
</section>
)
}

export default Exp
