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
                                <li><span className="pb-3 d-block text-secondary">Press & News</span></li>
                                <li><span className="pb-3 d-block text-secondary">Partnerships</span></li>
                                <li><span className="pb-3 d-block text-secondary">Private Policy</span></li>
                                <li><span className="pb-3 d-block text-secondary">Terms of Service</span></li>
                                <li><span className="pb-3 d-block text-secondary">Contact Sales</span></li>
                                <li><span className="pb-3 d-block text-secondary">Investor Relations</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-lg-0">
                            <h5 className="fw-8 mb-4">Support</h5>
                            <ul className="ps-0 mb-0">
                                <li><span className="pb-3 d-block text-secondary">Help & Support</span></li>
                                <li><span className="pb-3 d-block text-secondary">Trust & Safty</span></li>
                                <li><span className="pb-3 d-block text-secondary">Selling on Niverr</span></li>
                                <li><span className="pb-3 d-block text-secondary">Buying on Niverr</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner mb-5 mb-sm-0">
                            <h5 className="fw-8 mb-4">Community</h5>
                            <ul className="ps-0 mb-0">
                                <li><span className="pb-3 d-block text-secondary">Customer Stories</span></li>
                                <li><span className="pb-3 d-block text-secondary">Community Hub</span></li>
                                <li><span className="pb-3 d-block text-secondary">Events</span></li>
                                <li><span className="pb-3 d-block text-secondary">Blog</span></li>
                                <li><span className="pb-3 d-block text-secondary">Podcast</span></li>
                                <li><span className="pb-3 d-block text-secondary">Become a Seller</span></li>
                                <li><span className="pb-3 d-block text-secondary">Invite a Friend</span></li>
                                <li><span className="pb-3 d-block text-secondary">Community Standard</span></li>
                                <li><span className="pb-3 d-block text-secondary">Influences</span></li>
                                <li><span className="pb-3 d-block text-secondary">Affiriates</span></li>
                                <li><span className="pb-3 d-block text-secondary">Forun</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-20">
                        <div className="footer-inner">
                            <h5 className="fw-8 mb-4">More From Niverr</h5>
                            <ul className="ps-0 mb-0">
                                <li><span className="pb-3 d-block text-secondary">Niverr Business</span></li>
                                <li><span className="pb-3 d-block text-secondary">Niverr Pro</span></li>
                                <li><span className="pb-3 d-block text-secondary">Get Inspired</span></li>
                                <li><span className="pb-3 d-block text-secondary">Niverr Logo Maker</span></li>
                                <li><span className="pb-3 d-block text-secondary">Learn</span></li>
                                <li><span className="pb-3 d-block text-secondary">Niverr Select</span></li>
                                <li><span className="pb-3 d-block text-secondary">Niverr Workspace</span></li>
                                <li><span className="pb-3 d-block text-secondary">Clear Voice</span></li>
                                <li><span className="pb-3 d-block text-secondary">Working Not Working</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="copy_right py-sm-5">
            <div className="container">
                <div className="d-sm-flex flex-wrap align-items-center justify-content-between text-center">
                    <p className="lead mb-sm-0 mb-4">@ Niverr International Ltd. 2023</p>
                    <div className="social-icons">
                        <span className="text-dark"><i className="bi bi-facebook fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-linkedin fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-youtube fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-twitter fs-4"></i></span>
                        <span className="text-dark ps-3"><i className="bi bi-instagram fs-4"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;  
