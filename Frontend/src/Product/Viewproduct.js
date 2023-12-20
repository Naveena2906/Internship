import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getprod } from '../Redux/Redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteproducts, deletesign, getproducts, getsign } from '../Service/api';
import './Viewproduct.css';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Bar/Navbar';

const Viewproduct = () => {
      const[prod,setProd]=useState([]);
      const navigate=useNavigate();
      const fetchprod=async()=>{
        const response=await getsign();
        setProd(response.data);
        console.log(response.data);
      }
      useEffect(()=>{
        fetchprod();
      },[])

      const edit=(p)=>{
        console.log(p);
        // dispatch(setToUpdate(product));
        navigate(`/updateproduct/${p.pid}`)
      }
      const del=async(p)=>{
        console.log(p);
        // dispatch(removeproduct(product.id));
        const prodid=p.pid;
        const res= await deletesign(prodid);
        console.log(res.data);
        if(res.data==="deleted")
        {
          toast.success(`${p.pname} in to bin`)
          fetchprod();
        }
      }
  return (
    <div>
      <Navbar/>
      <div  className="content d-flex-r">
      <table style={{width:'60vw',marginLeft:"17%",marginTop:"8%"}} className='vptable' >
      <tr>
        <th>Id</th>
        <th>User name</th>
        {/* <th>password</th> */}
        <th>Product name</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Screen Size</th>
        <th>RAM</th>
        <th>Price</th>
        <th>Available</th>
        <th>Role</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tbody style={{textAlign:'center'}}>
        {prod.map((p)=>(
            <tr>
                <td>{p.pid}</td>
                <td>{p.pusername}</td>
                {/* <td>{p.ppassword}</td> */}
                <td>{p.pname}</td>
                <td>{p.pcategory}</td>
                <td>{p.pbrand}</td>
                <td>{p.pscreen}</td>
                <td>{p.pram}</td>
                <td>{p.pprice}</td>
                <td>{p.pavailable}</td>
                <td>{p.prole}</td>
                <td onClick={()=>edit(p)} style={{cursor:'pointer'}}>edit</td>
                  <td onClick={()=>del(p)} style={{cursor:'pointer'}}>delete</td>
            </tr>
        ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Viewproduct