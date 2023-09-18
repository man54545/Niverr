import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BACKEND_URL from '../Api';
import { useEffect } from 'react';

const LostPass = () => {

    const navigate = useNavigate();

  const [email,setemail] = useState();
  const [fdata,setfdata] = useState({});
  const [err,seterr] = useState("");

  const formSubmit = async (e)=>{
    if(!email){
      e.preventDefault();
      document.getElementById('email').focus();
      seterr('email required.');
    }
    else{
      e.preventDefault();
      let fdata = await axios.post(BACKEND_URL+'user/view_email',email);
      if(fdata.status === 200){
        setfdata(fdata.data);
        if(fdata.data){
          localStorage.setItem('Id',JSON.stringify(fdata.data._id));
          navigate("/set_password");
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
            <h1 className='text-center mb-5 fw-8'>Lost Password</h1>
            <p className='text-center text-danger fw-8'>{err}</p>        
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <label className="mb-2">Email Address</label>
                <input type="email" name="email" id="email" onChange={(e)=> setemail({[e.target.name] : e.target.value})} className="form-control py-2 px-3" placeholder='Email Address' />                            
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Genrate Otp" />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 d-flex flex-wrap align-items-center justify-content-between">
                <Link to="/register" className="text-dark">Sign Up</Link>
                <Link to="/login" className="text-dark">Sign In</Link>
            </div>
        </form>
    </>
  )
}

export default LostPass;