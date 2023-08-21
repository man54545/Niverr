import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from '../Api';
import { Link } from 'react-router-dom';

const Order = () => {

    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [data,setdata] = useState([]);

    const fetchdata = async ()=>{
        const data = await axios.get(BACKEND_URL+'order/view_buyer_order/'+loginData._id);
        setdata(data.data);
    }

    const removeOrder = async (id)=>{
        await axios.delete(BACKEND_URL+'order/delete_order/'+id);
        fetchdata();
    }

    useEffect(()=>{
        fetchdata();
    },[]);
    
  return (
    <>
        <Header />
        <section className="gigs py-5 mt-5">
            <div className="container">
                <h2 className="mb-0 fw-8">Orders</h2>
                <table className="w-100 table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        {data.map((v)=>{
                            return (
                                <tr key={v._id}>
                                    <td><img src={BACKEND_URL+v.gigId.images[0]} width="50px" alt="gigs_img" /></td>
                                    <td><Link to={"/detail?id="+v.gigId._id}>{v.gigId.title}</Link></td>
                                    <td>$ {v.gigId.price}</td>
                                    <td>$ {v.payment}</td>
                                    <td>{new Date(v.createdAt).getDate()} {new Date(v.createdAt).toLocaleString('default', { month: 'long' })} {new Date(v.createdAt).getFullYear()}</td>
                                    <td><Link onClick={(e)=> {e.preventDefault(); removeOrder(v._id)}} ><i className="bi bi-trash text-danger"></i></Link> || <Link to={"/chat?id="+v.sellerId}><i className="bi bi-chat-dots"></i></Link>
                                    </td>
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

export default Order;
