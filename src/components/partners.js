import React from 'react';
//fontawesome
import 'font-awesome/css/font-awesome.min.css';
import { TitleComponent } from './TitleComponent';
// OwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// images
import ktech from '../assets/ktech.png';
import ccamp from '../assets/ccamp.png'; 
import deptA from '../assets/kar-logo.png';
import birac from '../assets/birac.png';
import startup from '../assets/startup.jpg';
const option = {
    nav:false,
    items: 2,
    dots:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
};
const options = {
    nav:false,
    items: 2,
    dots:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        600: {
            items: 2 ,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    },
};

class Partners extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleComponent title="Partners" />
                <div className="partners">
                    <div className="p-container">
                        <div className="mentor">
                            <div className="m-container">
                                <div className="m-head">
                                    <h3>Mentoring Partners</h3>
                                </div>
                                <div className="m-body">
                                    <OwlCarousel className="slider-items owl-carousel" {...option}>
                                    <div className="m-card">
                                            <div className="m-logo">
                                                <img className="ccamp" src={ccamp} alt="ccamp"></img>
                                            </div>
                                            <div className="m-name">
                                                <h4>C-CAMP</h4>
                                            </div>
                                        </div>
                                        <div className="m-card">
                                            <div className="m-logo">
                                                <img className="ktech" src={ktech} alt="ktech"></img>
                                            </div>
                                            <div className="m-name">
                                                <h4>K-TECH</h4>
                                            </div>
                                        </div>
                                        
                                        <div className="m-card">
                                            <div className="m-logo">
                                                <img className="deptA" src={deptA} alt="deptA" ></img>
                                            </div>
                                            <div className="m-name">
                                                <h4>Department Of Animal Husbandary And Fisheries</h4>
                                            </div>
                                        </div>
                                    </OwlCarousel> 
                                </div>   
                            </div>
                        </div>
                        <div className="fund">
                            <div className="f-container">
                                <div className="f-head">
                                    <h3>Funding Partners</h3>
                                </div>
                                <div className="f-body">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                        <div className="f-card">
                                            <div className="f-logo">
                                                <img className="startup" src={startup} alt="startup"></img>
                                            </div>
                                            <div className="f-name">
                                                <h4>Start-Up India -Animal Husbandary Grand Challenge-2021</h4>
                                            </div>
                                        </div>
                                        <div className="f-card">
                                            <div className="f-logo">
                                                <img className="birac" src={birac} alt="birac"></img>
                                            </div>
                                            <div className="f-name">
                                                <h4>BIG BIRAC</h4>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Partners;