import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from "../Api";
import Heart from 'react-heart';

const AllTypes = () => {

    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const url = new URLSearchParams(window.location.search);
    const cat = url.get('type');
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [form, setform] = useState([]);
    const [fav, setFav] = useState([]);
    
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

    const Fav = async (e,id)=>{
        if(loginData){
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
        else{
            navigate('/login');
        }
    }

    const fetchdata2 = async () =>{
        if(loginData){
            let data = await axios.get(BACKEND_URL+"fav/view_fav/"+loginData._id);
            if(data.status === 200){
                data.data.map((v)=>{
                    setFav((i)=>{
                        return [
                            ...i,
                            v.gigId._id
                        ]
                    })
                });
            }
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        fetchdata();
        fetchdata2();
        if(!cat){
            navigate('/');
        }
    },[]);

  return (
    <>
    <Header />
    <section className="all_types pt-5 mt-5">
        <div className="container">
            <p className="text-secondary">Niverr - {cat} -</p>
            <h2 className="fw-8">{cat}</h2>
            <p className="text-secondary">Explore the boundries of art and technology with fiverr {cat}.</p>
            {data.length !== 0 ? 
                <div className="text-center d-md-flex flex-wrap align-items-center justify-content-between w-100">
                    <form className="d-flex align-items-center flex-wrap col-lg-6 col-md-8 mb-4 mb-md-0">
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
            : ''}
            <div className="row align-items-md-start align-items-center justify-content-center pt-5">
                {data.length === 0 ? <h2 className='fw-8 ps-5'>No Result Found</h2> : data.map((data)=>{
                    return (
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-9 px-lg-2 px-1" key={data._id}>
                            <div className="alltypes-inner mb-5 b-1">
                                <Link to={"/detail?id="+data._id} state={{id :data._id}}>
                                <img src={BACKEND_URL+data.images[0]} alt="project_img" style={{width: '100%', height: '220px',objectFit:'cover'}} className="img-fluid" />
                                <div className="alltypes-content p-3">
                                    <h5 className="text-dark fw-8 mb-3" style={{textTransform:'capitalize'}}>{data.title}</h5>
                                    <div className="alltypes-content d-flex align-items-center justify-content-between">
                                        <div className='col-10'>
                                            <img src={data.userId.img ? BACKEND_URL+data.userId.img : "./assets/img/noavatar.png"} className='br-50' width="40px" height='40px' alt="profile_img" style={{objectFit:'cover'}}/>
                                            <span className="mb-0 ps-3 fw-8 text-dark" style={{textTransform:'capitalize'}}>{data.userId.username}</span>
                                        </div>
                                        <p className="text-warning mb-0"><i className="bi bi-star-fill"></i> {data.starNumber}</p>
                                    </div>
                                </div>
                                </Link>
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
    </section>
    <Footer />
    </>
  )
}

export default AllTypes;