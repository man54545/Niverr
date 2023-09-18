import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from '../Api';
import Heart from 'react-heart';

const Search = () => {

    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [fav, setFav] = useState([]);
    const [data,setdata] = useState([]);
    const location = useLocation();
    const search = location.state.data;

    const fetchdata = async () =>{
        let data = await axios.get(BACKEND_URL+'gig/search_gig/'+search);
        setdata(data.data);
    }

    const Fav = async (e,id)=>{
        let sdata = {
            gigId : id,
            userId : loginData._id
        }
        if(!fav.includes(id)){
            setFav((v)=>{
                return [
                    ...v,
                    id
                ]
            });
            let data = await axios.post(BACKEND_URL+"fav/add_fav", sdata);
            if(data.status === 200){
                console.log("done");
            }
            else{
                console.log('error');
            }
        }
        else{
            setFav(fav.filter(v => v !== id));
            let data = await axios.post(BACKEND_URL+"fav/delete_fav", sdata);
            if(data.status === 200){
                console.log("done");
            }
            else{
                console.log('error');
            }
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(search){
            fetchdata();
        }
        else{
            Navigate('/');
        }
    },[search]);

  return (
    <>
        <Header />
        <div className="container">
            <div className="row align-items-md-start align-items-center justify-content-center pt-5 mt-5">
            <h1 className='fw-8 mb-5'>Result for "{search}"</h1>
            {data.length === 0 ? <h2 className='fw-8 ps-5'>No Result Found</h2> : data.map((data,i)=>{
            return (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-9 px-lg-2 px-1" key={data._id}>
                    <div className="alltypes-inner mb-5 b-1">
                        <Link to={"/detail?id="+data._id} state={{id :data._id}}><img src={BACKEND_URL+data.images[0]} alt="project_img" style={{width: '100%', height: '220px',objectFit:'cover'}} className="img-fluid" /></Link>
                        <div className="alltypes-content p-3">
                            <h5 className="text-dark fw-8 mb-3" style={{textTransform:'capitalize'}}>{data.title}</h5>
                            <div className="alltypes-content d-flex align-items-center justify-content-between">
                                <div className='col-10'>
                                    <img src={data.userId.img ? BACKEND_URL+data.userId.img : "./assets/img/noavatar.png"} className='br-50' width="40px" height='40px' alt="profile_img" style={{objectFit:'cover'}}/>
                                    <span className="mb-0 ps-3 fw-8" style={{textTransform:'capitalize'}}>{data.userId.username}</span>
                                </div>
                                <p className="text-warning mb-0"><i className="bi bi-star-fill"></i> {data.starNumber}</p>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="p-3 d-flex flex-wrap align-items-center justify-content-between">
                            <Heart isActive={fav.includes(data._id)} onClick={(e) => Fav(e,data._id)} animationScale = {1.25} style={{width:"1.5rem"}} />
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