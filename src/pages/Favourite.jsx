import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import BACKEND_URL from "../Api";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { io } from 'socket.io-client';

const Favourite = () => {

    const socket = io.connect(BACKEND_URL);
    const navigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [data,setdata] = useState([]);

    const fetchdata = async ()=>{
        try {
            let data = await axios.get(BACKEND_URL+'fav/view_fav/'+loginData._id);
            if(data.status === 200){
                setdata(data.data);
            }
            else{
                setdata([]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        fetchdata();
      },[]);

  return (
    <>
        <Header />
        <section className="gigs pt-5 mt-5">
            <div className="container">
                <h2 className="mb-0 fw-8">Favourites</h2>
                <div className='scrollbar' style={{overflowX: 'auto'}}>
                    <table className="w-100 table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tfoot>
                            {data.map((v)=>{
                                return (
                                    <tr key={v._id}>
                                        <td><img src={BACKEND_URL+v.gigId.images[0]} width="50px" alt="gigs_img" /></td>
                                        <td><Link to={"/detail?id="+v.gigId._id} target='_blank'>{v.gigId.title}</Link></td>
                                        <td>{v.gigId.cat}</td>
                                        <td>{v.gigId.starNumber}</td>
                                        <td>$ {v.gigId.price}</td>
                                    </tr>   
                                )
                            })}
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Favourite;