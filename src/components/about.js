import React from "react";
import { SocialIcon } from "react-social-icons";
const About=()=>{
    return(
        <>
            
            <div id="about">
            <h2>About</h2>
            <p>Checkout my socials</p>
                <div className="social">
                    
                    <SocialIcon url="https://www.linkedin.com/in/adwait-jadhav-251470232/" />
                </div>
                <div className="social">
                    <SocialIcon url="https://instagram.com/adwait_jadhav123?igshid=NjIwNzIyMDk2Mg==" />
                </div>
                <div className="social">
                    <SocialIcon url="https://github.com/AdwaitJadhav" />
                </div>
                <div>
                <a href="https://www.freepik.com/free-photo/vintage-grunge-paper-background_5405364.htm#page=2&query=crumpled%20paper&position=27&from_view=keyword&track=ais">Image by kjpargeter</a> on Freepik
                </div>
            </div>
        </>
    );
}
export default About;