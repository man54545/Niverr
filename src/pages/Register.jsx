import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import BACKEND_URL from "../Api";

const Register = () => {

    const navigate = useNavigate();
    const [data,setdata] = useState({});

    const formEvent = (e) => {
        setdata({...data, [e.target.name]: e.target.value});
    }

    const Seller = (e)=>{
        if(e.target.checked){
            setdata(()=>{
                return {
                    ...data,
                    isSeller : true
                }
            })
        }
        else{
            setdata(()=>{
                return {
                    ...data,
                    isSeller : false
                }
            })
        }
    }

    const formPhoto = (e)=>{
        setdata({...data,img : e.target.files[0]})
    }

    const formSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', data.img);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('username', data.username);
        formData.append('password', data.password);
        formData.append('cpassword', data.cpassword);
        formData.append('country', data.country);
        formData.append('isSeller', data.isSeller);
        formData.append('desc', data.desc);
        let fdata = await axios.post(BACKEND_URL+'auth/register',formData);
        console.log(fdata);
        if(fdata){
            navigate("/login");
        }
        else{
            navigate("/register");
        }
    }

  return (
    <>
        <NavLink to="/" className="text-dark position-absolute" style={{top :"20px", right :"30px"}}>Back to Home</NavLink>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
            <form className="row w-100 mx-auto" method='post' onSubmit={formSubmit} encType='multipart/form-data'>
            <h1 className='text-center mb-5 fw-8 mt-sm-0 mt-5 pt-sm-0 pt-5'>Register Page</h1>
                <div className="col-sm-6">
                    <div className="mb-4">
                        <label className="mb-2">Username</label>
                        <input type="text" name="username" id="username" onChange={formEvent} className="form-control py-2 px-3" placeholder='Username' />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2">Email Address</label>
                        <input type="email" name="email" id="email" onChange={formEvent} className="form-control py-2 px-3" placeholder='Email Address' />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2">Password</label>
                        <input type="password" name="password" id="password" onChange={formEvent} className="form-control py-2 px-3" placeholder='Password' />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2">Confirm Password</label>
                        <input type="password" name="cpassword" id="cpassword" onChange={formEvent} className="form-control py-2 px-3" placeholder='Confirm Password' />
                    </div>
                    <div className="mb-4">
                        <label className='mb-2'>Choose Avatar</label>
                        <input type="file" name="img" id="img" className='form-control' onChange={formPhoto}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-4">
                        <label className="mb-2">Country</label>
                        <input type="text" name="country" id="country" onChange={formEvent} className="form-control py-2 px-3" placeholder='Country' />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2">Description</label>
                        <textarea name="desc" id="desc" className='form-control' onChange={formEvent} placeholder='About your self' style={{height : "235px"}}></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="mb-2">Phone</label>
                        <input type="number" name="phone" id="phone" onChange={formEvent} className="form-control py-2 px-3" placeholder='Phone No.' />
                    </div>
                </div>
                <div className="mb-4">
                    <input type="checkbox" name="isSeller" id="isSeller" onChange={Seller}/>
                    <label className='ps-2'>Become a Seller</label>
                </div>
                <div className="mb-4">
                    <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Register" />
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <NavLink to="/login" className="text-dark">Sign In</NavLink>
                    <NavLink to="/lost_password" className="text-dark">Lost Password</NavLink>
                </div>
            </form>
            </div>
        </div>

    </>
  )
}

export default Register;