import axios from "axios";
const URI = "http://localhost:8080";

const getproducts = () => axios.get(`${URI}/get/product`)
const getproductbypid=(pid)=> axios.get(`${URI}/getproduct/${pid}`)
const addproducts = (prod) => axios.post(`${URI}/post/product`, prod)
const editproducts = (pid, prod) =>axios.put(`${URI}/save/product/${pid}`, prod)
const deleteproducts = (pid) => axios.delete(`${URI}/delete/product/${pid}`)

const getsign = () => axios.get(`${URI}/get/sign`)
const getsignbypid=(pid)=> axios.get(`${URI}/getsign/${pid}`)
const viewuserandpass=(pusername,ppassword)=> axios.get(`${URI}/viewuserandpass/${pusername}/${ppassword}`)
const addsign = (prod) => axios.post(`${URI}/post/sign`, prod)
const editsign = (pid, prod) =>axios.put(`${URI}/save/sign/${pid}`, prod)
const deletesign = (pid) => axios.delete(`${URI}/delete/sign/${pid}`)

export { getproducts,getproductbypid,viewuserandpass, addproducts, editproducts, deleteproducts,getsign,getsignbypid,addsign,editsign,deletesign };
