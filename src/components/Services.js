import React from 'react';
import cowMouth from '../assets/Cows.jpg'
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
                <TitleComponent title="Products" />
                <div className="services">
                    <div className="services-container">
                        <div className="ser-head">
                            <div className="ser-name">
                                <h3>Our Products</h3>
                            </div>
                            <div className="hr">
                                <hr/>
                            </div>
                            <div className="ser-par">
                                <p>Under Development...</p>
                            </div>
                        </div>
                        <div className="ser-body">
                            <div className="ser-card1">
                                <div className="ser-icon">
                                    <a href="#adis"><img className="img" src={logo2} alt="recognization" /></a>
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
                                    <div className="youtube">
                                        <iframe width="100%"  src="https://www.youtube.com/embed/8euaZgSE8xs" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="ser-card1">
                                <div className="ser-icon">
                                    <a href="https://www.youtube.com/c/utjitdesicows/videos" rel="noreferrer" target="_blank"><img className="img" src={cowMouth} alt="desi" /></a>
                                </div>
                                <div className="ser-desc">
                                    <a href="https://www.youtube.com/c/utjitdesicows/videos" rel="noreferrer" target="_blank"><h4>Desi Cows </h4>
                                    <p>Our YouTube Channel</p></a>
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