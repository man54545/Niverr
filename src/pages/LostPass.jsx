import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LostPass = () => {

    const navigate = useNavigate();

  const [email,setemail] = useState();
  const [fdata,setfdata] = useState({});

  const formSubmit = async (e)=>{
    e.preventDefault();
    let fdata = await axios.post('http://localhost:8084/user/view_email',email);
    setfdata(fdata.data);
    if(fdata.data){
      localStorage.setItem('Id',JSON.stringify(fdata.data._id));
      navigate("/set_password");
    }
  }

  return (
    <>
        <NavLink to="/" className="text-dark position-absolute" style={{top :"20px", right :"30px"}}>Back to Home</NavLink>
        <form method='post' className='mx-auto row align-items-center flex-column justify-content-center vh-100 w-100 mx-auto'>
            <h1 className='text-center mb-5 fw-8'>Lost Password</h1>        
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <label className="mb-2">Email Address</label>
                <input type="email" name="email" id="email" onChange={(e)=> setemail({[e.target.name] : e.target.value})} className="form-control py-2 px-3" placeholder='Email Address' />                            
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 mb-4">
                <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Genrate Otp" />
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12 d-flex flex-wrap align-items-center justify-content-between">
                <NavLink to="/register" className="text-dark">Sign Up</NavLink>
                <NavLink to="/login" className="text-dark">Sign In</NavLink>
            </div>
        </form>
    </>
  )
}

export default LostPass;