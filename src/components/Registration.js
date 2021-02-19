import React from 'react';

function Registration() {
    return (
        <div className="reg">
            <div className="reg-container">
                <div className="head">
                    <h2>Registration</h2>
                </div>
                <hr className="hr"></hr>
                <form action="/" method="">
                    <div className="input-div">
                        {/* <label for="uname">Username</label> */}
                        <input type="text" id="uname" className="uname input-reg" placeholder="Enter Username"></input>
                    </div>
                    <div className="input-div">
                        {/* <label for="email">Email</label> */}
                        <input type="email" id="email" className="email input-reg" placeholder="Enter Email"></input>
                    </div>
                    <div className="input-div">
                        {/* <label for="con">Contact</label> */}
                        <input type="number" id="con" className="con input-reg" placeholder="Enter Contact Number"></input>
                    </div>
                    <div className="input-div">
                        {/* <label for="pass">Password</label> */}
                        <input type="password" id="pass" className="pass input-reg" placeholder="*********"></input>
                    </div>
                    <div className="btn">
                        <button type="submit" className="btn1">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;