import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sliders from "react-slick";
import axios from 'axios';
import BACKEND_URL from "../Api";
import { useNavigate } from 'react-router-dom';
import io from "socket.io-client";

const Detail = () => {

    const Navigate = useNavigate();
    const socket = io.connect(BACKEND_URL);
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    const [data,setdata] = useState({});
    const [user,setuser] = useState([]);
    const [feacher,setfeacher] = useState([]);
    const [images,setImages] = useState([]);
    const [review,setreview] = useState('');
    const [rating,setrating] = useState('');
    const [allreview,setallreview] = useState([]);
    const date = data.createdAt;
    const today = new Date(date);
    const month = today.toLocaleString('default', { month: 'long' });

    const fetchdata = async()=>{
        let data = await axios.get(BACKEND_URL+'gig/view_gig/'+id);
        console.log(data);
        if(data.status === 200){
            setdata(data.data);
            setuser(data.data.userId);
            setfeacher(data.data.feachers);
            setImages(data.data.images);
        }
        else{
            Navigate('/');
        }
    }

    const fetchdata2 = async () =>{
        let data = await axios.get(BACKEND_URL+'review/view_gig_review/'+id);
        setallreview(data.data);
    } 

    const Rating = (e)=>{
        setrating(e.target.value);
    }

    // const addOrder = async (e) =>{
    //     let ffdata = {
    //         gigId : id,
    //         sellerId : data.userId,
    //         buyerId : loginData._id,
    //         img : data.images[0],
    //         title : data.title,
    //         price : data.price,
    //         payment : data.price,
    //     }
    //     let adata = await axios.post(BACKEND_URL+'order/add_order',ffdata);
    //     if(adata.status === 200){
    //         socket.emit('fetchNewGig', {userId : data.userId});
    //         socket.emit('fetchNewOrder', {gigId : id});
    //     }
    //     else{
    //         e.preventDefault();
    //     }
    //   }

    const FinalPay = async (e) =>{
        try {
            if(loginData){
                let adata = await axios.post(BACKEND_URL+'pay',data);
                if(adata.status === 200){
                    // addOrder();
                    window.location = adata.data.url;
                }
                else{
                    e.preventDefault();
                    alert("Something Wrong.");
                    return false;
                }
            }
            else{
                Navigate("/login");
            }
        } catch (error) {
            alert("Something Wrong.");
            console.log(error);
        }
    }

    const formSubmit = async (e) =>{
        e.preventDefault();
        let record = {
            gigId : id,
            userId : loginData._id,
            star : rating,
            desc : review,
        }
        let fdata = await axios.post(BACKEND_URL+'review/add_review', record);
        if(fdata.status === 200){
            socket.emit('fetchNewGig', {userId : data.userId});
            fetchdata2();
            document.getElementById('review').value = '';
        }
        else{
            alert("something wrong.");
        }
    }

    const Contact = ()=>{
        let con = document.getElementById('conact-detail');
        con.classList.add('d-flex');
    }

    const ContactOut = ()=>{
        let con = document.getElementById('conact-detail');
        con.classList.remove('d-flex');
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(id){
            fetchdata();
            fetchdata2();
        }
        else{
            Navigate('/');
        }
    },[]);

    const settings = {
        dots: false,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    return (  
        <>
            <Header />
            <section className="type_detail pt-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className="text-secondary">Fiverr - {data.cat} -</p>
                            <h2 className="fw-8 mb-3">{data.shortTitle}</h2>
                            <div className="typedetail-content d-flex flex-wrap align-items-center mb-2">
                                <img src={user.img ? BACKEND_URL+user.img :"/assets/img/noavatar.png"} className="br-50" style={{width: '5%',height:'5%',objectFit:'cover'}} alt="projects_owner" />
                                <h6 className="mb-0 px-3 fw-8" style={{textTransform: 'capitalize'}}>{user.username}</h6>
                                <p className="text-warning mb-0">
                                     {Array(data.starNumber).fill().map((v,i)=>{
                                        return (
                                                <i className="bi bi-star-fill" key={i}></i>
                                        )
                                    })} {data.starNumber}
                                </p>
                            </div>
                            <Sliders {...settings}>
                                {images.map((v,i)=>{
                                    return (
                                        <div className="thumb px-3" key={i}>
                                            <img src={BACKEND_URL+v} alt="img" className="mx-auto" style={{width:'100%'}} />
                                        </div>
                                    )
                                })}
                            </Sliders>    
                            <h3 className="py-4 fw-8 mb-0">About This Gig</h3>                            
                            <p className="text-secondary mb-5">{data.desc}</p>
                            <h3 className="py-4 fw-8 mb-0">About The Seller</h3>                            
                            <div className="typedetail-content d-flex flex-wrap align-items-center mb-5">
                                <img src={user.img ? BACKEND_URL+user.img : "/assets/img/noavatar.png"} className="br-50" style={{width: '150px', height:'150px', objectFit:'cover'}} alt="projects_owner" />
                                <div className="ps-5">
                                    <h6 className="fw-8 mb-3" style={{textTransform: 'capitalize'}}>{user.username}</h6>
                                    {user.rating ?
                                        <p className="mb-3 fw-8">
                                            <i className="text-warning bi bi-star-fill pe-2"></i>{user.rating}
                                        </p>
                                    : ''}
                                    <div className='position-relative'>
                                        <button className="px-4 py-2 border-dark bg-white btn">Contact Me</button>
                                        {/* <button className="px-4 py-2 border-dark bg-white btn" onMouseOver={Contact} onMouseOut={ContactOut}>Contact Me</button> */}
                                        {/* <div className='p-3 ms-3 bg-color-2 text-white conact-detail position-absolute' id='conact-detail' style={{borderRadius:'10px'}}>
                                            <p className='mb-0'>Phone No :- {user.phone}</p>
                                            <p className='mb-0'>Email :- {user.email}</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="b-1 p-4 br-1 m-sm-0 m-1 row justify-content-between">
                                <div className="col-6 mb-3">
                                    <p className="lead mb-0 text-secondary">From</p>
                                    <p className="lead mb-0 fw-8">{user.country}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="lead mb-0 text-secondary">Member since</p>
                                    <p className="lead mb-0 fw-8">{month} {new Date(date).getFullYear()}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="lead mb-0 text-secondary">Languages</p>
                                    <p className="lead mb-0 fw-8">English</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <p className="lead mb-0 text-secondary">Last delivery</p>
                                    <p className="lead mb-0 fw-8">{data.deliveryTime} day</p>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <p className="lead mb-0 text-secondary">Avg. response time</p>
                                    <p className="lead mb-0 fw-8">4 hours</p>
                                </div>
                                <hr />
                                <p className="mb-0">{user.desc}</p>
                            </div>
                            {allreview.length > 0 ? <h3 className="py-4 fw-8 mb-0">Reviews</h3> : ''}
                            {allreview.map((v,i)=>{
                                return (
                                    <div className="reviews mb-5" key={i}>
                                        <div className="review-content d-flex flex-wrap align-items-center mb-2">
                                            <img src={v.userId.img ? BACKEND_URL+v.userId.img : "/assets/img/noavatar.png"} className="br-50" style={{width: '10%',height:'10%',objectFit:'cover'}} alt="review_img" />
                                            <div className="ps-4">
                                                <h6 className="mb-0 fw-8" style={{textTransform : "capitalize"}}>{v.userId.username}</h6>
                                                <p className="text-secondary mb-0"><i className="bi bi-geo-alt pe-1"></i> {v.userId.country}</p>
                                            </div>
                                            <div className='ms-auto'>
                                                <p className='mb-0'>{new Date(v.createdAt).getDate()} {new Date(v.createdAt).toLocaleString('default', { month: 'long' })} {new Date(v.createdAt).getFullYear()}</p>
                                            </div>
                                        </div>
                                        <p className="text-warning mb-3">
                                            {Array(v.star).fill().map((v,i)=>{
                                                return (
                                                    <i className="bi bi-star-fill" key={i}></i>
                                                )
                                            })} {v.star}
                                        </p>
                                        <p className="mb-3 text-secondary">{v.desc}</p>
                                        <h5 className="mb-0 fw-8">Helpful <i className="bi bi-hand-thumbs-up ps-3"></i> Yes <i className="bi bi-hand-thumbs-down ps-2"></i> No</h5>
                                    </div>
                                )
                            })}
                            {loginData ?
                                <>
                                    <div className='pt-5'>
                                        <h3 className='fw-8 mb-3'>Add Comments</h3>
                                        <form className='text-end' method='post' onSubmit={formSubmit}>
                                            <div className="star-rating mb-4">
                                                <input type="radio" id="5-stars" name="star" value="5" className='d-none' onChange={Rating} />
                                                <label htmlFor="5-stars" className="star"><i className='fa fa-star'></i></label>
                                                <input type="radio" id="4-stars" name="star" value="4" className='d-none' onChange={Rating} />
                                                <label htmlFor="4-stars" className="star"><i className='fa fa-star'></i></label>
                                                <input type="radio" id="3-stars" name="star" value="3" className='d-none' onChange={Rating} />
                                                <label htmlFor="3-stars" className="star"><i className='fa fa-star'></i></label>
                                                <input type="radio" id="2-stars" name="star" value="2" className='d-none' onChange={Rating} />
                                                <label htmlFor="2-stars" className="star"><i className='fa fa-star'></i></label>
                                                <input type="radio" id="1-star" name="star" value="1" className='d-none' onChange={Rating} />
                                                <label htmlFor="1-star" className="star"><i className='fa fa-star'></i></label>
                                            </div>
                                            <textarea name="review" id="review" rows="5" className='form-control mb-4' onChange={(e)=> setreview(e.target.value)} placeholder='Add Review or Comments'></textarea>    
                                            <input type="submit" name="submit" id="submit" className='btn bg-color-2 text-white px-4 border-0 br-0 py-2' />
                                        </form>                                            
                                    </div>
                                </>
                            : ''}
                        </div>
                        <div className="col-lg-5">
                            <div className="detail-box b-1 br-1 p-4 mt-5 mt-lg-0 position-sticky" style={{top: '150px'}}>
                                <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                    <h5 className="fw-8 mb-0">{data.shortTitle}</h5>
                                    <h3 className="mb-0">$ {data.price}</h3>
                                </div>
                                <p className="mb-3 text-secondary">{data.shortDesc}</p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                    <h6 className="fw-8 mb-0"><i className="bi bi-clock pe-2"></i> {data.deliveryTime} Days Delivery</h6>
                                    <h6 className="fw-8 mb-0"><i className="bi bi-refresh pe-2"></i> {data.revisionNumber} Revisions</h6>
                                </div>
                                <ul className="mb-3 ps-0">
                                    {feacher ? feacher.map((a,i)=>{
                                        return (
                                            <li className="d-flex flex-wrap align-items-center" key={i}>
                                                <i className="bi bi-check fs-4 color-2"></i>
                                                <p className="text-secondary ps-2 mb-0">{a}</p>
                                            </li>
                                        )
                                    }): ''}
                                </ul>
                                <span onClick={FinalPay} className="btn bg-color-2 text-white w-100 border-0 br-0 py-2">Continue</span>
                                {/* <Link to={loginData ? "/payment?id="+id : '/login'} className="btn bg-color-2 text-white w-100 border-0 br-0 py-2">Continue</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <Footer />
        </>
    )
}

export default Detail;

// sum/total