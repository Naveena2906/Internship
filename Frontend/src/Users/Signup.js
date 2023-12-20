import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addproducts, addsign } from '../Service/api';
import Navbar from "../Bar/Navbar";
const Signup = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addprod, setAddprod] = useState({
    pid: "",
    pusername:"",
    ppassword:"",
    pname: "",
    pcategory: "",
    pbrand: "",
    pscreen: "",
    pram: "",
    pprice: "",
    pavailable: "",
    prole:"",
  });
  const handleChange = (e) => {
    setAddprod({ ...addprod, [e.target.id]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
      const prod = await addsign(addprod);
      console.log(prod.data);
      setAddprod({
        pid: '',
        pusername:'',
        ppassword:'',
        pname: '',
        pcategory: '',
        pbrand: '',
        pscreen: '',
        pram: '',
        pprice: '',
        pavailable: '',
        prole:'',
      });
    }
    const loggo=()=>{
      navigate("/login");
    }
  return (
    <div > 
      {/* <Navbar/> */}
          <div style={{width:"40%",height:"50vh",marginTop:"-3%"}}>
            <img style={{width:"90%",height:"70vh",marginTop:"20%",marginLeft:"30%"}} src='http://www.pixelstalk.net/wp-content/uploads/2016/05/Hd-Laptop-wallpapers.jpg'/>
          </div>
          <div style={{marginLeft:"48%",marginTop:"-15.7%",border:"1px solid black",width:"30%",paddingBottom:"10.6%"}}>
        <div
        style={{
          // marginTop: "8%",
          height: "40vh",
          width: "30%",
          marginLeft: "34%",
          paddingTop: "40px",
          paddingBottom: "2.9%",
        }}
      >
        
       
       
           <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="user name"
              id="pusername"
              onChange={handleChange}
              value={addprod.pusername}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="password"
              id="ppassword"
              onChange={handleChange}
              value={addprod.ppassword}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="product name"
              id="pname"
              value={addprod.pname}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="Category"
              id="pcategory"
              value={addprod.pcategory}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="brand"
              id="pbrand"
              value={addprod.pbrand}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="screensize"
              id="pscreen"
              value={addprod.pscreen}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="ram"
              id="pram"
              value={addprod.pram}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="number"
              placeholder="price"
              id="pprice"
              value={addprod.pprice}
              onChange={handleChange}
              style={{ padding: "2%" ,width:"140%"}}
            />
          </div>
          <div style={{ padding: "4%" }}>
            <input
              type="text"
              placeholder="available"
              id="pavailable"
              value={addprod.pavailable}
              onChange={handleChange}
              style={{ padding: "2%",width:"140%" }}
            />
          </div>
          <div style={{padding:"0.8%"}} >
            <select
              type="text"
              placeholder="Role"
              id="prole"
              style={{width:"140%",padding:"3%"}}
              onChange={handleChange}
              value={addprod.prole}
            >
            <option value={''}>Select Role</option>
            <option value={'Admin'}>Admin</option>
            <option value={'User'}>User</option>
            </select>
          </div>
          <div style={{ padding: "7%" }}>
            <button
              style={{
                padding: "4%",
                width: "57%",
                borderRadius: "10%",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <h4 style={{marginLeft:"-48%",marginTop:"1%"}}>
            Already Registered ?
          </h4>
          <div style={{marginLeft:"94%",marginTop:"-31.1%",cursor:"pointer"}} onClick={loggo}>
            Login
          </div>
          
        {/* </form> */}
      </div>
        {/* <button onClick={()=>{navigate("/view")}}>view</button> */}
    </div>
    </div>
  )
}

export default Signup