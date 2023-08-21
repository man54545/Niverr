import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BACKEND_URL from "../Api";

const Login = () => {

  const navigate = useNavigate();

  const [email,setemail] = useState("");
  const [password,setpass] = useState("");
  const [fdata,setfdata] = useState({});

  const formSubmit = async (e)=>{
    e.preventDefault();
    let fdata = await axios.post(BACKEND_URL+'auth/login',{email,password},{withCredentials : true});
    setfdata(fdata.data);
    localStorage.setItem('currentUser',JSON.stringify(fdata.data));
    if(fdata.data){
      navigate("/");
    }
    else{
      navigate("/login");
    }
  }

  return (
    <>
      <NavLink to="/" className="text-dark position-absolute" style={{top :"20px", right :"30px"}}>Back to Home</NavLink>
      <form method='post' className='mx-auto row align-items-center flex-column justify-content-center vh-100 w-100 mx-auto'>
          <h1 className='text-center mb-5 fw-8'>Login Page</h1>        
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              <label className="mb-2">Email Address</label>
              <input type="email" name="email" id="email" onChange={(e)=> setemail(e.target.value)} className="form-control py-2 px-3" placeholder='Email Address' />                            
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              <label className="mb-2">Password</label>
              <input type="password" name="password" id="password" onChange={(e)=> setpass(e.target.value)} className="form-control py-2 px-3" placeholder='Password' />
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              {/* <NavLink to='/'> */}
                <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Login" />
              {/* </NavLink> */}
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 d-flex flex-wrap align-items-center justify-content-between">
              <NavLink to="/register" className="text-dark">Sign Up</NavLink>
              <NavLink to="/lost_password" className="text-dark">Lost Password</NavLink>
          </div>
      </form>
    </>
  )
}

export default Login;