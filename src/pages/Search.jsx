import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from '../Api';

const Search = () => {

    const [data,setdata] = useState([]);
    const location = useLocation();
    const search = location.state.data;

    const fetchdata = async () =>{
        let data = await axios.get(BACKEND_URL+'gig/search_gig/'+search);
        setdata(data.data);
    }

    useEffect(()=>{
        fetchdata();
    },[]);

  return (
    <>
        <Header />
        <div className="container">
            <div className="row pt-5 mt-5">
            <h1 className='fw-8 mb-5'>Result for "{search}"</h1>
            {data.length === 0 ? <h2 className='fw-8 ps-5'>No Result Found</h2> : data.map((data,i)=>{
            return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={data._id}>
                    <div className="alltypes-inner mb-5 b-1">
                        <NavLink to={"/detail?id="+data._id} state={{id :data._id}}><img src={BACKEND_URL+data.images[0]} alt="project_img" style={{height: '220px',objectFit:'cover'}} className="img-fluid" /></NavLink>
                        <div className="alltypes-content p-3">
                            <h5 className="text-dark fw-8 mb-3" style={{textTransform:'capitalize'}}>{data.title}</h5>
                            <div className="alltypes-content d-flex align-items-center justify-content-between">
                                <div className='col-6'>
                                    <img src={data.userId.img ? BACKEND_URL+data.userId.img : "./assets/img/noavatar.png"} className='br-50' width="40px" height='40px' alt="profile_img" style={{objectFit:'cover'}}/>
                                    <span className="mb-0 ps-3 fw-8" style={{textTransform:'capitalize'}}>{data.userId.username}</span>
                                </div>
                                <p className="text-warning mb-0"><i className="bi bi-star-fill"></i> {data.starNumber}</p>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="p-3 d-flex flex-wrap align-items-center justify-content-between">
                            <i className="bi bi-heart"></i>
                            <div>
                                <p className="mb-0 text-secondary">Starting at</p>
                                <h5 className="text-end mb-0">$ {data.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Search;