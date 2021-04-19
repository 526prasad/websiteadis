import React from 'react';
import sujit from '../assets/sujit.jpg';
import prasad from '../assets/prasadD.jpg';
import md from '../assets/md.jpg';
import { TitleComponent } from './TitleComponent';
import team from '../assets/team.jpg';

function Team() {
    return (
        <React.Fragment>
            <TitleComponent title="Team" />
            <div className="team">
                <div className="team-container">
                    <div className="t-name">
                        <div>
                            Our Amazing Team
                        </div>
                        <div className="hr">
                            <hr />
                        </div>
                    </div>
                    <div className="team-photo">
                        <div className="photo-container">
                            <img className="image" src={team} alt="team"/>
                        </div>
                    </div>
                    <div className="team-body">
                        <div className="card">
                            <div className="card-1">
                                <div className="card-img">
                                    <img src={sujit} alt="sujit"></img>
                                </div>
                                <div className="desc">
                                    <div className="desc1">
                                        <div className="f-name">Sujit Hukkerikar</div>
                                        <div className="founder">Director</div>
                                    </div>
                                    <div className="social-media">
                                        <div>
                                            <a href="https://www.facebook.com/cujit/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
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
                        </div>
                        <div className="card">
                            <div className="card-1">
                                <div className="card-img">
                                    <img src={prasad} alt="prasad"></img>
                                </div>
                                <div className="desc">
                                    <div className="desc1">
                                        <div className="f-name">Prasad Desai</div>
                                        <div className="founder">Director</div>
                                    </div>
                                    <div className="social-media">
                                        <div>
                                            <a href="https://www.facebook.com/prasad.desai.391" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
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
                        </div>
                        <div className="card">
                            <div className="card-1">
                                <div className="card-img">
                                    <img src={md} alt="md"></img>
                                </div>
                                <div className="desc">
                                    <div className="desc1">
                                        <div className="f-name">Madhav Hebbar</div>
                                        <div className="founder">Associate Director</div>
                                    </div>
                                    <div className="social-media">
                                        <div>
                                            <a href="https://www.facebook.com/vedavahan/" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
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
            </div>
        </React.Fragment>
    );

}
export default Team;