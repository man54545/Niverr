import React from 'react'

const Team = () => {
  return (
    <>
        <section className="team py-5 bg-color" id='Team'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-lg-0 mb-5">
                        <h1 className="text-white fw-8 display-5 mb-4">Niverr <span className="fw-1 style">Business</span></h1>
                        <h1 className="text-white fw-8 display-6 mb-4">A business solution designed for <span className="fw-1 style">teams</span></h1>
                        <p className="lead text-white">Lorem ipsum, dolor sit amet cons ectetur adipisi cing elit. Eum, laud antium ipsam rem quibusdam.</p>                            
                        <ul className="mb-0 ps-0">
                            <li className="d-flex align-items-center mb-2">
                                <i className="bi bi-check text-white fs-3"></i>
                                <p className="text-white ps-3 mb-0">Lorem ipsum dolor, sit amet consec elit. Sequi veritatis maxime.</p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className="bi bi-check text-white fs-3"></i>
                                <p className="text-white ps-3 mb-0">Lorem ipsum dolor, amet consec elit. Sequi veritatis maxime.</p>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <i className="bi bi-check text-white fs-3"></i>
                                <p className="text-white ps-3 mb-0">Lorem ipsum dolor, sit ametamememet consec elit. Sequi veritatis maxime.</p>
                            </li>
                        </ul>
                        <a href=" " className="text-white px-3 mt-3 btn bg-color-2">Explore Niverr Business</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="/assets/img/business-desktop-870-x1.png" alt="team_img" className='img-fluid d-flex mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team
