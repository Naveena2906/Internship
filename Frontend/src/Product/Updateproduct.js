import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addproduct } from "../Redux/Redux";
import { addproducts, editproducts, editsign, getproductbypid, getproducts, getsignbypid } from "../Service/api";
import Navbar from "../Bar/Navbar";


const Updateproduct = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [up, setUp] = useState({
    pid: "",
    pusername:"",
    pname: "",
    pcategory: "",
    pbrand: "",
    pscreen: "",
    pram: "",
    pprice: "",
    pavailable: "",
    prole:"",
  });
  const fetchid=async()=>{
    try{
    const product=await getsignbypid(id);
    setUp(product.data);
    console.log(product.data)
    }
    catch(error){
      console.error("product id not available",error);
    }
    }
    useEffect(()=>{

      fetchid();
    },[])
  const handleChange = (e) => {
    e.preventDefault();
    setUp({ ...up, [e.target.id]: e.target.value });
  };
  const handleSubmit = async(up) => {
    // e.preventDefault();
    console.log(up);
    const res=await editsign(up.pid,up);
    console.log(res.data);
    if(res.data==="Updated Successfully")
    {
       navigate("/view");
    }
  };
      // const prod=await addproducts(addprod);
      // console.log(prod.data);
  //     if(prod.data==='posted successfully')
  //     {
  //       toast.success("product added");
  //       setTimeout(()=>{
  //         navigate('/view')
  //       },2000);

  // };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
       <Navbar/>
      <div
        style={{
          marginTop: "8%",
          border: "2px solid black",
          height: "40vh",
          width: "30%",
          marginLeft: "34%",
          paddingTop: "40px",
          paddingBottom: "8%",
        }}
      >
       
        {/* <form onSubmit={handleSubmit}> */}
          {/* <div style={{ padding: "1%" }}>
            <input
              type="number"
              placeholder="product Id"
              id="pid"
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div> */}
          <div className="updatein">
            <input
              type="number"
              placeholder="id"
              id="pid"
              className="upin"
              value={up.pid}
            ></input>
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="user name"
              id="pusername"
              value={up.pusername}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="product name"
              id="pname"
              value={up.pname}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="Category"
              id="pcategory"
              value={up.pcategory}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="brand"
              id="pbrand"
              value={up.pbrand}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="screensize"
              id="pscreen"
              value={up.pscreen}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="ram"
              id="pram"
              value={up.pram}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="number"
              placeholder="price"
              id="pprice"
              value={up.pprice}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="available"
              id="pavailable"
              value={up.pavailable}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="role"
              id="prole"
              value={up.prole}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "0.8%" }}>
            <button
              style={{
                padding: "1%",
                width: "15%",
                cursor: "pointer",
              }}
              onClick={()=>{handleSubmit(up)}}
            >
              Update
            </button>
          </div>
        {/* </form> */}
      </div>
        {/* <button onClick={()=>{navigate("/view")}}>view</button> */}
    </div>
  );
};

export default Updateproduct;
