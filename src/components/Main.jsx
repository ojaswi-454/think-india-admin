import React,{useState,useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";














function Main() {
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
        <div class="nav homenav">
                <h3 class="theme"> Change Theme </h3>
            <label class="switch">
  <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)} />
  <span class="slider round"></span>
</label>

            </div>
           
            <div class="admin-enter">
<h1>Welcome To Admin-Page!</h1>  
<p>Add and Manage Users and Posts from here..</p>
            </div>
       </div>
       
       
 
</div>




    );
}

export default Main;
