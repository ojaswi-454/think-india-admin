import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";


import axios from "axios";
import { useHistory,useParams } from "react-router";
import DIYManagePost from "./DIY/diymanagepost";





const Edit = () => {

    let history = useHistory();
    const {id} = useParams();
    const [post,setPost]=useState({
        title: "",
        body:"",
        topic:"",
       
        
    });
    const {title,body,topic}=post;
    const onInputChange = e => {
        setPost({ ...post,[e.target.name]: e.target.value})

    };
    useEffect(() => {
        loadPost();
    },[]);
    const onSubmit= async e => {
        e.preventDefault();
        await axios.put("http://localhost:3003/posts/"+id,post);
        history.push("./DIY/diymanagepost");
        
        


    };
    const loadPost = async () => {
        const result = await axios.get('http://localhost:3003/posts/'+id);
        
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
               <h1 class="title"> Edit Post</h1>
               <form onSubmit={e => onSubmit(e)}>
                   <div class="form">
                       
                       <p class="label"> Title </p>
                       <input type="text" 
                        class="input" name="title" value={title} onChange={e => onInputChange(e)}
                         />
                       <p class="label"> Body </p>
                       <textarea name="body" id="body" name="body" value={body} onChange={e => onInputChange(e)} ></textarea>
                       <p class="label"> Topic </p>
                       <select name="topic" class="topic" name="topic" value={topic} onChange={e => onInputChange(e)}>
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
                       
                       <input type="submit"  value="Edit post" class="submit" id="submit"/>
    
                       
                       
                   </div>
               </form>
              
           </div>
          
          
           
           
           
           
     
    </div>
    
        );
    }



   


export default Edit;
