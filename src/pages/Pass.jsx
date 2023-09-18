import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BACKEND_URL from '../Api';
import { useEffect } from 'react';

const GenPass = () => {

  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem('Id'));
  const [err,seterr] = useState("");
  const [password,setpassword] = useState('');
  const [cpassword,setcpassword] = useState('');
  const [,setfdata] = useState({});

  const formSubmit = async (e)=>{
    if(!password){
      e.preventDefault();
      seterr('password required.');
      document.getElementById('password').focus();
    }
    else if(password !== cpassword){
      e.preventDefault();
      seterr('password not match.');
      document.getElementById('cpassword').focus();
    }
    else{
      e.preventDefault();
      let fdata = await axios.put(BACKEND_URL+'user/set_pass',{id,password,cpassword});
      if(fdata.status === 200){
        setfdata(fdata.data);
        if(fdata.data){
          localStorage.setItem('Id',null);
          navigate("/login");
        }
        else{
          e.preventDefault();
        }
      }
      else{
        e.preventDefault();
        seterr(fdata.data.msg);
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
            <h1 className='text-center mb-5 fw-8'>Genrate Password</h1> 
            <p className='text-center text-danger fw-8'>{err}</p>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <label className="mb-2">Password</label>
                <input type="password" name="password" id="password" onChange={(e)=> setpassword(e.target.value)} className="form-control py-2 px-3" placeholder='Password' />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <label className="mb-2">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" onChange={(e)=> setcpassword(e.target.value)} className="form-control py-2 px-3" placeholder='Confirm Password' />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Genrate Password" />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 d-flex flex-wrap align-items-center justify-content-between">
                <Link to="/register" className="text-dark">Sign Up</Link>
                <Link to="/login" className="text-dark">Sign In</Link>
            </div>
        </form>
    </>
  )
}

export default GenPass;