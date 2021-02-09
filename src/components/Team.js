import React from 'react';
import sujit from '../assets/sujit.jpg';
import prasad from '../assets/prasad.jpg';
import md from '../assets/md.jpg';

function Team() {
    return (
        <div className="team">
            <div className="team-container">
                <div className="t-name">
                    <div>
                        Our Amazing Team
                    </div>
                    <hr/>
                </div>
                <div className="team-body">
                    <div className="card card-1">
                        <div className="card-img">
                            <img src={sujit} alt="sujit"></img>
                        </div>
                        <div className="desc">
                            <div className="f-name">Sujit H</div>
                            <div className="founder">Founder</div>
                            <div className="social-media">
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/sujithukkerikar/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-2">
                        <div className="card-img">
                            <img src={prasad} alt="prasad"></img>
                        </div>
                        <div className="desc">
                            <div className="f-name">Prasad Desai</div>
                            <div className="founder">Founder</div>
                            <div className="social-media">
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/prasad-desai-a532734b/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-1">
                        <div className="card-img">
                            <img src={md} alt="md"></img>
                        </div>
                        <div className="desc">
                            <div className="f-name">Madhav Hebbar</div>
                            <div className="founder">Founder</div>
                            <div className="social-media">
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                    <a href="/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Team;