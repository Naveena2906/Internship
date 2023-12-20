import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addproduct from "./Product/Addproduct";
import Viewproduct from "./Product/Viewproduct";
import Updateproduct from "./Product/Updateproduct";
import Signup from "./Users/Signup";
import Login from "./Users/Login";
import Viewuser from "./Product/Viewuser";
import Updateuser from "./Product/Updateuser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/viewuser/:id" element={<Viewuser />} />
          <Route path="/view" element={<Viewproduct />} />
          <Route path='/updateproduct/:id' element={<Updateproduct/>}></Route>
          <Route path='/updateuser/:id' element={<Updateuser/>}></Route>
          {/* <Route path='/viewproduct' element={<Addproduct/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
