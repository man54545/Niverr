import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BACKEND_URL from "../Api";
import { useEffect } from 'react';

const Register = () => {

    const navigate = useNavigate();
    const [data,setdata] = useState({});
    const [err,seterr] = useState("");

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
        if(!data.username){
            e.preventDefault();
            seterr('username required.');
            document.getElementById('username').focus();
        }
        else if(!data.email){
            e.preventDefault();
            seterr('email required.');
            document.getElementById('email').focus();
        }
        else if(!data.password){
            e.preventDefault();
            seterr('password required.');
            document.getElementById('password').focus();
        }
        else if(data.password !== data.cpassword ){
            e.preventDefault();
            seterr('password not match.');
            document.getElementById('cpassword').focus();
        }
        else if(!data.country){
            e.preventDefault();
            seterr('country required.');
            document.getElementById('country').focus();
        }
        else if(!data.desc){
            e.preventDefault();
            seterr('description required.');
            document.getElementById('desc').focus();
        }
        else if(!data.phone){
            e.preventDefault();
            seterr('phone required.');
            document.getElementById('phone').focus();
        }
        else if(data.phone.length !== 10){
            e.preventDefault();
            seterr('phone length 10 required.');
            document.getElementById('phone').focus();
        }
        else{
            e.preventDefault();
            const formData = new FormData();
            formData.append('img', data.img);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('username', data.username);
            formData.append('password', data.password);
            formData.append('cpassword', data.cpassword);
            formData.append('country', data.country);
            formData.append('isSeller', data.isSeller || false);
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
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

  return (
    <>
        <Link to="/" className="text-dark position-absolute" style={{top :"20px", right :"30px"}}>Back to Home</Link>
        <div className="container">
            <div className="row align-items-center justify-content-center vh-100">
            <form className="row w-100 mx-auto" method='post' onSubmit={formSubmit} encType='multipart/form-data'>
                <h1 className='text-center mb-4 fw-8 mt-sm-0 mt-5 pt-sm-0 pt-5'>Register Page</h1>
                <p className='text-danger text-center'>{err}</p>
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
                    <label className='ps-2' htmlFor='isSeller'>Become a Seller</label>
                </div>
                <div className="mb-4">
                    <input type="submit" name="submit" id="submit" onClick={formSubmit} className="btn bg-color-2 w-100 text-white py-2 px-3" value="Register" />
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <Link to="/login" className="text-dark">Sign In</Link>
                    <Link to="/lost_password" className="text-dark">Lost Password</Link>
                </div>
            </form>
            </div>
        </div>

    </>
  )
}

export default Register;