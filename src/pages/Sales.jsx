import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from "../Api";
import io from "socket.io-client";

const Sales = () => {

    const socket = io.connect(BACKEND_URL);
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    const [data,setdata] = useState([]);
    const [gdata,setgdata] = useState([]);

    const fetchdata = async () =>{
        let fdata = await axios.get(BACKEND_URL+'gig/view_gig/'+id);
        if(fdata.status === 200){
            setgdata(fdata.data);
        }
        else{
            setdata([]);
        }
    }

    const fetchdata2 = async () =>{
        let fdata = await axios.get(BACKEND_URL+'order/view_gig_order/'+id);
        if(fdata.status === 200){
            setdata(fdata.data);
        }
        else{
            setdata([]);
        }
    }

    useEffect(()=>{
        fetchdata();
        fetchdata2();
    },[]);

    socket.on('loadNewOrder', (data)=>{
        setdata(data.data);
    });

  return (
    <>
        <Header />
        <section className="gigs py-5 mt-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h2 className="mb-0 fw-8">{gdata.title}</h2>
                    <Link to="/gigs" className="bg-color-2 btn text-white border-0 py-2 px-3">View All Gig</Link>
                </div>
                <table className="w-100 table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v,i)=>{
                            return (
                                <tr key={i}>
                                    <td><img src={BACKEND_URL+v.gigId.images[0]} width="50px" alt="gigs_img" /></td>
                                    <td style={{textTransform:'capitalize'}}>{v.buyerId.username}</td>
                                    <td>{gdata.cat}</td>
                                    <td>$ {v.gigId.price}</td>
                                    <td>$ {v.payment}</td>
                                    <td>{new Date(v.createdAt).getDate()} {new Date(v.createdAt).toLocaleString('default', { month: 'long' })} {new Date(v.createdAt).getFullYear()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Sales;