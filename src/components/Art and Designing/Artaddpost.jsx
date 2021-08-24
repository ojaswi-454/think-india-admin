import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";



import axios from "axios";
import { useHistory } from "react-router";

import Art from "../Art";
import ArtManagePost from "./Artmanagepost";






const Artaddpost = () => {
    let history = useHistory();
    const [post,setPost]=useState({
        title: "",
        body:"",
        topic:""
    });
    const {title,body,topic}=post;
    const onInputChange = e => {
        setPost({ ...post,[e.target.name]: e.target.value})

    };
    const onSubmit= async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/posts",post);
        history.push("./Artmanagepost");

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
            <div class="mainpage">
            <h1 class="heading"> Art and Designing </h1>
            
               <ul class="homeul">
               
               <li> <NavLink class="homeb" to="/Artaddpeople">Add People </NavLink>
            
            
          </li>
          <li>
            <a class="homeb" href="/Artmanagepeople">
              Manage People
            </a>
          </li>
          <li> <NavLink class="homeb" to="/Artaddpost">Add Post</NavLink></li>
          
          
          <li>
            
            <NavLink class="homeb" to="/Artmanagepost">
              Manage Posts
            </NavLink>
          </li>
          <li> <NavLink class="homeb" to="/">Home</NavLink></li>
               </ul>
               
               <h1 class="title"> Create Post</h1>
               <div class="form">
               <form onSubmit={e => onSubmit(e)}>
                   
                   
                       
                       <p class="label"> Title </p>
                       <input type="text" 
                        class="input" name="title" value={title} onChange={e => onInputChange(e)} placeholder="Type the title"
                         />
                       <p class="label"> Body </p>
                       <input type="text" id="body" name="body" value={body} onChange={e => onInputChange(e)} placeholder="Type the body" />
                       <p class="label"> Topic </p>
                       <select name="topic" class="topic" name="topic" value={topic} onChange={e => onInputChange(e)} 
                       >
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
                       
                       <input type="submit" value="Add post" class="submit" />
                       </form>
                       </div>
    
                       
                       
                  
                  
               
               
               </div>
    
           </div>
          
          
           
           
           
           
     
    </div>
    
        );
    }



   


export default Artaddpost;