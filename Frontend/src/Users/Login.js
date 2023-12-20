import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewuserandpass } from '../Service/api';
import Navbar from '../Bar/Navbar';
//  import '../Users/Login.css';
const Login = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login,setLogin]=useState({
    pusername:'',ppassword:''
})
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };
const handleSubmit=async(e)=>{
    const res=await viewuserandpass(login.pusername,login.ppassword)
    console.log(res.data);
    console.log(res.data[0].prole);

    setLogin({pusername:'',ppassword:''})
    if(res.data[0].prole==="Admin")
    {
        navigate("/view");
    }
    else{
        navigate(`/viewuser/${res.data[0].pid}`)
    }
}
const handlego=()=>{
    navigate("/");
}
  return (
    <div className='log-body'>
        {/* <Navbar/> */}
        <div style={{width:"40%",height:"10vh",marginTop:"10%"}}>
            <img style={{height:"50vh",marginLeft:"125.3%",width:"80%"}}src='http://www.pixelstalk.net/wp-content/uploads/2016/05/Hd-Laptop-wallpapers.jpg'/>
        </div>
    <div  className='login-container' style={{border:"1px solid black",width:"22%",marginLeft:"28%",height:"49.7vh",marginTop:"-4.7%"}}>
        <div style={{ padding: "3%" ,marginLeft:"10%",marginTop:"25%"}}>
            <input type="text" placeholder="user name" id="pusername" onChange={handleChange} value={login.pusername} style={{ padding: "2%" }}/>
        </div>
        <div style={{ padding: "2%" ,marginLeft:"10%"}}>
            <input type="text" placeholder="password" id="ppassword" onChange={handleChange} value={login.ppassword} style={{ padding: "2%" }}/>
        </div>
        <div style={{padding:"3%"}}>
            <button style={{ padding: "1.7%" ,marginLeft:"10%",width:"28%",cursor:"pointer"}}onClick={handleSubmit}>Login</button>
        </div>
        <h4 style={{marginLeft:"-8%"}}>Already new user? </h4>
        <div onClick={handlego} style={{cursor:"pointer",marginLeft:"53%",marginTop:"-12.5%"}}>Signup</div>
    </div>
    </div>
  )
}

export default Login