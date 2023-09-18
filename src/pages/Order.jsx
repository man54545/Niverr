import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import BACKEND_URL from '../Api';
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {

    const navigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('currentUser'));
    const [data,setdata] = useState([]);
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState('');
    const [limit,setLimit] = useState(5);
    const [next,setNext] = useState(false);
    const [prev,setPrev] = useState(false);
    const [total,setTotal] = useState(0);
    
    const fetchdata = async (page,search,limit)=>{
        let sdata = {
            page : page,
            per_page : limit,
            search : search
        }

        const data = await axios.post(BACKEND_URL+'order/view_buyer_order/'+loginData._id, sdata);

        setdata(data.data.data);
        setTotal(data.data.total);

        if(page === data.data.total){
            setNext(true);
        }
        else{
            setNext(false);
        }
        if(page === 1){
            setPrev(true);
        }
        else{
            setPrev(false);
        }
    }
    const removeOrder = async (id)=>{
        await axios.delete(BACKEND_URL+'order/delete_order/'+id);
        fetchdata();
    }

    const Pagination = async (page)=>{
        setPage(page);
        fetchdata(page,search,limit);
    }

    const Limit = async (e)=>{
        setPage(1);
        setLimit(e.target.value);
        fetchdata(1,search,e.target.value);
    }

    const Search = async (e) =>{
        setPage(1);
        setSearch(e.target.value);
        fetchdata(1,e.target.value,limit);
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(loginData){
            if(loginData.isSeller){
                fetchdata(1,'',5);
            }
            else{
                navigate('/');
            }
        }
        else{
            navigate('/');
        }
    },[]);
    
  return (
    <>
        <Header />
        <section className="gigs pt-5 mt-5">
            <div className="container">
                <div className='d-flex align-items-center justify-content-between'>
                    <h2 className="mb-0 fw-8">Orders</h2>
                    <input type="search" className='form-control search' placeholder='Search...' onChange={Search}/>
                </div>
                {data.length !== 0 ?
                    <>
                        <div className='scrollbar' style={{overflowX: 'auto'}}>
                            <table className="table table-striped mt-5" style={{minWidth: '800px'}}>
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
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='pagination'>
                                    <button className={prev ? 'mx-2 disable' : 'mx-2'} onClick={() => Pagination(1)}><i className="bi bi-chevron-double-left"></i></button>
                                    <button className={prev ? 'mx-2 disable' : 'mx-2'} onClick={() => Pagination(page-1)}><i className="bi bi-chevron-left"></i></button>
                                    <button className='mx-2 currentPage'>{page}</button>
                                    <button className={next ? 'mx-2 disable' : 'mx-2'} onClick={() => Pagination(page+1)}><i className="bi bi-chevron-right"></i></button>
                                    <button className={next ? 'mx-2 disable' : 'mx-2'} onClick={() => Pagination(total)}><i className="bi bi-chevron-double-right"></i></button>
                                </div>
                                <div className="limit d-flex align-items-center">
                                    <select onChange={Limit} className='form-control'>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </>
                : <h3 className='py-5 fw-8'>Data Not Found.</h3>}
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Order;
