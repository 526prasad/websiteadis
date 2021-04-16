import React from 'react';
import Download from './Download';

export default function Footer() {
    return (
        <div className="footer">
            <div className="f-container">
                <div className="part1">
                    <div className="div1">
                        <div className="heading">
                            Our Mission
                        </div>
                        <div className="brand-tag">Digital identity for all animals......<br></br><span>Ease of use, scalability and resilience of  technology infrastructure for masses.</span></div>
                        {/* <div className="brand-tag">Animals Digital Information System</div> */}
                    </div>
                    <div className="div2">
                        <div className="heading">
                        Contact Details
                        </div>
                        <div className="details">
                            <h4>Adis Technologies Pvt Ltd</h4>
                            <p>Jai Ganesh Plaza Congress Road</p>
                            <p>Tilkawadi, Belgaum </p>
                            <p>Karnataka, 590006</p>
                            <p><a href="mailto:info@adis.co.in" className="con-link"><i className="fa fa-envelope-o fo-icon" aria-hidden="true"></i>   info@adis.co.in</a></p>
                            <a href="tel:+91 8762688442" className="con-link"><i className="fa fa-phone fo-icon" aria-hidden="true"></i> +91-876-268-8442</a>
                        </div>
                    </div>
                    <div className="div3">
                        <Download />
                    </div>
                </div>
                <div className="part2">
                    <div className="division1">
                        <div className="privacy">
                            <a href="/">Privacy Policy</a>
                        </div>
                        <div className="vl"></div>
                        <div className="terms">
                            <a href="/">Terms of Use</a>
                        </div>
                    </div>
                    <div className="division2">
                        <div className="copyright">
                            <h4>©2021 <a href="/">adis.co.in </a>| All Rights Reserved.</h4>
                            <h3>Managed by Adis Technologies Pvt Ltd | Belagavi</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}