// import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    const [data,setdata] = useState({});


  return (
    <>
        <section className="banner bg-color position-relative overflow-hidden">
          <div className="container">
              <div className="pt-5 mt-5 pt-lg-0 mt-lg-0 row align-items-center justify-content-center text-center text-lg-start vh-80">
                  <div className="col-lg-7">
                      <h1 className="text-white fw-8 display-4 mb-sm-5 mb-4">Find the perfect <span className="fw-1 style">freelance</span> services for your business</h1>
                      <form action="" className="mb-sm-4 d-flex flex-wrap mx-auto align-items-center justify-content-center">
                          <input type="text" onChange={(e)=> setdata(e.target.value)} className="form-control mb-sm-0 mb-3 p-3 w-80" placeholder="Try building mobile app" />
                          <NavLink to="/search" state={{data : data}}><input type="submit" name="submit" id="submit" className=" mb-sm-0 mb-3 btn text-white bg-color-2 py-3 px-5" value="Search" /></NavLink>
                      </form>
                      <h5 className="text-white mt-2 d-lg-flex align-items-center">Popular : 
                          {/* <NavLink to="/all_types" state={{data : 'Book Cover'}} className="text-white px-3 ms-3 btn border-white br-3">Web Design</NavLink> */}
                          <div className='pt-lg-0 pt-3 ps-lg-3'>
                            <NavLink to='/all_types?type=Wordpress'><span className="text-white px-3 btn ms-sm-3 ms-0 border-white br-3">Wordpress</span></NavLink>
                            <NavLink to='/all_types?type=Logo Design'><span className="text-white px-3 btn ms-sm-3 ms-0 border-white br-3">Logo Design</span></NavLink>
                            <NavLink to='/all_types?type=AI Artist'><span className="text-white px-3 btn ms-sm-3 ms-0 border-white br-3">AI Services</span></NavLink>
                          </div>
                      </h5>
                  </div>
                  <div className="col-lg-5">
                      {/* <img src="./img/portrait-joyful-young-man-white-shirt-removebg-preview.png" alt="banner_img" height="500px" style={{marginTop: '103px'}} /> */}
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Banner;