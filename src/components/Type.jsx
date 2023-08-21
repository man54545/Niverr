import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

const Type = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay : true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplaySpeed : 2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
    };

  return (
    <>
        <section className="type py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <Slider {...settings}>
                    <NavLink to='/all_types?type=Book Cover' className="col-lg-3 col-md-4 col-6 px-3">
                        <div className="type-box position-relative mb-4">
                            <img src="./assets/img/shot-2.jfif" alt="type_img" className="img-fluid" />
                            <div className="type-content position-absolute">
                                <p className="mb-0 lead text-white">Showcase your story</p>
                                <h3 className="fw-8 text-white">Book Covers</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/all_types?type=AI Artist' className="col-lg-3 col-md-4 col-6 px-3">
                        <div className="type-box position-relative mb-4">
                            <img src="./assets/img/shot-1.jfif" alt="type_img" className="img-fluid" />
                            <div className="type-content position-absolute">
                                <p className="mb-0 lead text-white">Add talent to AI</p>
                                <h3 className="fw-8 text-white">AI Artists</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/all_types?type=Logo Design' className="col-lg-3 col-md-4 col-6 px-3">
                        <div className="type-box position-relative mb-4">
                            <img src="./assets/img/shot-3.jfif" alt="type_img" className="img-fluid" />
                            <div className="type-content position-absolute">
                                <p className="mb-0 lead text-white">Build your brand</p>
                                <h3 className="fw-8 text-white">Logo Design</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/all_types?type=Wordpress' className="col-lg-3 col-md-4 col-6 px-3">
                        <div className="type-box position-relative mb-4">
                            <img src="./assets/img/shot-4.jfif" alt="type_img" className="img-fluid" />
                            <div className="type-content position-absolute">
                                <p className="mb-0 lead text-white">Customize your site</p>
                                <h3 className="fw-8 text-white">Wordpress</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/all_types?type=Voice Over' className="col-lg-3 col-md-4 col-6 px-3">
                        <div className="type-box position-relative mb-4">
                            <img src="./assets/img/shot-5.jfif" alt="type_img" className="img-fluid" />
                            <div className="type-content position-absolute">
                                <p className="mb-0 lead text-white">Voice very nice</p>
                                <h3 className="fw-8 text-white">Voice Over</h3>
                            </div>
                        </div>
                    </NavLink>
                </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default Type;