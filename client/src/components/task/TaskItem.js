import React from "react";
import './TaskItem.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


function TaskItem(){
    return(
        <>
        <div className="col-11" id="task_item">
            <div className="card" id="task_card" >
                <div className="card-body">
                    <h5>Card title </h5>
                    <div>
                        <p className="task-description">This is an example task description. You can replace this text with your own content.</p>
                    </div>

                    <div id="item_footer">
                        <h6><span>Status:</span> <span>Created</span>  </h6>
                        <h6 id="del_edit"><span><AiOutlineEdit/></span>  <span><AiOutlineDelete/></span></h6>
                    </div>
                    
                   
                </div>
            </div>
        </div>    
        </>
    )
}

export default TaskItem;
