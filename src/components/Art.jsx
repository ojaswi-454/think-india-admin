import React,{useState,useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import ArtManagePost from './Art and Designing/Artmanagepost';
import Artaddpost from './Art and Designing/Artaddpost';
import ArtAddpeople from './Art and Designing/Artaddpeople';
import ArtManagePeople from './Art and Designing/Artmanagepeople';

function Art() {
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
                <li><NavLink to="/Enterprenurship">Enterprenurship</NavLink></li>
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
            <h1 class="heading"> Art and Designing  </h1>
           
           <ul class="homeul">
           <li> <NavLink class="homeb" to="/Artaddpeople">Add People </NavLink></li>
                <li> <NavLink class="homeb" to="/Artmanagepeople">Manage People </NavLink></li>
            
            
            <li> <NavLink class="homeb" to="/Artaddpost">Add Post</NavLink></li>  
            <li> <NavLink class="homeb" to="/Artmanagepost">Manage Post</NavLink></li>
            <li> <NavLink class="homeb" to="/">Home</NavLink></li>
            
             
            
            


            
             
            
                
           </ul>
       </div>
       
       
 
</div>


    );
}

export default Art;