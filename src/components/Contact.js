import React from 'react';
import MapContainer from './google-map';
import { TitleComponent } from './TitleComponent';

export default function Contact() {
    return (
        <React.Fragment>
            <TitleComponent title="Contact" />
            <div className="contact">
                <div className="contact-container">
                    <div className="map">
                        <MapContainer />
                    </div>
                    <div className="contact-body">
                        <div className="main-container">
                            <div className="sub-container container-group1">
                                <div className="contact-head-name">
                                    <div>Get In Touch</div>
                                </div>
                                <div className="sub-container-body">
                                    <div className="c-body">
                                        <div className="b-input">
                                            <input type="text" placeholder="Your Name *" className="input" />
                                            <input type="email" placeholder="Your Email *" className="input" />
                                            <input type="number" placeholder="Your Number *" className="input" />
                                            <input type="text" placeholder="Your Message *" className="input" />
                                        </div>
                                    </div>
                                    <div className="c-button">
                                        <div className="c-button-container">
                                            <a href="/#">Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-container">
                                <div className="contact-head-name">
                                    <div>Contact Us</div>
                                </div>
                                <div className="sub-container-body">
                                    <div className="c-body">
                                        <div className="c-icon"><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i></div>
                                        <div className="c-desc">
                                            <h3>Address</h3>
                                            <p>Jai Ganesh Plaza Congress Road</p>
                                            <p>Tilkawadi, Belgaum </p>
                                            <p>Karnataka, 590006</p>
                                        </div>
                                    </div>
                                    <div className="c-body">
                                        <div className="c-icon"><i className="fa fa-phone fa-lg" aria-hidden="true"></i></div>
                                        <div className="c-desc">
                                            <h3>Contact</h3>
                                            <p><a href="tel:+91 8762688442" className="con-link">+91-876-268-8442</a></p>
                                        </div>
                                    </div>
                                    <div className="c-body">
                                        <div className="c-icon"><i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i></div>
                                        <div className="c-desc">
                                            <h3>Email</h3>
                                            <p><a href="mailto:info@adis.co.in" className="con-link">info@adis.co.in</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
