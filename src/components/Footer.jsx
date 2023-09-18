import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="py-5 text-center text-sm-start">
            <div className="container">
                <div className="row">
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-lg-0">
                            <h5 className="fw-8 mb-4">Categories</h5>
                            <ul className="ps-0 mb-0">
                                <li><Link to="/all_types?type=Graphic Design" target='_blank'><span className="d-block py-2 text-secondary">Graphic Design</span></Link></li>
                                <li><Link to="/all_types?type=Digital Marketing" target='_blank'><span className="d-block py-2 text-secondary">Digital Marketing</span></Link></li>
                                <li><Link to="/all_types?type=Writing & Translation" target='_blank'><span className="d-block py-2 text-secondary">Writing & Translation</span></Link></li>
                                <li><Link to="/all_types?type=Music & Audio" target='_blank'><span className="d-block py-2 text-secondary">Music & Audio</span></Link></li>
                                <li><Link to="/all_types?type=Video & Animation" target='_blank'><span className="d-block py-2 text-secondary">Video & Animation</span></Link></li>
                                <li><Link to="/all_types?type=Data" target='_blank'><span className="d-block py-2 text-secondary">Data</span></Link></li>
                                <li><Link to="/all_types?type=Lifestyle" target='_blank'><span className="d-block py-2 text-secondary">Lifestyle</span></Link></li>
                                <li><Link to="/all_types?type=Photography" target='_blank'><span className="d-block py-2 text-secondary">Photography</span></Link></li>
                                <li><Link to="/all_types?type=Programming & Tech" target='_blank'><span className="d-block py-2 text-secondary">Programming & Tech</span></Link></li>
                                <li><Link to="/all_types?type=Business" target='_blank'><span className="d-block py-2 text-secondary">Business</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-lg-0">
                            <h5 className="fw-8 mb-4">About</h5>
                            <ul className="ps-0 mb-0">
                                <li><Link to="/news"><span className="pb-3 d-block text-secondary">Press & News</span></Link></li>
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Partnerships</span></Link></li> */}
                                <li><Link to="/policy"><span className="pb-3 d-block text-secondary">Private Policy</span></Link></li>
                                <li><Link to="/service"><span className="pb-3 d-block text-secondary">Terms of Service</span></Link></li>
                                <li><Link to="/contact"><span className="pb-3 d-block text-secondary">Contact Sales</span></Link></li>
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Investor Relations</span></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-lg-0">
                            <h5 className="fw-8 mb-4">Support</h5>
                            <ul className="ps-0 mb-0">
                                <li><Link to="/policy"><span className="pb-3 d-block text-secondary">Help & Support</span></Link></li>
                                <li><Link to=""><span className="pb-3 d-block text-secondary">Trust & Safty</span></Link></li>
                                <li><Link to=""><span className="pb-3 d-block text-secondary">Selling on Niverr</span></Link></li>
                                <li><Link to=""><span className="pb-3 d-block text-secondary">Buying on Niverr</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-sm-0">
                            <h5 className="fw-8 mb-4">Pages</h5>
                            <ul className="ps-0 mb-0">
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Customer Stories</span></Link></li> */}
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Community Hub</span></Link></li> */}
                                <li><Link to="/register"><span className="pb-3 d-block text-secondary">Register</span></Link></li>
                                <li><Link to="/login"><span className="pb-3 d-block text-secondary">Login</span></Link></li>
                                <li><Link to="/event"><span className="pb-3 d-block text-secondary">Events</span></Link></li>
                                <li><Link to="/blog"><span className="pb-3 d-block text-secondary">Blog</span></Link></li>
                                <li><Link to="/order"><span className="pb-3 d-block text-secondary">Orders</span></Link></li>
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Podcast</span></Link></li> */}
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Become a Seller</span></Link></li> */}
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Invite a Friend</span></Link></li> */}
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Community Standard</span></Link></li> */}
                                <li><Link to="/error"><span className="pb-3 d-block text-secondary">Error Page</span></Link></li>
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Affiriates</span></Link></li> */}
                                {/* <li><Link to=""><span className="pb-3 d-block text-secondary">Forun</span></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner">
                            <h5 className="fw-8 mb-4">More From Niverr</h5>
                            <ul className="ps-0 mb-0">
                                <li><Link to="/business"><span className="pb-3 d-block text-secondary">Niverr Business</span></Link></li>
                                {/* <li><Link><span className="pb-3 d-block text-secondary">Niverr Pro</span></Link></li> */}
                                {/* <li><Link to="/policy"><span className="pb-3 d-block text-secondary">Get Inspired</span></Link></li> */}
                                {/* <li><Link><span className="pb-3 d-block text-secondary">Niverr Logo Maker</span></Link></li> */}
                                {/* <li><Link><span className="pb-3 d-block text-secondary">Learn</span></Link></li> */}
                                <li><Link to="/fiverr_select"><span className="pb-3 d-block text-secondary">Niverr Select</span></Link></li>
                                <li><Link to="/work"><span className="pb-3 d-block text-secondary">Niverr Workspace</span></Link></li>
                                {/* <li><Link><span className="pb-3 d-block text-secondary">Clear Voice</span></Link></li> */}
                                {/* <li><Link><span className="pb-3 d-block text-secondary">Working Not Working</span></Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="copy_right pb-sm-4">
            <div className="container">
                <div className="d-sm-flex flex-wrap align-items-center justify-content-between text-center">
                    <p className="mb-sm-0 mb-4">@ Niverr International Ltd. 2023</p>
                    <div className="social-icons">
                        <span className="text-dark"><i className="bi bi-facebook fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-linkedin fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-youtube fs-4"></i></span>
                        {/* <span className="text-dark ps-3"><i className="bi bi-twitter fs-4"></i></span> */}
                        <span className="text-dark ps-3"><i className="bi bi-instagram fs-4"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;  
