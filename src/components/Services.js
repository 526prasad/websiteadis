import React from 'react';
import cowMouth from '../assets/cow12.jpg'
import desi from '../assets/desistores.png'
import logo from '../assets/logo.png'
import logo2 from '../assets/mainlogo.png'
//fontawesome
import 'font-awesome/css/font-awesome.min.css';
import { TitleComponent } from './TitleComponent';


class Services extends React.Component {
    render() {
        // function Services() {
        return (
            <React.Fragment>
                <TitleComponent title="Services" />
                <div className="services">
                    <div className="services-container">
                        <div className="ser-head">
                            <div className="ser-name">
                                <h3>Our Services</h3>
                            </div>
                            <div className="hr">
                                <hr/>
                            </div>
                            <div className="ser-par">
                                <p>Get Started!!!</p>
                            </div>
                        </div>
                        <div className="ser-body">
                            <div className="ser-card1">
                                <div className="ser-icon">
                                    <a href="#adis"><img className="img" src={cowMouth} alt="recognization" /></a>
                                </div>
                                <div className="ser-desc">
                                    <a href="/services">
                                        <h4>ADIS</h4>
                                        <p>Animals Digital Information System</p>
                                    </a>
                                </div>
                            </div>
                            <div className="ser-card2">
                                <div className="ser-icon">
                                    <a href="https://desistores.in/" rel="noreferrer" target="_blank"><img className="img" src={logo} alt="desi" /></a>
                                </div>
                                <div className="ser-desc">
                                    <a href="https://desistores.in/" rel="noreferrer" target="_blank"><img className="img" src={desi} alt="desi" /></a>
                                    {/* <h4>Desistores.in</h4> */}
                                    <p></p>
                                </div>
                            </div>
                            <div className="ser-card1">
                                <div className="ser-icon">
                                    <a href="https://www.youtube.com/c/utjitdesicows/videos" rel="noreferrer" target="_blank"><img className="img" src={logo2} alt="desi" /></a>
                                </div>
                                <div className="ser-desc">
                                    <a href="https://www.youtube.com/c/utjitdesicows/videos" rel="noreferrer" target="_blank"><h4>Our YouTube <br></br>Channel</h4></a>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Services;