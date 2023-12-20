import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addproduct } from "../Redux/Redux";
import { addproducts } from "../Service/api";
import Navbar from "../Bar/Navbar";

const Addproduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addprod, setAddprod] = useState({
    pid: "",
    pusername:"",
    pname: "",
    pcategory: "",
    pbrand: "",
    pscreen: "",
    pram: "",
    pprice: "",
    pavailable: "",
  });
  const handleChange = (e) => {
    setAddprod({ ...addprod, [e.target.id]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
      const prod = await addproducts(addprod);
      console.log(prod.data);
      setAddprod({
        pid: '',
        pusername:'',
        pname: '',
        pcategory: '',
        pbrand: '',
        pscreen: '',
        pram: '',
        pprice: '',
        pavailable: '',
      });
  }

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
          paddingBottom: "2.9%",
        }}
      >
       
           <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="user name"
              id="pusername"
              onChange={handleChange}
              value={addprod.pusername}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="product name"
              id="pname"
              value={addprod.pname}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="Category"
              id="pcategory"
              value={addprod.pcategory}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="brand"
              id="pbrand"
              value={addprod.pbrand}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="screensize"
              id="pscreen"
              value={addprod.pscreen}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="ram"
              id="pram"
              value={addprod.pram}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="number"
              placeholder="price"
              id="pprice"
              value={addprod.pprice}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "1%" }}>
            <input
              type="text"
              placeholder="available"
              id="pavailable"
              value={addprod.pavailable}
              onChange={handleChange}
              style={{ padding: "1%" }}
            />
          </div>
          <div style={{ padding: "0.8%" }}>
            <button
              style={{
                padding: "1%",
                width: "9%",
                borderRadius: "20%",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        {/* </form> */}
      </div>
        {/* <button onClick={()=>{navigate("/view")}}>view</button> */}
    </div>
  );
};

export default Addproduct;
