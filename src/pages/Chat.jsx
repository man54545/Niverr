import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from "../Api";
import io from "socket.io-client";
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {

    const navigate = useNavigate();
    const socket = io.connect(BACKEND_URL);
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [data,setdata] = useState([]);
    const [chat,setchat] = useState([]);
    const [file, setFile] = useState({});
    const [msg,setmsg] = useState('');

    const fetchdata = async ()=>{
        try {
            let data = await axios.get(BACKEND_URL+'user/view_user/'+id);
            setdata(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchdata2 = async ()=>{
       try {
        await socket.emit('view_chat',{sender_id : loginData._id, receiver_id: id});
        await socket.on('load_chat',(data)=>{
            setchat(data.chats);
        });
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(()=>{
        fetchdata();
        fetchdata2();

        const other = document.getElementById('other');
        other.addEventListener('click',()=>{
            document.getElementById('drop').classList.toggle('d-none');
        });

        socket.on('load_chat',(data)=>{
            setchat((v)=>{
                return [
                    ...v,
                    data.chats
                ]
            });
        });

        socket.on('loadNewChat',(data)=>{
            let fdata = data.data;
            setchat((v)=>{
                return [
                    ...v,
                    fdata
                ]
            });
        });

        socket.on('loadNewChatImg',(data)=>{
            let fdata = data.data;
            setchat((v)=>{
                return [
                    ...v,
                    fdata
                ]
            });
        });

    },[]);

    const getMsg = (e)=>{
        setmsg(e.target.value);
    }

    const formSubmit = async (e)=>{
        if(loginData){
            e.preventDefault();
            const msgs = {
                msg : msg,
                senderId : loginData._id ,
                receiverId : id ,
            };
            let data = await axios.post(BACKEND_URL+"chat/add_chat",msgs);
            if(data.status === 200){
                socket.emit('newChat', data.data.data);
            }
            else{
                console.log("Something Wrong");
            }
            document.getElementById('msg').value = '';
        }
        else{
            navigate('/login');
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('img',file);
        formData.append('senderId', loginData._id);
        formData.append('receiverId', id);
        let data = await axios.post(BACKEND_URL+'chat/upload_img', formData);
        if(data.status === 200){
            socket.emit('newChatImg', data.data.data);
        }
    };

    return (
        <>
            <Header />
            <section className="gigs py-5 mt-5">
                <div className="container">
                    <div className="header pb-3" id="header">
                        <div className="d-flex details align-items-center justify-content-between" id="details" style={{cursor:'pointer'}} data-id={data._id}>
                            <div className='d-flex align-items-center w-100'>
                                <img src={data.img ? BACKEND_URL+data.img : '/assets/img/noavatar.png'} style={{width:'50px', borderRadius : '50%', objectFit: 'cover', height:'50px'}} alt='img' />
                                <div className="ps-4">
                                <h4 className="mb-0" style={{textTransform: 'capitalize'}}>{data.username}</h4>
                                <p className="mb-0">Backend Developer</p>
                                </div>
                            </div>
                            <span className="postion-relative text-dark" id='other'><i className="bi bi-three-dots"></i>
                                <div className="position-absolute shadow-lg d-none p-3 bg-white" style={{borderRadius :'10px'}} id='drop'>
                                    <ul className="ps-0 mb-0">
                                        <li className='py-1' key={'copy'}><Link to="/" className='text-dark'>Copy</Link></li>
                                        <li className='py-1' key={'clear'}><Link to="/" className='text-dark'>Clear All Chats</Link></li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='shadow-lg p-5'>
                        <div id="chat-box" className="mb-5" style={{height: '600px', overflowY: 'auto'}}>
                            <ul id="chats" className="mb-0 ps-0 pe-5 h-100">
                                {chat.length > 0 ? chat.map((v,i)=>{
                                    if(v.senderId === loginData._id){
                                        if(v.img){
                                            return (
                                                <li className="mb-3 fs-4 text-end" key={i}>
                                                    <img src={BACKEND_URL+v.img} alt='img' className='text-end ms-auto d-flex' width="200px" />
                                                    <p className="mb-0" style={{fontSize: '12px'}}>{new Date(v.createdAt).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                                                </li>
                                            )
                                        }
                                        else{
                                            return (
                                                <li className="mb-3 fs-4 text-end" key={i}><h4 className="mb-0">{v.msg}</h4><p className="mb-0" style={{fontSize: '12px'}}>{new Date(v.createdAt).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true })}</p></li>
                                            )
                                        }
                                    }
                                    else{
                                        if(v.img){
                                            return (
                                                <li className="mb-3 fs-4" key={i}>
                                                    <img src={BACKEND_URL+v.img} alt='img' width="200px"/>
                                                    <p className="mb-0" style={{fontSize: '12px'}}>{new Date(v.createdAt).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true })}</p> 
                                                </li>
                                            )
                                        }
                                        else{
                                            return (
                                                <li className="mb-3 fs-4" key={i}><h4 className="mb-0">{v.msg}</h4><p className="mb-0" style={{fontSize: '12px'}}>{new Date(v.createdAt).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true })}</p></li>
                                            )
                                        }
                                    }
                                }) : <h3 className='text-center h-100 w-100 d-flex align-items-center justify-content-center'>Start Chating Now...</h3>}
                            </ul>
                        </div>
                        <div className='d-flex'>
                            <form id="form" method='post' onSubmit={formSubmit} style={{width : '80%'}}>
                                <input type="text" name="msg" id="msg" onChange={getMsg} className="col-12 form-control py-2 px-3 fs-5" placeholder="Enter any Texts ........." />
                            </form>
                            <form method='post' encType='multipart/form-data' className='d-flex' style={{width : '20%'}}>
                                <input type="file" id="siofu_input" className='form-control py-2 px-3 fs-5' style={{width : '58.66%'}} onChange={handleFileChange}/>
                                <input type='submit' className="btn btn-primary py-2" onClick={handleFileUpload} style={{width : '42.33%'}} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Chat;