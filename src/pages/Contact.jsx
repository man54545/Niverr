import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import BACKEND_URL from '../Api';
import axios from 'axios';

const Contact = () => {

  const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setpass] = useState("");
  const [err,seterr] = useState("");
  const [data,setdata] = useState([]);

  const formEvent = (e) => {
    setdata((v)=> {
      return {
        ...v,
        [e.target.name] : e.target.value
      }
    })
  }

  const formSubmit = async (e)=>{
    if(!data.first_name){
      e.preventDefault();
      seterr('first name required.');
      document.getElementById('first_name').focus();
    }
    else if(!data.last_name){
      e.preventDefault();
      seterr('last name required.');
      document.getElementById('last_name').focus();
    }
    else if(!data.company_name){
      e.preventDefault();
      seterr('company name required.');
      document.getElementById('company_name').focus();
    }
    else if(!data.company_website){
      e.preventDefault();
      seterr('company website required.');
      document.getElementById('company_website').focus();
    }
    else if(!data.email){
      e.preventDefault();
      seterr('email required.');
      document.getElementById('email').focus();
    }
    else if(!data.title){
      e.preventDefault();
      seterr('title required.');
      document.getElementById('title').focus();
    }
    else if(!data.desc){
      e.preventDefault();
      seterr('description required.');
      document.getElementById('desc').focus();
    }
    else{
      e.preventDefault(); 
      let fdata = await axios.post(BACKEND_URL+'contact/add_contact',data);
      if(fdata.status === 200){
        navigate('/');
      }
      else{
        seterr(fdata.data.msg);
        e.preventDefault();
      }
    }
  }

  useEffect(() => {
      window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Header />
      <section className='contact pt-5 mt-5'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
            <h3 className='display-5' style={{fontWeight:800}}>All your talent needs in one place</h3>
            <p className='mb-4'>From discovering and managing top freelance talent to collaborating with your team, let’s find the right solution for your business.</p>
            <p className='text-center text-danger fw-8'>{err}</p>
            <form className="row" method='post' onSubmit={formSubmit}>
              <div className="col-md-6">
                  <div className="gig-inner">
                      <div className="mb-4">
                          <label className="mb-3">First Name</label>
                          <input type="text" name="first_name" id="first_name" onChange={formEvent} placeholder="First Name" className="form-control py-2 px-3"/>
                      </div>
                      <div className="mb-4">
                          <label className="mb-3">Company name</label>
                          <input type="text" name="company_name" id="company_name" className="form-control py-2 px-3" onChange={formEvent} placeholder="Company Name"/>
                      </div>
                      <div className="mb-4">
                          <label className="mb-3">Email</label>
                          <input type="text" name="email" id="email" className="form-control py-2 px-3" onChange={formEvent} placeholder='Email'/>
                      </div>  
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="mb-4">
                      <label className="mb-3">Last Name</label>
                      <input type="text" name="last_name" id="last_name" onChange={formEvent} placeholder='Last Name' className="form-control py-2 px-3" />
                  </div>
                  <div className="mb-4">
                      <label className="mb-3">Company website</label>
                      <input type="text" name="company_website" id="company_website" className="form-control py-2 px-3" onChange={formEvent} placeholder="Company Website"/>
                  </div>
                  <div className="mb-4">
                      <label className="mb-3">Title</label>
                      <input type="text" name="title" id="title" onChange={formEvent} placeholder="Title" className="form-control py-2 px-3"/>
                  </div>
              </div>
              <div className='mb-4'>
                  <label className="mb-3">How can we help you?</label>
                  <textarea name="desc" id="desc" className="form-control" onChange={formEvent} placeholder="Description to introduce your services to customers" style={{height: "160px"}}></textarea>
              </div>
              <input type="submit" name="submit" id="submit" className="btn text-white bg-color-2 w-100 py-2 px-3" value="Submit" />
            </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact;