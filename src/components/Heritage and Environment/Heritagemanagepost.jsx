import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
// import Addpost from "./Addpost";
// import Addpeople from "./Addpeople";
// import ManagePeople from "./Managepeople";
// import DIY from "./DIY";


import Heritage from "../Heritage";
import axios from "axios";
import Heritageaddpost from "./Heritageaddpost";



const HeritageManagePost =() => {
 
  
  
  
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        loadPosts();

    },[]);

const loadPosts = async () => {
    const result = await axios.get("http://localhost:3003/posts");
    setPosts(result.data);
}

const deletePost = async id => {
  await axios.delete('http://localhost:3003/posts/'+id);
  loadPosts();

}
const getMode = () => {
  return JSON.parse(localStorage.getItem("mode")) || false
}

const[dark,setMode]=useState(getMode())
useEffect(() => {
  localStorage.setItem("mode",JSON.stringify(dark))


},[dark])
  


  
  return (
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
            <h1 class="heading"> Heritage and Environment</h1>
              
        <ul class="homeul">
       
        <li> <NavLink class="homeb" to="/Heritageaddpeople">Add People </NavLink>
            
            
            </li>
            <li>
              <a class="homeb" href="/Heritagemanagepeople">
                Manage People
              </a>
            </li>
            <li> <NavLink class="homeb" to="/Heritageaddpost">Add Post</NavLink></li>
            
            
            <li>
              
              <NavLink class="homeb" to="/Heritagemanagepost">
                Manage Posts
              </NavLink>
            </li>
            <li> <NavLink class="homeb" to="/">Home</NavLink></li>
         
        
        
         
         
        </ul>
        <h1 class="title"> Manage Post</h1> 
        <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">SN </th>
      <th scope="col">Title </th>
      <th scope="col">Section </th>
      
      <th> Action </th>
    </tr>
  </thead>
  <tbody>
    {
      posts.map((post,index)=> (
        <tr>
          <th scope="row"> {index+1} </th>
          <td> { post.title  }</td>
          <td> { post.topic  }</td>
          <td> 
            
            
          <Link class="edit" to={"/Edit/"+post.id}
          > Edit   </Link>
            
            
            
            <Link class="delete" onClick={() => deletePost(post.id)}> Delete  </Link>
          </td>
         
         
        </tr>
  ))
    }
    
    
  </tbody>
</table>
</div>
       
          
      </div>
    </div>
  );
}

export default HeritageManagePost;