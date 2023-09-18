import React from 'react'

const Talent = () => {
  return (
    <>
        <section className="talent py-5 bg-color text-white" id='Talent'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <h2 className="mb-5 fw-8">A whole world of freelance talent at your fingertips</h2>
                        <ul className="mb-0 ps-0">
                            <li className="mb-4">
                                <h4 className="fw-8">The best for every budget</h4>
                                <p className="mb-0 text-white lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eius nemo, sit vero itaque voluptas.</p>
                            </li>
                            <li className="mb-4">
                                <h4 className="fw-8">Quality work done quickly</h4>
                                <p className="mb-0 text-white lead">LoremL oremL orem iametpsum, dolor sit amet consectetur adipisicing elit. Vitae eius nemo, sit vero itaque voluptas.</p>
                            </li>
                            <li className="mb-4">
                                <h4 className="fw-8">Protected payments, evey time</h4>
                                <p className="mb-0 text-white lead">Lorem ipsum, dolor sit amet adipisicing elit. Vitae eius nemo, sit vero itaque.</p>
                            </li>
                            <li className="mb-4">
                                <h4 className="fw-8">24/7 support</h4>
                                <p className="mb-0 text-white lead">Lorem ipsum, dolor sit amet consec tetur elit. Vitae eius nemo, sit vero itaque voluptas.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7">
                        {/* <img src="/assets/img/selling-proposition-still-1400-x1.png" alt="talent_img" className='img-fluid mx-auto d-flex' /> */}
                        <div className='talent-img'></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Talent
