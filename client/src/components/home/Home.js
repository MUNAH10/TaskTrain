import React from "react";
import './Home.css'
import Navbar from "../navbar/Navbar";
import TaskItem from "../task/TaskItem";
import CreateForm from "./CreateForm";



function Home(){
    return(
        <>
        <Navbar/>


        <div className="container  mt-4" id="selection">
                
            <div className="row">
                <center><h2 style={{color:"aqua"}} id="armySelect"> </h2></center>
            

               <CreateForm/>

            </div>
        </div>


        <div className="container mt-3" id="taskList">
            <center>
                <h4> Main Tasks</h4>
            </center>
            <div  className="row">

                <TaskItem/>
                
            </div> 
        </div>
        </>
    )
}

export default Home;