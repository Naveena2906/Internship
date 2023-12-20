import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getprod } from '../Redux/Redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteproducts, deletesign, getproducts, getsign, getsignbypid } from '../Service/api';
import './Viewproduct.css';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Bar/Navbar';

const Viewuser = () => {
    const navigate=useNavigate();
    const {id} = useParams();
    const[prod,setProd]=useState([]);
    
      const fetchprod=async()=>{
        const response=await getsignbypid(id);
        setProd(response.data);
        console.log(response.data);
      }
      useEffect(()=>{
        fetchprod();
      },[])

      const edit=(prod)=>{
        console.log(prod);
        // dispatch(setToUpdate(product));
        navigate(`/updateuser/${prod.pid}`)
      }
      const del=async(prod)=>{
        console.log(prod);
        // dispatch(removeproduct(product.id));
        const prodid=prod.pid;
        const res= await deletesign(prodid);
        console.log(res.data);
        if(res.data==="deleted")
        {
          toast.success(`${prod.pname} in to bin`)
          fetchprod();
        }
      }
      useEffect(()=>{
        fetchprod();
      },[id]);
  return (
    <div >
      <Navbar/>
      <div  className="content d-flex-r">
      <table style={{width:'60vw',marginLeft:"17%",marginTop:"8%"}} className='vptable' >
      <tr>
        <th>Id</th>
        <th>User name</th>
        <th>password</th>
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
       
            <tr>
                <td>{prod.pid}</td>
                <td>{prod.pusername}</td>
                <td>{prod.ppassword}</td>
                <td>{prod.pname}</td>
                <td>{prod.pcategory}</td>
                <td>{prod.pbrand}</td>
                <td>{prod.pscreen}</td>
                <td>{prod.pram}</td>
                <td>{prod.pprice}</td>
                <td>{prod.pavailable}</td>
                <td>{prod.prole}</td>
                <td onClick={()=>edit(prod)} style={{cursor:'pointer'}}>edit</td>
                  <td onClick={()=>del(prod)} style={{cursor:'pointer'}}>delete</td>
            </tr>
        
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default Viewuser