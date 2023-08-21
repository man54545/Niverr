import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import BACKEND_URL from "../Api";
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  const Navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem('currentUser'));
  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const [suc,setsuc] = useState('');
  const [err,seterr] = useState('');
  const [data,setdata] = useState({});
  const [fdata,setfdata] = useState({
    name : '',
    country : '',
    state : '',
    zipcode : '',
    vat_no : '',
    email : '',
    card_no : '',
    date : '',
    cvv : '',
  });
  
  const fetchdata = async()=>{
    let data = await axios.get(BACKEND_URL+'gig/view_gig/'+id);
    setdata(data.data);
    setfdata({
      name : data.data.userId.username,
      email : data.data.userId.email,
    })
  }

  const FinalPay = async (e) =>{
    // let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    if(loginData){
      // if(!fdata.email || fdata.email === ''){
      //   e.preventDefault();
      //   seterr('Email Required.');
      //   setsuc('');
      //   document.getElementById('email').focus();
      //   return false;
      // }
      // else if(!regex.test(fdata.email)){
      //   e.preventDefault();
      //   seterr("Invalid Email.");
      //   setsuc('');
      //   document.getElementById('email').focus();
      //   return false;
      // }
      // else if(!fdata.card_no || fdata.card_no === ''){
      //   e.preventDefault();
      //   seterr("Card No. Required.");
      //   setsuc('');
      //   document.getElementById('card_no').focus();
      //   return false;
      // }
      // else if(!fdata.date || fdata.date === ''){
      //   e.preventDefault();
      //   seterr("Date Required.");
      //   setsuc('');
      //   document.getElementById('date').focus();
      //   return false;
      // }
      // else if(!fdata.cvv || fdata.cvv === ''){
      //   e.preventDefault();
      //   seterr("CVV Required.");
      //   setsuc('');
      //   document.getElementById('cvv').focus();
      //   return false;
      // }
      // else if(!fdata.name || fdata.name === ''){
      //   e.preventDefault();
      //   seterr("Card Holder Name Required.");
      //   setsuc('');
      //   document.getElementById('name').focus();
      //   return false;
      // }
      // else if(!fdata.country || fdata.country === ''){
      //   e.preventDefault();
      //   seterr("Country Required.");
      //   setsuc('');
      //   document.getElementById('country').focus();
      //   return false;
      // }
      // else if(!fdata.zipcode || fdata.zipcode === ''){
      //   e.preventDefault();
      //   seterr("Zip Code Required.");
      //   setsuc('');
      //   document.getElementById('zipcode').focus();
      //   return false;
      // }
      // else if(!fdata.state || fdata.state === ''){
      //   e.preventDefault();
      //   seterr("State Required.");
      //   setsuc('');
      //   document.getElementById('state').focus();
      //   return false;
      // }
      // else if(!fdata.vat_no || fdata.vat_no === ''){
      //   e.preventDefault();
      //   seterr("VAT No. Required.");
      //   setsuc('');
      //   document.getElementById('vat_no').focus();
      //   return false;
      // }
      // else{
        let ffdata = {
          gigId : id,
          sellerId : data.userId,
          buyerId : loginData._id,
          img : data.images[0],
          title : data.title,
          price : data.price,
          payment : data.price,
        }
        let adata = await axios.post(BACKEND_URL+'order/add_order',ffdata);
        if(adata.status === 200){
            Navigate("/");
        }
        else{
            e.preventDefault();
        }
      // }
    }
    else{
        Navigate("/login");
    }
  }

  const formEvent = (e)=>{
    setfdata((v)=>{
      return {
        ...v,
        [e.target.name] : e.target.value
      }
    })
  }

  useEffect(()=>{
    fetchdata();
  },[]);

  return (
    <>
    <Header />
    <section className='py-5 mt-5 pay'>
      <div className="container d-lg-flex align-items-center">
        <div className="col-lg-6">
          <img src="assets/img/shot-10.png" className='w-100' alt="img" />
        </div>
        <div className="box-2 col-lg-6">
            <div className="box-inner-2">
                <div>
                    <p className="fw-bold">Payment Details</p>
                    <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                    {err ? <p className='text-danger'>{err}</p> : ''}
                    {suc ? <p className='text-success'>{suc}</p> : ''}
                </div>
                <form>
                    <div className="mb-3">
                        <p className="dis fw-bold mb-2">Email address</p>
                        <input className="form-control" type="email" name='email' id='email' value={fdata.email} onChange={formEvent} placeholder='Email Address' />
                    </div>
                    <div>
                        <p className="dis fw-bold mb-2">Card details</p>
                        <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                            <div className="fab fa-cc-visa ps-3"></div>
                            <input type="text" className="form-control" placeholder="Card Details" name='card_no' id='card_no' onChange={formEvent} />
                            <div className="d-flex w-50">
                                <input type="text" className="form-control px-0" placeholder="MM/YY" name='date' id='date' onChange={formEvent} />
                                <input type="password" maxLength='3' className="form-control px-0" name='cvv' id='cvv' onChange={formEvent} placeholder="CVV" />
                            </div>
                        </div>
                        <div className="my-3 cardname">
                            <p className="dis fw-bold mb-2">Cardholder name</p>
                            <input className="form-control" type="text"  value={fdata.name} onChange={formEvent} name='name' id='name' placeholder='Cardholder Name'/>
                        </div>
                        <div className="address">
                            <p className="dis fw-bold mb-3">Billing address</p>
                            <select className="form-select" aria-label="Default select example" name='country' id='country' onChange={formEvent}>
                                <option value="0">United States</option>
                                <option value="1">India</option>
                                <option value="2">Australia</option>
                                <option value="3">Canada</option>
                            </select>
                            <div className="d-flex">
                                <input className="form-control zip" type="text" onChange={formEvent} name='zipcode' id='zipcode' placeholder="ZIP" />
                                <input className="form-control state" type="text" onChange={formEvent} name='state' id='state' placeholder="State" />
                            </div>
                            <div className=" my-3">
                                <p className="dis fw-bold mb-2">VAT Number</p>
                                <div className="inputWithcheck">
                                    <input className="form-control" type="text" placeholder='VAT Number' name='vat_no' id='vat_no' onChange={formEvent}/>
                                </div>
                            </div>
                            <div className="d-flex flex-column dis">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>Subtotal</p>
                                    <p><span className='fw-bold'>$</span> {data.price}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>VAT<span>(20%)</span></p>
                                    <p><span className='fw-bold'>$</span> 2</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p className="fw-bold">Total</p>
                                    <p className="fw-bold"><span>$</span> {data.price + 2}</p>
                                </div>
                                <button className="btn text-white bg-color-2 mt-2" onClick={FinalPay}>Pay<span className="px-1">$</span>{data.price + 2}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Payment;