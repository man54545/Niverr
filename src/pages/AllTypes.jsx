import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from "../Api";

const AllTypes = () => {

    const url = new URLSearchParams(window.location.search);
    const cat = url.get('type');

    const [data, setdata] = useState([]);
    const [form, setform] = useState([]);

    const fetchdata = async (type,min,max)=>{
        if(min === ''){
            min = 'undefined';
        }
        if(max === ''){
            max = 'undefined';
        }
        let fdata = await axios.get(`${BACKEND_URL}gig/view_gig_star?type=${type}&cat=${cat}&min=${min}&max=${max}`);
        setdata(fdata.data);
    }

    const formEvent = async (e)=>{
        setform((v)=>{
            return ({...v, [e.target.name] : e.target.value});
        });
    }

    const formSubmit = async (e)=>{
        e.preventDefault();
        let type = '';
        fetchdata(type,form.min,form.max);
    }

    const SortCat = async (e)=>{
        let type = e.target.value;
        fetchdata(type,form.min,form.max);
    }

    const Fav = ()=>{
        const heart = document.querySelectorAll('#heart');
        heart.forEach(e => {
            if(e.getAttribute('class') === 'bi bi-heart'){
                e.addEventListener('click', ()=>{
                    e.classList.remove('bi-heart');
                    e.classList.add('bi-heart-fill');
                    e.classList.add('text-danger');
                });
            }
            else{
                e.addEventListener('click', ()=>{
                    e.classList.remove('bi-heart-fill');
                    e.classList.remove('text-danger');
                    e.classList.add('bi-heart');
                });
            }
        });
    }
    
    useEffect(()=>{
        fetchdata();
    },[]);

  return (
    <>
    <Header />
    <section className="all_types pt-5 mt-5">
        <div className="container">
            
            <p className="text-secondary">Fiverr - {cat} -</p>
            <h2 className="fw-8">{cat}</h2>
            <p className="text-secondary">Explore the boundries of art and technology with fiverr {cat}.</p>
            <div className="text-center d-md-flex flex-wrap align-items-center justify-content-between w-100">
                <form className="d-flex align-items-center flex-wrap col-lg-6 col-md-8 mb-4 mb-md-0 justify-content-center">
                    <label className="pe-3 text-secondary">Budget</label>
                    <input type="number" min="1" max="999" name="min" id="min" onChange={formEvent} className="form-control" placeholder="min" style={{width: '30%'}}/>
                    <input type="number" min="1" max="999" name="max" id="max" onChange={formEvent} className="form-control mx-3" placeholder="max" style={{width: '30%'}}/>
                    <input type="submit" name="submit" onClick={formSubmit} id="submit" value="Apply" className="btn text-white bg-color-2" />
                </form>
                <div className="d-flex col-lg-6 col-md-4 flex-wrap justify-content-md-end justify-content-center align-items-center text-end">
                    <label className="text-secondary pe-3">Sort by</label>
                    <select className="border-0 form-control" style={{width:'120px'}} onChange={SortCat}>
                        <option value=" ">-- Sorted --</option>
                        <option className="fw-8" value="sales">Best Selling</option>
                        <option className="fw-8" value="starNumber">Best Rating</option>
                    </select>
                </div>
            </div>
            <div className="row pt-5">
                {data.length === 0 ? <h2 className='fw-8 ps-5'>No Result Found</h2> : data.map((data)=>{
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
                                    <i className="bi bi-heart" id='heart' onClick={Fav}></i>
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
    </section>
    <Footer />
    </>
  )
}

export default AllTypes;