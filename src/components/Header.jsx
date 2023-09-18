import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BACKEND_URL from "../Api";

const Header = () => {

    const url = useLocation().pathname;
    const navigate = useNavigate();
    const [active, isActive] = useState(false);
    const logindata = JSON.parse(localStorage.getItem('currentUser'));

    const setActive = ()=>{
        window.scrollY > 100 ? isActive(true) : isActive(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', setActive);

        return ()=>{
            window.removeEventListener('scroll', setActive);
        }
    });

    const Click = async () => {
        var dropdown = await document.getElementById('dropdown');
        dropdown.classList.toggle('d-block');
    }

    const Logout = async () =>{
        await axios.post(BACKEND_URL+'auth/logout');
        localStorage.setItem('currentUser',null);
        navigate('/');
    }

    const Toggle = async ()=>{
        let nav = document.getElementById('nav');
            nav.classList.toggle('trans');
    }

    return (
        <>
            <header className={active ? "header py-2 bg-color w-100 z-1 transition active" : "header bg-color-3 py-3 w-100 z-1 transition"}>
                <div className="container">
                    <div className="d-flex flex-wrap text-center align-items-center justify-content-between">
                        <div className="logo">
                            <Link to="/" className="fs-3 fw-8">Niverr.</Link>
                        </div>
                        <nav className='d-lg-block' id='nav'>
                            <ul className="mb-0 ps-0 d-lg-flex flex-wrap align-items-center">
                                <li><Link to="/" className={url === '/' ? "py-3 py-lg-0 d-block px-3 link color-2" : "py-3 py-lg-0 d-block px-3 link"}>Home</Link></li>
                                <li><Link to="/business" className={url === '/business' ? "py-3 py-lg-0 d-block px-3 link color-2" : "py-3 py-lg-0 d-block px-3 link"}>Niverr Business</Link></li>
                                <li><Link to="/blog" className={url === '/blog' ? "py-3 py-lg-0 d-block px-3 color-2" : "py-3 py-lg-0 d-block px-3 link"}>Blog</Link></li>
                                <li><Link to="/service" className={url === '/service' ? "py-3 py-lg-0 d-block px-3 link color-2" : "py-3 py-lg-0 d-block px-3 link"}>Explore</Link></li>
                                <li><Link to="/contact" className={url === '/contact' ? "py-3 py-lg-0 d-block px-3 link color-2" : "py-3 py-lg-0 d-block px-3 link"}>Contact</Link></li>
                                {/* <li><Link className="py-3 py-lg-0 d-block px-3 link">English</Link></li> */}
                                {/* <li><Link to="/" className="py-3 py-lg-0 d-block px-3 link">Become a seller</Link></li> */}
                            </ul>
                        </nav>
                        <div className='d-flex align-items-center'>
                            <div className='d-flex align-items-center me-3' style={{cursor:'pointer'}} onClick={Click}>
                                {logindata ? <img src={logindata.img !== 'undefined' ? BACKEND_URL+logindata.img : "./assets/img/noavatar.png"} className='br-5 ms-4' width="40px" height='40px' alt="profile_img" style={{objectFit:'cover'}}/>  : <li><Link to="/login" className="d-block px-4 link">Sign In</Link></li>}
                                <li className="position-relative">
                                    {logindata ? <span className="px-3 py-2 bbt cursor-pointer" style={{textTransform:"capitalize"}}>{logindata.username}</span> : ''}
                                </li>
                                <ul className="mb-0 bg-white p-4 br-1 position-absolute transition" id="dropdown" style={{width: '180px', top: '90%', display: 'none'}}>
                                    {logindata == null ? '' : logindata.isSeller === true ?
                                            <>
                                                <li><Link to="/gigs" className="py-1 d-block">View All Gigs</Link></li>
                                                <li><Link to="/add_gigs" className="py-1 d-block">Add New Gig</Link></li>
                                                <li><Link to="/msg" className="py-1 d-block">Messages</Link></li>
                                            </> : ""
                                    }
                                    <li><Link to="/order" className="py-1 d-block">All Orders</Link></li>
                                    <li><Link to="/favourite" className="py-1 d-block">Favourite</Link></li>
                                    <li><Link to="/logout" onClick={Logout} className="py-1 d-block">Logout</Link></li>
                                </ul>
                            </div>
                            <span href="#" id='toogle' onClick={Toggle} className='fs-4 d-lg-none d-block pt-1' style={{cursor: 'pointer'}}><i className='bi bi-list'></i></span>
                        </div>
                    </div>
                </div>

                <div className="types position-absolute w-100 z-1 bg-white" style={{top: '58px'}}>
                    <hr className="m-0" />
                    <div className="container">
                        <ul className="ps-0 mb-0 d-flex align-items-center justify-content-between">
                            <li><Link to='/all_types?type=Graphic Design' target={"_blank"}><span className="d-block py-2 text-secondary">Graphic Design</span></Link></li>
                            <li><Link to='/all_types?type=Digital Marketing' target={"_blank"}><span className="d-block py-2 text-secondary">Digital Marketing</span></Link></li>
                            <li><Link to='/all_types?type=Writing & Translation' target={"_blank"}><span className="d-block py-2 text-secondary">Writing & Translation</span></Link></li>
                            <li><Link to='/all_types?type=Music & Audio' target={"_blank"}><span className="d-block py-2 text-secondary">Music & Audio</span></Link></li>
                            <li><Link to='/all_types?type=Video & Animation' target={"_blank"}><span className="d-block py-2 text-secondary">Video & Animation</span></Link></li>
                            <li><Link to='/all_types?type=Data' target={"_blank"}><span className="d-block py-2 text-secondary">Data</span></Link></li>
                            <li><Link to='/all_types?type=Lifestyle' target={"_blank"}><span className="d-block py-2 text-secondary">Lifestyle</span></Link></li>
                            <li><Link to='/all_types?type=Photography' target={"_blank"}><span className="d-block py-2 text-secondary">Photography</span></Link></li>
                            <li><Link to='/all_types?type=Programming & Tech' target={"_blank"}><span className="d-block py-2 text-secondary">Programming & Tech</span></Link></li>
                            <li><Link to='/all_types?type=Business' target={"_blank"}><span className="d-block py-2 text-secondary">Business</span></Link></li>
                        </ul>
                    </div>
                    <hr className="m-0" />
                </div>
            </header>
        </>
    )
}

export default Header;
