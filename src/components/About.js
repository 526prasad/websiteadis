import React from 'react';
import Carousel from './carousel';
import back1 from '../assets/unnamed (1).png';
import back from '../assets/unnamed.png';
import Readmore from './Readmore';


function About() {
   
    return (
        <div className="about-main">
            <div className="about">
                
                    <Readmore />
               
                <div className="about-down">
                    <Carousel />
                </div>
            </div>
            <div className="pngimgs">
                <div className="png-img">
                    <img className="png-img1" src={back1} alt="background-img1" />
                </div>
                <div className="png">
                    <img src={back} alt="bacground-img" className="png1" />
                </div>
            </div>

        </div>
    );
}

export default About;