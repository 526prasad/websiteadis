import React from 'react';

function Signin() {
    return (
        <div className="log">
            <div className="log-container">
                <div className="head">
                    <h2>Sign In</h2>
                </div>
                <hr className="hr"></hr>
                <form action="/" method="">
                    <div className="inputs">
                        <input type="text" placeholder="Enter Username" className="uname input-login"></input>
                        <input type="password" placeholder="***********" className="pass input-login"></input>
                    </div>
                    <div className="btn">
                        <button type="submit" className="btn1">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;