import React from 'react'
import '../assets/home.css';
import {Button} from 'reactstrap'
import workdetails from'../assets/img/workdetails.png'
import heart from'../assets/img/heart.PNG'
import Groceries from '../assets/img/groceries.png'
import Medicine from '../assets/img/medicine.png'
import Recharge from '../assets/img/recharge.png'
import Application from './Application'
import cabs from '../assets/img/cabs.png'
import deal from '../assets/img/deals-min.png'
import Around from '../assets/img/aroundme.png'
import Arrow from '../assets/img/arrow.png'







export default function Home() {
    return (
        <div className=" home-container home-section-one">
            <div className="home-main bg-color2">
                <div className="home-header">
                    <h1>HOKO - Hop Online Know Offline</h1>
                </div>
                <div className="home-tag-line">
                  <strong><p>Compare & Shop localy near you</p></strong> 
                   
                </div>
                <Application/>
               

            </div>
{/* home-Section-2 */}
            <div className=" row home-wrapper bg-color2" >
                <div className="our-work-img">
                    <img src={workdetails}  className="img-fluid" alt="Work-img"/>
                </div>
            </div>
            <div className="container-fluid bg-color2 pt-3 ">
                 <div className=" row text-below-img  margin-zero">
                        <div className="col-sm-12 col-md-4 col-text">
                                        <h4>Best Deals</h4>
                                        <p>Offers, Coupons and Best deals available across all the online
                                        shopping portals available in the country</p>   
                            </div>
                                <div className="col-sm-12 col-md-4 col-text">
                                       <img src={heart} alt="heart" className="img-fluid"/>
                                            <h4 className="pt-3">Hoko - All in One App</h4>
                                            <p>Pricyfy - All in one app has a user
                                                firendly interface and design with amazing rewards hidden within the app.
                                            </p>      
                                </div>
                                    <div className="col-sm-12 col-md-4 col-text">  
                                                <h4>Storage</h4>
                                                <p>New way of using all in one app with just one
                                                    tap.A one step solution for saving your time and memory.
                                                    Enjoy all services in one with pricyfy
                                                </p>
                                    </div>
                     </div>
            </div>


            {/* Section -3 text */}
            <div className="container">
            <div className="row serices-category padding-tp-btm margin-zero">
                <div className ="categories-img">
                    <img src={Groceries} alt className=""/><span><img src={Medicine} alt className=""/></span>
                    <span> <img src={Groceries} alt className="groceries-img"/></span><span> <img src={Arrow} alt ="arrow" className="arrow"/></span><span> <img src={Groceries} alt className=""/></span>

                </div>
                </div>
            </div>
            

            {/* section 4 */}

            <div className="container bg-grey">
            <div className="row  cab-category margin-zero mb-5">
                <div className ="col-12 col-md-6">
                  <img src={cabs} alt="Cabs" className="img-fluid cab"/>
                </div>
                <div className ="col-12 col-md-6">
                    
                        <div className="wrapper-one">
                            <div className="one-text">
                              <div className="one">1</div>  
                           <span>CABS</span> </div>
                            <p>Plan your outstation journey anywhere across 10000+ destinations.
                                With choice of cars from economy hatchbacks to sedan, from premium sedans
                                to SUVs and Luxury cars like Mercedes Benz; We offer you one stop solution for all your travel needs. Book one-way or round trip, plan in advance or just book for your immediate trip. Now, travelling has become even more hassle-free with Ola & Uber.
                                Go places to anywhere & everywhere.
                                </p>             
                        </div>
                </div>
                </div>
            </div>

            <div className="container">
            <div className="row cab-category  margin-zero mb-5">
            <div className ="col-12 col-md-6">
                    
                    <div className="wrapper-one">
                        <div className="one-text">
                          <div className="one">2</div>  
                       <span>Deals</span> </div>
                        <p>We believe that Every Penny Saved is Every Penny Earned! As more and more Indians are turning towards online shopping and bill payments, we have taken it to ourselves to help them save on every transaction.
                    <br/> At HOKO, we curate the best deals and coupon codes from all top retailers in India and present them to our users. Our users can enjoy savings through these coupons and also earn extra cashback on all their purchases! 
                        </p>
                        

                        
                </div>
            </div>
                {/*  */}
                <div className ="col-12 col-md-6">
                    <img src={cabs} alt="Cabs" className="img-fluid cab"/>
                </div>
                </div>
            </div>
{/* Section medicine recharge groceries */}
            <div className="container hokoapp-services bg-grey ">
                <div className="row hokoapp-center margin-zero">
                    <div className="col-sm-12 col-md-3">
                        <img src={Medicine} alt="Medicine" className="img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 recharge">
                    <img src={Recharge} alt="Recharge" className="img-fluid"/>
                    </div>

                    <div className="col-sm-12 col-md-3">
                    <img src={Groceries} alt="Groceries" className="img-fluid"/>
                    </div>

                </div>
            </div>

                            <div className="container">
                                <div className="row text-over-page">
                                            <div className="col-12 col-md-3 section-p-text">
                                                <div className="sec-6-medicine">
                                                    <h2>3</h2><span>MEDICINE</span>
                                                </div>
                                                <p>We bring to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic, homeopathic medicines,
                                                     vitamins & nutrition supplements and other health-related products delivered at home.</p>
                                            </div>
                                            <div className="col-12 col-md-3 recharge section-p-text">
                                                <div className="sec-6-medicine">
                                                    <h2>4</h2><span>RECHARGE</span>
                                                </div>
                                                <p>We are on a mission to get millions of merchants both in organised and unorganised sector to be a part of the digital ecosystem.</p>
                                            </div>
                                            <div className="col-12 col-md-3 section-p-text">
                                                <div className="sec-6-medicine">
                                                    <h2>5</h2><span>GROCERIES</span>
                                                </div>
                                                <p>We allow you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new 
                                                    products and shop for all your food and grocery needs from the comfort of your home or office. </p>
                                            </div>

                                </div>
                            </div>


            {/*section Around Me  */}
            <div className="container">
            <div className="row cab-category bg-grey margin-zero mb-5 mt-5">
                <div className ="col-12 col-md-6">
                  <img src={Around} alt="Around" className="img-fluid cab"/>
                </div>
                <div className ="col-12 col-md-6">
                    
                        <div className="wrapper-one">
                            <div className="one-text">
                              <div className="one">6</div>  
                           <span>Around me</span> </div>
                            <p>Hungry and looking for inspiration? 
                                    Meeting friends at a bar close by?
                                    Or just need to find the closest ATM, Petrol station, Hospitals etc? 
                                    We allow you to search for the nearest restaurants, banks, gas stations, hotel or find a movie schedule nearby.
                                </p>             
                        </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}
