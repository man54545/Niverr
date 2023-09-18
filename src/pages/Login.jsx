import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BACKEND_URL from "../Api";
import { useEffect } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setpass] = useState("");
  const [err,seterr] = useState("");
  const [fdata,setfdata] = useState({});

  const formSubmit = async (e)=>{
    if(!email){
      e.preventDefault();
      seterr('email required.');
      document.getElementById('email').focus();
    }
    else if(!password){
      e.preventDefault();
      seterr('password required.');
      document.getElementById('password').focus();
    }
    else{
      e.preventDefault(); 
      let fdata = await axios.post(BACKEND_URL+'auth/login',{email,password},{withCredentials : true});
      if(fdata.status === 200){
        setfdata(fdata.data);
        localStorage.setItem('currentUser',JSON.stringify(fdata.data));
        navigate('/');
      }
      else{
        seterr(fdata.data.msg);
        e.preventDefault();
      }
    }
  }

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Link to="/" className="text-dark position-absolute" style={{top :"20px", right :"30px"}}>Back to Home</Link>
      <form method='post' className='mx-auto row align-items-center flex-column justify-content-center vh-100 w-100 mx-auto'>
          <h1 className='text-center mb-5 fw-8'>Login Page</h1>      
          <p className='text-center text-danger fw-8'>{err}</p>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              <label className="mb-2">Email Address</label>
              <input type="email" name="email" id="email" onChange={(e)=> setemail(e.target.value)} className="form-control py-2 px-3" placeholder='Email Address' />                            
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              <label className="mb-2">Password</label>
              <input type="password" name="password" id="password" onChange={(e)=> setpass(e.target.value)} className="form-control py-2 px-3" placeholder='Password' />
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
              {/* <Link to='/'> */}
                <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Login" />
              {/* </Link> */}
          </div>
          <div className="col-lg-5 col-md-7 col-sm-8 col-12 d-flex flex-wrap align-items-center justify-content-between">
              <Link to="/register" className="text-dark">Sign Up</Link>
              <Link to="/lost_password" className="text-dark">Lost Password</Link>
          </div>
      </form>
    </>
  )
}

export default Login;