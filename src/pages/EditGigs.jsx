import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BACKEND_URL from '../Api';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EditGigs = () => {

    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    const navigate = useNavigate();
    const [img,setimg] = useState([]);
    const [data,setdata] = useState({
        title : '',
        desc : '',
        shortTitle : '',
        shortDesc : '',
        price : '',
        deliveryTime : '',
        cat : '',
        revisionNumber : '',
        feachers : []
    });

    const formEvent = (e,i)=>{
        setdata({
            ...data,
            [e.target.name] : e.target.value
        });
    }
    
    const formPhoto = (e)=>{
        setimg(e.target.files);
    }
    
    const formSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('desc', data.desc);
        formData.append('shortTitle', data.shortTitle);
        formData.append('shortDesc', data.shortDesc);
        formData.append('price', data.price);
        formData.append('deliveryTime', data.deliveryTime);
        formData.append('cat', data.cat);
        formData.append('revisionNumber', data.revisionNumber);
        for(let i = 0; i < img.length; i++){
            formData.append('images', img[i])
        }
        let adata = await axios.put(BACKEND_URL+'gig/update_gig/'+data._id,formData);
        if(adata.status === 200){
            navigate("/gigs");
        }
        else{
            navigate("/add_gigs");
        }
    }

    const fetchdata = async()=>{
        let data = await axios.get(BACKEND_URL+'gig/view_gig/'+id);
        setdata(data.data);
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        fetchdata();
    },[])

    return (
        <>
            <Header />
            <section className="add_gig pt-5 mt-5">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h2 className="mb-0 fw-8">Edit Gig</h2>
                        <Link to="/gigs" className="bg-color-2 btn text-white border-0 py-2 px-3">View Gigs</Link>
                    </div>
                    <form className="row" onSubmit={formSubmit} encType='multipart/form-data'>
                        <div className="col-md-6">
                            <div className="gig-inner">
                                <div className="mb-4">
                                    <label className="mb-3">Title</label>
                                    <input type="text" name="title" id="title" placeholder="Title" className="form-control py-2 px-3" onChange={formEvent} value={data.title}/>
                                </div>
                                <div className="mb-4">
                                    <label className="mb-3">Category</label>
                                    <select name="cat" id="cat" className="py-2 px-3 input-border w-100 form-control" onChange={formEvent} value={data.cat} >
                                        <option value=" ">-- Select Category --</option>
                                        <option value="Book Cover">Book Covers</option>
                                        <option value="AI Artist">AI Artists</option>
                                        <option value="Logo Design">Logo Design</option>
                                        <option value="Wordpress">Wordpress</option>
                                        <option value="Voice Over">Voice over</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="mb-3">Upload Images</label>
                                    <input type="file" name="images" id="images" multiple className="form-control py-2 px-3" onChange={formPhoto}/>
                                </div>
                                <div className="mb-4">
                                    <label className="mb-3">Price</label>
                                    <input type="number" name="price" id="price" className="form-control py-2 px-3" min="1" max="999" placeholder='$ 100' onChange={formEvent} value={data.price}/>
                                </div>  
                                <div>
                                    <label className="mb-3">Description</label>
                                    <textarea name="desc" id="desc" className="form-control" placeholder="Description to introduce your services to customers" style={{height: "160px"}} onChange={formEvent} value={data.desc}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="mb-3">Short Title</label>
                                <input type="text" name="shortTitle" id="shortTitle" className="form-control py-2 px-3" placeholder="e.g. One page web application" onChange={formEvent} value={data.shortTitle}/>
                            </div>
                            <div className="mb-4">
                                <label className="mb-3">Short Description</label>
                                <input type="text" name="shortDesc" id="shortDesc" className="form-control py-2 px-3" placeholder="Short description of your services" onChange={formEvent} value={data.shortDesc}/>
                            </div>
                            <div className="mb-4">
                                <label className="mb-3">Delivery Time</label>
                                <input type="number" name="deliveryTime" id="deliveryTime" className="form-control py-2 px-3" placeholder="e.g. 3 days" onChange={formEvent} value={data.deliveryTime}/>
                            </div>
                            <div className="mb-4">
                                <label className="mb-3">Revision Number</label>
                                <input type="number" name="revisionNumber" id="revisionNumber" className="form-control py-2 px-3" placeholder='e.g. 3' onChange={formEvent} value={data.revisionNumber}/>
                            </div>
                            <div className="mb-4">
                                <label className="mb-3">Add Features</label>
                                {data.feachers.map((v)=>{
                                    return (
                                        <>
                                            <input type="text" name="features" id="features" className="form-control py-2 px-3 mb-3" placeholder="e.g. page design" value={v}/>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <input type="submit" name="submit" id="submit" className="btn text-white bg-color-2 w-100 py-2 px-3" value="Create" />
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default EditGigs;