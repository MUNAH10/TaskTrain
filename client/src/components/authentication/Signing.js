import {React, useState} from "react";
import './Signing.css'



function Signing( {signup} ){

    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/signup/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		})
			.then((r) => r.json())
			.then((user) => signup(user));
	}
    return(
        <div className="App-header" >


            <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label for="user" className="label">Username</label>
                            <input id="user" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign In"/>
                        </div>
				
		</div>

		<div className="sign-up-htm">


                        <div className="group">
                            <label for="user" className="label">Username</label>
                            <input id="user" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password"/>
                        </div>

                        <div className="group">
                            <label for="pass" class="label">Email Address</label>
                            <input id="pass" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up"/>
                        </div>

                     </div>
                 </div>
                </div>
            </div>


        </div>

    )
}

export default Signing;