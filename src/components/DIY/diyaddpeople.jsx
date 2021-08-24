import React,{useState,useEffect}  from "react";
import { Link, NavLink } from "react-router-dom";

import DIY from "../DIY";
import { useHistory } from "react-router";
import axios from "axios";

import DIYManagePeople from "./diymanagepeople";






const DIYAddpeople = () => {
    let history = useHistory();
    const [post,setPost]=useState({
        name: "",
        about:"",
        topic:"",
    
    });
  
    const {name,about,topic}=post;
    const onInputChange = e => {
        setPost({ ...post,[e.target.name]: e.target.value})

    };

    const onSubmit= async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/people ",post);
        history.push("./diymanagepeople");
        

    };
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
            <div class="mainpage">
            <h1 class="heading"> DIY </h1>
                
            
               <ul class="homeul">
               <li> <NavLink class="homeb" to="/diyaddpeople">Add People </NavLink>
            
            
            </li>
            <li>
              <a class="homeb" href="/diymanagepeople">
                Manage People
              </a>
            </li>
            <li> <NavLink class="homeb" to="/diyaddpost">Add Post</NavLink></li>
            
            
            <li>
              
              <NavLink class="homeb" to="/diymanagepost">
                Manage Posts
              </NavLink>
            </li>
            <li> <NavLink class="homeb" to="/">Home</NavLink></li>
                
                
                
                
                  
                
                
               </ul>
               <h1 class="title"> Add people </h1>
               <div class="form">
                   
               <form onSubmit={e => onSubmit(e)} 
               >
                   
                   
                       
                       <p class="label"> Name  </p>
                       <input type="text" 
                        class="input" name="name"  value={name} onChange={e => onInputChange(e)} placeholder="Type the name"
                        
                         />
                       <p class="label"> Body </p>
                       <input type="text" id="body" name="about" value={about} onChange={e => onInputChange(e)} placeholder="Type something about the user" />
                       
                       
                       <p class="label"> Topic </p>
                       <select name="topic" class="topic" name="topic" value={topic} onChange={e => onInputChange(e)}  >
                           
                       <option value="Select"> Select </option>
                       <option value="DIY"> DIY </option>
                           <option value="Debate"> Debate  </option>
                           <option value="Enterprenurship"> Enterprenurship  </option>
                           <option value="Art and Designing"> Art and Designing  </option>
                           <option value="Heritage"> Heritage and Environment  </option>
                       </select>
                       <br />
                       <br />
                       <br />
                       <br />
                       
                       <input type="submit" value="Add people" class="submit" />
                       </form>
    
                       
                       
                   </div>
                   </div>
               
               
    
           </div>
           
           
           
           
     
    </div>
    
        )
    }



    


export default DIYAddpeople;