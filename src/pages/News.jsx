import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const News = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

  return (
    <>
      <Header />
      <section className="pt-5 mt-5 news">
        <div className="container">
            <h2 className='fw-8 mb-5 cursor-pointer d-inline-block'>News <i className="fs-5 bi bi-chevron-right"></i></h2>
            <div className="row align-items-md-start align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-9">
                    <div className="news-inner shadow mb-lg-0 mb-4">
                        <img src="/assets/img/banner-1.jpg" alt="img" width="100%" />
                        <div className="news-content p-xl-4 p-lg-3 p-4">
                            <h6 className='fw-8 text-end'>24 Aug 2023</h6>
                            <h5 className='fw-8 mb-3'>Fiverr's CEO Stands in Agreement with U.S. Judge Ruling that AI-Generated Work without Human Involvement is Unfit for Copyright</h5>
                            <p className='mb-0'>Micha Kaufman, CEO of Fiverr says, "While AI can be a powerful tool in the creative process, it's the human element that imbues work with originality."</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-9">
                    <div className="news-inner shadow mb-lg-0 mb-4">
                        <img src="/assets/img/banner-2.jpg" alt="img" width="100%" />
                        <div className="news-content p-xl-4 p-lg-3 p-4">
                            <h6 className='fw-8 text-end'>23 Aug 2023</h6>
                            <h5 className='fw-8 mb-3'>Fiverr Releases its 2022 Environmental, Social and Governance (ESG) Report</h5>
                            <p className='mb-0'>Highlights from the report include creating fair economic and social opportunities, marketplace integrity and ethics, and empowering our people.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-9">
                    <div className="news-inner shadow mb-lg-0 mb-4">
                        <img src="/assets/img/banner-3.jpg" alt="img" width="100%" />
                        <div className="news-content p-xl-4 p-lg-3 p-4">
                            <h6 className='fw-8 text-end'>13 Aug 2023</h6>
                            <h5 className='fw-8 mb-3'>Fiverr to Present at Upcoming Conferences</h5>
                            <p className='mb-0'>Micha Kaufman and Ofer Katz to present at the Goldman Sachs Communacopia + Technology Conference and Citi Global Technology Conference</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default News;