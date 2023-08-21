import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BACKEND_URL from "../Api";

const Projects = () => {
    
    const [data,setdata] = useState([]);

    const fetchdata = async ()=>{
        let fdata = await axios.get(BACKEND_URL+'gig/view_gig_limit');
        setdata(fdata.data);
    }

    useEffect(()=>{
        fetchdata();
    },[]);

  return (
    <>
        <section className="projects py-5">
            <div className="container">
                <ul className="row align-items-center justify-content-center mb-0 ps-0">
                    {data.map((v,i)=>{
                        return (
                            <li className="col-lg-3 col-sm-6" key={i}>
                                <>
                                    <div className="projects-inner b-1 br-1 mb-lg-0 mb-4">
                                        <img src={BACKEND_URL+v.images[0]} alt="project_img" className="img-fluid img-br-1" style={{height:'200px', width: '100%', objectFit:'cover'}}/>
                                        <div className="projects-content p-xl-4 p-3 d-flex flex-wrap align-items-center">
                                            <img src={v.userId.img ? BACKEND_URL+v.userId.img : "./assets/img/noavatar.png"} className="br-50" alt="projects_owner" style={{width : "20%"}}/>
                                            <div className="ps-3">
                                                <h5 className="mb-0 fw-8">{v.cat}</h5>
                                                <p className="mb-0" style={{textTransform : 'capitalize'}}>{v.userId.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default Projects;