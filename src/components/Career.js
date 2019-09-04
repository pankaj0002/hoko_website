import React from 'react'
import '../assets/career.css';
import cgrow from '../assets/img/cgrow.png'
import cteam from '../assets/img/cteam.png'

import cprob from '../assets/img/cprob.png'

import csalary from '../assets/img/csalary.png'
import Visualization from '../assets/img/visualization.jpg'
import android from '../assets/img/android.jpg'
import web from '../assets/img/web.jpg'
import dm from '../assets/img/dm.jpg'




export default function Career() {
    return (
        <div className="career-container">
            <div className="container">
                    <div className="row career-header margin-zero">
                        <h3 className="why-text">WHY <strong>HOKO?</strong></h3>
                    </div>
            </div>
           
            
            <div className="container career-section-2">
            <div className="row  margin-zero">
                    <div className="col-sm-12 col-md-6 paddeskmob-wrapper">
                         <div className="paddeskmob">
                            <img src={cgrow} className="img-fluid" alt="cgrow"/>
                        </div>
                        <div className="paddeskmob-text"><p>Career Growth and continuous Innovations</p></div>
                    </div>
                <div className="col-sm-12 col-md-6 paddeskmob-wrapper">
                         <div className="paddeskmob">
                            <img src={cprob} className="img-fluid" alt="cprob"/>
                        </div>
                        <div className="paddeskmob-text"><p>New Problems to Solve and meet people to learn</p></div>
                </div>               
            </div>
                            <div className="row career-section-2 margin-zero pt-5">
                                            <div className="col-sm-12 col-md-6 paddeskmob-wrapper">
                                                    <div className="paddeskmob">
                                                        <img src={cteam} className="img-fluid" alt="cteam"/>
                                                    </div>
                                                    <div className="paddeskmob-text"><p>Team up with an unstoppable workforce to build a great<br/> 
                                                                                        product to create an impact on millions</p></div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 paddeskmob-wrapper">
                                                    <div className="paddeskmob">
                                                        <img src={csalary} className="img-fluid" alt="csalary"/>
                                                    </div>
                                                    <div className="paddeskmob-text"><p>Competitive Salary & Benefits.</p></div>
                                            </div>   
                            </div>
        {/*========================= ============================================================= */}
                            <div className=" row hello">
                                    <div className="text-you-crazy">
                                        <p>But the question is.....</p><br/><br/>
                                          <strong><p>Are You Crazy Enough To Do This?</p></strong> 
                                      </div>  
                            </div>
        </div>
        {/* ===================================================================================== */}
           
                      {/* slider section start */}
                      <div className="row cr-slider-section margin-zero mt-5 ">
                          
                          <div className="cr-slider-child">
                              <h4>You Will Be Surrounded By </h4>
                              <p><strong>A Bunch Of</strong></p>
                      
                          </div>
                      </div>

                      {/* -================image gallery================= */}
                      <div className="conatiner pt-5 pb-5">
                          <div className="row ">
                              <div className="col-12 col-md-6 img-collm">
                                  <div className="img-div-1">
                                  <img src={Visualization} alt="" className="img-fluid img-size"/>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 pad-zero">
                              <div className="img-div-2">
                              <img src={web} alt="" className="img-fluid img-size"/>
                                  </div>
                              </div>

                          </div>
                          <div className="row">
                          <div className="col-12 col-md-6 img-collm">
                                  <div className="img-div-3">
                                  <img src={android} alt="" className="img-fluid img-size"/>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 pad-zero">
                              <div className="img-div-4">
                              <img src={dm} alt="" className="img-fluid img-size"/>
                                  </div>
                              </div>
                          </div>

                      </div>
                      {/* slider section END */}   

                                    {/* Different section */}
                        <div className="container pt-5 pb-5">
                            <div className="row">
                                <div className="col-12 col-md-6 what-we-are-building">
                                    <div className="wat-we-do">
                                        <h3 className="what">WHAT</h3>
                                        <h3 className="we're">WE'RE</h3>
                                        <h3 className="building"><bold>BUILDING</bold></h3>
                                    </div>
                                    <div className="verticle-line"></div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>HOKO: Hop Online Know Offline, just how the name goes it contains a comparison of 
                                        product prices Online with Offline stores near you. HOKO is One such Application that contains more services for your need and provides 
                                        instant access to the latest products from online websites and as well as offline stores.</p>
                                </div>

                            </div> 
                        </div>

                        {/* New section Open position */}
                        {/* <div className="container-fluid pad-zero">
                            <div className="row">
                            <div className="Open-position">
                                <h1>Open Position</h1>
                            </div> 
                            </div>
                            <div className="row bg-clor-white">
                             <div className="col-md-5 pl-5">
                                            <div className="job-content p-5">
                                               <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a> <br/><br/>
                                                <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a> <br/><br/>
                                                <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a> <br/><br/>
                                                <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a> <br/><br/>
                                                
                                                <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a> <br/>
                                                <a href="#"><h5>Customer Support Executive </h5>
                                                <p>Full time . Rs1.4L - 1.8L . No equity</p></a>
                                               
                                             </div>
                                             

                             </div>
                                <div className="col-md-5"></div>
                                <div className="col-md-2">
                                             <div className="job-content-ban p-5">
                                                <h5>Bangalore</h5><br/><br/><br/>
                                                <h5>Bangalore</h5><br/><br/><br/>
                                                <h5>Bangalore</h5><br/><br/><br/>
                                                <h5>Bangalore</h5><br/><br/><br/>
                                                <h5>Bangalore</h5><br/><br/><br/>
                                                <h5>Bangalore</h5><br/><br/><br/>
                                             </div>
                                
                                </div>
                            </div>
                                
                            

                        </div> */}
     </div>
    
    )
}
