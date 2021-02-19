import React, { useState } from 'react';
import back from '../assets/unnamed.png';
import back1 from '../assets/unnamed (1).png';
import Registration from './Registration';
import Signin from './Signin';

export default function Login() {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    return (
        <div className="home login">
            <div className="login-container">
                <div className="btns">
                    <div className="btns1">
                        <div className="button-container" >
                            <div className="button" onClick={() => setSignin(!signin)}>Sign In</div>
                            <div className={signin ? "signin on" : "signin"} onClick={() => setSignin(!signin)}>
                                <Signin />
                            </div>
                        </div>
                        <div className="button-container">
                            <div  className="button" onClick={() => setSignup(!signup)}>Sign Up</div>
                            <div className={signup ? "signup on" : "signup"} onClick={() => setSignup(!signup)}>
                                <Registration />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="unnamed">
                    <img className="unnamed-img" src={back1} alt="background-img1" />
                </div>
            </div>
            <div className="bac-img">
                <img src={back} alt="bacground-img" className="back-img1" />
            </div>
        </div>
    );
}