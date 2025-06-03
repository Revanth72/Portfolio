import React from 'react'
import "./Social.css"
import git from "../../assets/github.png"; 
import email from "../../assets/email.png"; 
import link from "../../assets/linkedin.png"; 
const Social = () => {
return (
    <footer>
        <div class="social-links">
            <a target='_blank' href="https://www.linkedin.com/in/revanth-babu-raavi-754429222/" class="social-link"><img src={link}/></a>
            <a target='_blank' href="https://github.com/Revanth72" class="social-link"><img src={git}/></a>
            <a target='_blank' href="mailto:revanthbabu2001@gmail.com" class="social-link"><img src={email}/></a>
        </div>
        <p class="copyright">© 2025 Revanth Babu Raavi. All Rights Reserved.</p>
    </footer>
)
}

export default Social
