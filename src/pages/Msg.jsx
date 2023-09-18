import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import io from "socket.io-client";
import BACKEND_URL from '../Api';
import { Link, useNavigate } from 'react-router-dom';

const Msg = () => {

    const socket = io.connect(BACKEND_URL);
    const navigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [user,setuser] = useState([]);
    // const [chat,setchat] = useState([]);

    const fetchdata2 = async ()=>{
        await socket.emit('msg_user',{receiver_id : loginData._id});
        await socket.on('get_user', (data)=>{
            setuser(data.data);
        });
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(loginData){
            if(loginData.isSeller){
                fetchdata2();
            }
            else{
                navigate('/');
            }
        }
        else{
            navigate('/');
        }
    }, []);

  return (
    <>
        <Header />
        <section className="gigs pt-5 mt-5">
            <div className="container">
                <h2 className="mb-0 fw-8">Messages</h2>
                <div className='scrollbar' style={{overflowX: 'auto'}}>
                    <table className="w-100 table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            {user.map((v,i)=>{
                                return (
                                    <tr key={i}>
                                        <td><img src={v.img ? BACKEND_URL+v.img : "/assets/img/noavatar.png"} alt='img' width="50px" height="50px"/></td>
                                        <td>{v.username}</td>
                                        <td>{v.email}</td>
                                        <td>{v.phone}</td>
                                        <td><Link to={"/chat?id="+v._id}><i className="bi bi-chat-dots"></i></Link></td>
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

export default Msg;