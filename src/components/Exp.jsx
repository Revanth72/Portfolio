import React from 'react'
import "./Exp.css"
import exp1 from "../../assets/Ab exp1.png";
import exp2 from "../../assets/Accenture.png";
import exp3 from "../../assets/kansas.png"; 
const Exp = () => {
return (
    <section id="experience" class="animate-in">
    <h2 class="section-title">My Experience</h2>
    
    
     {/*Kansas State University*/ }
    <div class="experience-grid">
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp3} alt="kansas" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Software Developer Research Assistant</h3>
                <p class="">Developed interactive web interfaces to display water droplet and precipitation predictions from Deep Learning models, resulting in a 30% improvement in user engagement.</p>
                <div class="experience-tags">
                    <span class="experience-tag">Python</span>
                    <span class="experience-tag">React</span>
                    <span class="experience-tag">JavaScript</span>
                    <span class="experience-tag">Deep Learning</span>
                    <span class="experience-tag">Graph QL</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Used GraphQL to streamline data retrieval in a React-based wheat yield prediction dashboard, improving performance and user experience.</p>
                <p class="overlay-description">Constructed data visualization tools using JavaScript and Chart.js, improving insight clarity from plant data analysis by 25%.</p>
                <p class="overlay-description">Integrated RT-DETR and YOLO computer vision model detection results into a plant detection web portal, reducing image review time by 40% through real-time visual feedback.</p>
                
            </div>
        </div>
    

    {/*Accenture*/ }
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp2} alt="Accenture" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Software Engineer</h3>
                <p class="">Built and launched 15+ custom full-stack applications with up to 40% higher end-user engagement due to optimized UI/UX and mobile-friendliness.</p>
                <div class="experience-tags">
                    <span class="experience-tag">TypeScript</span>
                    <span class="experience-tag">Angular</span>
                    <span class="experience-tag">React</span>
                    <span class="experience-tag">Java</span>
                    <span class="experience-tag">C#</span>
                    <span class="experience-tag">ASP.NET</span>
                    <span class="experience-tag">MySQL</span>
                    <span class="experience-tag">Azure</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Led agile ceremonies (daily stand-ups, planning, retrospectives) across 10+ sprint cycles, facilitating on-time delivery and team alignment consistently.</p>
                <p class="overlay-description">Integrated data visualization with Material-UI, Bootstrap, and Tailwind CSS has raised dashboard usability scores by 30% as measured by end-user feedback.</p>
                <p class="overlay-description">Deployed applications on AWS, Azure, and GCP, utilizing services such as S3, Lambda, and IAM for scalable and secure hosting. </p>
            </div>
        </div>
    
    
   {/*Augumented Byte*/ }
        <div class="experience-card">
            <div class="experience-image">
                <img src={exp1} alt="Augumented Byte" />
            </div>
            <div class="experience-content">
                <h3 class="experience-title">Web Application Developer Intern</h3>
                <p class="">Designed a responsive NGO donation website, increasing outreach by 40%.</p>
                <div class="experience-tags">
                    <span class="experience-tag">JavaScript</span>
                    <span class="experience-tag">Spring MVC</span>
                    <span class="experience-tag">Java</span>
                    <span class="experience-tag">PostgreSQL</span>
                     <span class="experience-tag">HTML</span>
                      <span class="experience-tag">CSS</span>
                    <span class="experience-tag">AWS</span>
                </div>
            </div>

            <div class="experience-overlay">
                
                <p class="overlay-description">Led a 5-person team to build a donation platform with HTML5, CSS3, JavaScript, and Bootstrap, boosting user engagement by 25%.</p>
                <p class="overlay-description">Crafted backend using Java, Spring MVC, and PostgreSQL, reducing transaction time by 30% and processing 1,000+ donations in 3 months.</p>
                <p class="overlay-description">Developed a RESTful API for the donation platform, enabling seamless integration with third-party payment gateways and improving transaction efficiency.</p>
            </div>
        </div>
        
    
    </div>
</section>
)
}

export default Exp