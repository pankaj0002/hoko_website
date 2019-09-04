import React from 'react'
import '../assets/contact.css';
import o1 from '../assets/img/o1.png'
import o2 from '../assets/img/o2.png'
import o3 from '../assets/img/o3.png'
import Map from './Map'
// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';


export default function Contact() {
    return (
        <div className="contact-container">
            {/* Section one start */}
            <div className="row contact-section-one margin-zero">
                    <div className="contact-header">
                         <h3 className="contact-us-text-1">CONTACT<span className="contact-us-text-2"><strong> US</strong></span></h3>
                         <p>Got questions about product and services? Get in touch- we are just a message/call away.</p>
                    </div>
            </div>
             {/* Section one END */}

              {/* Section Two start */}
            <div className="row contact-section-two margin-zero">
                
                    <div className="col-sm-12 col-md-3 cont-box-dimension"> 
                         
                         <div className="contct-box-content">
                            <img src={o2}  className="img-fluid" alt="o2" />
                         <h3>Address</h3>
                            <h5>Pricyfy Web Technology Pvt Ltd,</h5>
                            <p>#280, UB Spirits, 5th Main Road, Sector 6, HSR Layout, Bengaluru, Karnataka</p>
                         </div>
                    </div>
                    <div className="col-sm-12 col-md-3 box-2-margin cont-box-dimension">
                         <div className="contct-box-content">
                                 <img src={o1}  className="img-fluid" alt="o1" />
                                     <h3>Follow us</h3>
                                     <div className="followus-icon">
                                         <ul>
                                             <li className="face-icon"><i className="fab fa-facebook"></i></li>
                                             <li className="face-icon"><i className="fab fa-instagram"></i></li>
                                             <li className="face-icon"><i className="fab fa-twitter"></i></li>
                                             <li className="face-icon"><i className="fab fa-linkedin"></i></li>


                                         </ul>
                                     </div>
                         </div>
                    </div>
                    <div className="col-sm-12 col-md-3  cont-box-dimension">
                            <div className="contct-box-content">
                                <img src={o3}  className="img-fluid" alt="o3" />
                                     <h3>Working Hours</h3>
                                            <p>Monday to Saturday<br/>24 hours</p>
                         </div>
                    </div>
                

            </div>
             {/* Section two end */}

            {/* Section three start */}
            <div className="row contact-section-3">
                <div className="col-sm-12 col-md-6">
                    <div className="contact-us-header">
                        <h3><i className="fa fa-envelope-square"></i>  By Email</h3><br/>
                        <div className="con-business"><p>Partner with us</p>
                        <p>business@hokoapp.com</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6  pt-5 customer-support">
                            <p>Customer Support & others</p>
                            <a href="#">support@hokoapp.com</a>

                        </div>
                        <div className="col-sm-12 col-md-6 pt-5">
                        <p>Careers</p>
                            <a href="#">jobs@hokoapp.com</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="write-to-us">
                   <b> <button type="button" className="btn btn-secondary">Write to us</button></b>
                    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-6">
                    
                 <Map/>
               


            </div>
             {/* Section three end */}

</div>
           
        </div>
    )
}
