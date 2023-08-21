import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import io from "socket.io-client";
import BACKEND_URL from "../Api";

const Gigs = () => {

    const socket = io.connect(BACKEND_URL);
    const navigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [data,setdata] = useState([]);

    const removeGig = async (id) =>{
        await axios.delete(BACKEND_URL+'gig/delete_gig/'+id);
        fetchdata();
        navigate("/gigs");
    }

    const fetchdata = async ()=>{
        try {
            await socket.on('loadGig', (fdata)=>{
                setdata(fdata.data);
            });
        } catch (error) {
            console.log(error);
        }
    }

    fetchdata();
    
    useEffect(()=>{
        socket.emit('fetchGig', {userId : loginData._id});
    },[]);

    socket.on('loadNewGig', (data)=>{
        setdata(data.data);
    });

  return (
    <>
        <Header />
        <section className="gigs py-5 mt-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h2 className="mb-0 fw-8">Gigs</h2>
                    <Link to="/add_gigs" className="bg-color-2 btn text-white border-0 py-2 px-3">Add New Gig</Link>
                </div>
                <table className="w-100 table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Ratings</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        {data.map((v)=>{
                            return (
                                <tr key={v._id}>
                                    <td><img src={BACKEND_URL+v.images[0]} width="50px" alt="gigs_img" /></td>
                                    <td>{v.cat}</td>
                                    <td><Link to={"/detail?id="+v._id}>{v.title}</Link></td>
                                    <td>$ {v.price}</td>
                                    <td>{new Date(v.createdAt).getDate()} {new Date(v.createdAt).toLocaleString('default', { month: 'long' })} {new Date(v.createdAt).getFullYear()}</td>
                                    <td>{v.starNumber}</td>
                                    <td><Link to={"/sales?id="+v._id}>{v.sales}</Link></td>
                                    <td><Link onClick={(e)=> {e.preventDefault(); removeGig(v._id)}} ><i className="bi bi-trash text-danger"></i></Link> || <Link to={'/edit_gigs?id='+v._id}><i className="bi bi-pencil-square text-success"></i></Link></td>
                                </tr>
                            )
                        })}
                    </tfoot>
                </table>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Gigs;