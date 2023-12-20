import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import '../Bar/Navbar.css';
const Navbar = () => {
  const navigate=useNavigate();
  const viewgo=()=>{
    navigate("/view");
  }
  const addgo=()=>{
    navigate("/add");
  }
  const signout=()=>{
    navigate("/");
  }
  return (
    <div style={{backgroundColor:"lightpink",height:"8vh",display:"flex",alignItems:"center"}}>
      {/* <img style={{width:"3%",borderRadius:"40px",height:"5vh",marginLeft:"4%"}} src='https://tse4.mm.bing.net/th?id=OIP.wb6wXSmiFEY5nhvh3oH4rgHaF7&pid=Api&P=0&h=180'/> */}
      {/* <div><img src='https://i.ytimg.com/vi/jobNUBuqiNQ/maxresdefault.jpg'/></div> */}
      <div style={{fontStyle:"italic",fontSize:"larger",marginLeft:"3.8%"}}>Tech Tricker</div>
      {/* <div onClick={viewgo} style={{marginLeft:"59%",fontSize:"larger",cursor:"pointer"}}>Viewproducts</div>  */}
      {/* <div onClick={addgo} style={{fontSize:"larger",cursor:"pointer",padding:"3%",marginLeft:"60%"}}>Addproducts</div>  */}
      <div onClick={signout} style={{fontSize:"large",cursor:"pointer",padding:"3%",marginLeft:"70%"}}>SignOut</div> 
    </div>
  )
}

export default Navbar