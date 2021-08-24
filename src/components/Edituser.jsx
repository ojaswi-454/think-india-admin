import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";


import axios from "axios";
import { useHistory,useParams } from "react-router";
import DIYManagePeople from "./DIY/diymanagepeople";





const Edituser = () => {

    let history = useHistory();
    const {id} = useParams();
    const [post,setPost]=useState({
        name: "",
        about:"",
        topic:"",

       
        
    });
    const {name,about,topic}=post;
    const onInputChange = e => {
        setPost({ ...post,[e.target.name]: e.target.value})

    };
    useEffect(() => {
        loadPost();
    },[]);
    const onSubmit= async e => {
        e.preventDefault();
        await axios.put("http://localhost:3003/people/"+id,post);
        history.push("./DIY/diymanagepeople");


    };
    const loadPost = async () => {
        const result = await axios.get('http://localhost:3003/people/'+id);
        
        setPost(result.data);
    };
        return(
            <div class="main">
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
               
               <ul class="homeul">
                <li> <NavLink class="homeb" to="/diyaddpeople">Add People </NavLink></li>
                <li> <NavLink class="homeb" to="/diymanagepeople">Manage People </NavLink></li>
                <li> <NavLink class="homeb" to="/diyaddpost">Add Post</NavLink></li> 
                <li> <NavLink class="homeb" to="/diymanagepost">Manage Posts</NavLink></li>     
               </ul>
               <h1 class="title"> Edit People</h1>
               <form onSubmit={e => onSubmit(e)}>
                   <div class="form">
                       
                       <p class="label"> Name </p>
                       <input type="text" 
                        class="input" name="name" value={name} onChange={e => onInputChange(e)}
                         />
                       <p class="label"> Body </p>
                       <textarea name="body" id="body" name="about" value={about} onChange={e => onInputChange(e)} ></textarea>
                       <p class="label"> Topic </p>
                       <select name="topic" class="topic" name="topic" value={topic} onChange={e => onInputChange(e)}>
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
                       
                       <input type="submit" value="Edit people" class="submit" />
    
                       
                       
                   </div>
               </form>
    
           </div>
          
          
           
           
           
           
     
    </div>
    
        );
    }



   


export default Edituser;