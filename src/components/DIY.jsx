import React,{useState,useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import DIYManagePost from './DIY/diymanagepost';

import DIYAddpeople from './DIY/diyaddpeople';
import DIYManagePeople from './DIY/diymanagepeople';
import Diyaddpost from './DIY/diyaddpost';

function DIY() {
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false
    }
    
    const[dark,setMode]=useState(getMode())
    useEffect(() => {
        localStorage.setItem("mode",JSON.stringify(dark))


    },[dark])
    return(
        <div  class={dark ? "main dark-mode" : "main"}>

        <div class="sidebar">
           
            <ul class="sideul">
                <li> <NavLink to="/DIY">DIY </NavLink></li>
                <li> <NavLink to="/Debate">Debate  </NavLink></li>
                <li><NavLink to="/Enterprenurship">Enterprenurship </NavLink></li>
                <li><NavLink to="/Art">Art and Designing  </NavLink></li>
                <li><NavLink to="/Heritage">Heritage and Environment </NavLink></li>
                
                 
            </ul>

        </div>
       
       
        <div class="home">
        <div class="nav">
            <label class="switch">
  <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)} />
  <span class="slider round"></span>
</label>

            </div>
            <h1 class="heading"> DIY </h1>
           
           <ul class="homeul">
           <li> <NavLink class="homeb" to="/diyaddpeople">Add People </NavLink></li>
                <li> <NavLink class="homeb" to="/diymanagepeople">Manage People </NavLink></li>
            
            
            <li> <NavLink class="homeb" to="/diyaddpost">Add Post</NavLink></li>  
            <li> <NavLink class="homeb" to="/diymanagepost">Manage Post</NavLink></li>
            <li> <NavLink class="homeb" to="/">Home</NavLink></li>
            
             
            
            


            
             
            
                
           </ul>
       </div>
       
       
 
</div>


    );
}

export default DIY;