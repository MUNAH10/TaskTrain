import React from "react";
import './LandingPage.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom";

function Landingpage(){
    const paragraphContent = "Streamline your daily routine and boost productivity with TaskTrain - the ultimate task management app.";
    
    return(
        <>
            <div className="container">
                <h1 contenteditable id="hone">Task-Train</h1>
                <p id="prgh">{paragraphContent}</p>
                <p id="prgh">Login & Sign Up </p>
                 <Link to="/auth" id="login_arrow"><HiOutlineArrowNarrowRight/></Link>
            </div>
        </>
    )
}

export default Landingpage;
