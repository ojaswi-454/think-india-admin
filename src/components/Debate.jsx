import React,{useState,useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import DebateManagePost from './Debate/debatemanagepost';
import Debateaddpost from './Debate/debateaddpost';
import DebateAddpeople from './Debate/debateaddpeople';
import DebateManagePeople from './Debate/debatemanagepeople';



function Debate() {
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false
    }
    
    const[dark,setMode]=useState(getMode())
    useEffect(() => {
        localStorage.setItem("mode",JSON.stringify(dark))


    },[dark])
    return(
        <div class={dark ? "main dark-mode" : "main"}>

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
            <h1 class="heading"> Debate </h1>
           
           <ul class="homeul">
           <li> <NavLink class="homeb" to="/debateaddpeople">Add People </NavLink></li>
                <li> <NavLink class="homeb" to="/debatemanagepeople">Manage People </NavLink></li>
            
            
            <li> <NavLink class="homeb" to="/debateaddpost">Add Post</NavLink></li>  
            <li> <NavLink class="homeb" to="/debatemanagepost">Manage Post</NavLink></li>
            <li> <NavLink class="homeb" to="/">Home</NavLink></li>
            
             
            
            


            
             
            
                
           </ul>
       </div>
       
       
 
</div>


    );
}

export default Debate;