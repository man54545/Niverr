import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Service = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
        <Header />
        <section className='contact pt-5 mt-5'>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
              <h3 className='display-5 fw-8'>Fiverr's Terms of Service</h3>
              <h4 className='mb-5 fw-8'>Last Update: August 2023</h4>
              <p>Welcome to Fiverr.</p>
              <p className='mb-4'>The following terms of service (these "Terms of Service"), govern your access to and use of the Fiverr website and mobile application, including any content, functionality and services offered on or through www.fiverr.com or the Fiverr mobile application (the "Site") by Fiverr International Ltd. (8 Kaplan St. Tel Aviv 6473409, Israel) and its subsidiaries: Fiverr Inc. (26 Mercer St., New York, NY 10013, USA) and Fiverr Limited (6, Vasili Vryonides str., 3095 Limassol, Cyprus), as applicable. Fiverr International Ltd. and its subsidiaries are collectively referred hereto as "Fiverr" "we" or "us" and “you” or “user” means you as an user of the Site.</p>
              <p>Please read the Terms of Service carefully before you start to use the Site. By using the Site, opening an account or by clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree, on behalf of yourself or on behalf of your employer or any other entity (if applicable), to be bound and abide by these Terms of Service and Fiverr Payment Terms, found here (“Payment Terms”), which is incorporated herein by reference. You further acknowledge, you have read and understood our Privacy Policy, found here. If you do not want to agree to these Terms of Service or the Privacy Policy, you must not access or use the Site. For more detailed policies surrounding the activity and usage on the Site, please access the designated articles herein.</p>
              <p>This Site is offered and available to users who are at least 18 years of age and of legal age to form a binding contract. If you are under 18 and at least 13 years of age, you are only permitted to use the Site through an account owned by a parent or legal guardian with their appropriate permission. If you are under 13 you are not permitted to use the Site or the Fiverr services. By using the Site, you represent and warrant that you meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Site</p>
              <p>Our Customer Support team is available 24/7 if you have any questions regarding the Site or Terms of Service. Contacting our Customer Support team can be performed by submitting a request here.</p>
              <p>The original language of these Terms of Service, as well as all other texts throughout the Site, is English. Fiverr makes this translation available for convenience only. In case of conflicts between the original English version and any translation, the English version shall prevail.</p>
              <h4 className='fw-8'>BUYERS</h4>
              <h5 className='fw-8'>Basics</h5>
              <p>Buyers may request a specific service from the Post a Request feature. Services requested on Fiverr must be an allowed service on Fiverr. Please click here for guidelines on approved services. Users should refrain from using the Post a Request feature for any purpose other than looking for services on Fiverr.</p>
              <p>You may not offer direct payments to Sellers using payment systems outside of the Fiverr platform.</p>
              <h5 className='fw-8'>Limitation on Liability</h5>
              <p>You may not offer Sellers to pay, or make payment using any method other than through the Fiverr.com site. In case you have been asked to use an alternative payment method, please report it immediately to Customer Support here.</p>
              <p>The Deliver Work button may not be abused by Sellers to circumvent Order guidelines described in these Terms of Service. Using the “Deliver Work” button when an Order was not fulfilled may result in a cancellation of that Order after review, affect the Seller’s rating and result in a warning to Seller.</p>
              <p>The official text is the English version of the Site. Any discrepancies or differences created in the translation are not binding and have no legal effect for compliance or enforcement purposes. If any questions arise related to the accuracy of the information contained in the translated content, please refer to the English version of the content which is the official version.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Service;