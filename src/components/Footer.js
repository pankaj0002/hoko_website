import React from 'react'
import '../assets/footer.css'
import delivery from '../assets/img/delivery.jpg'
import original from '../assets/img/original.jpg'
import back from '../assets/img/back.jpg'
import Navigate from './Navigate'
import Applications_footer from './Applications-footer'


export default function Footer() {
    return (
        <div className="container-fluid desktop-view footer pad-zero">
            {/* Section back to top row */}
            <div className="row back-2-top margin-zero">
                <div className="back-2-top-text">
                    Back to top
                </div>
            </div>
            {/* Section back to top row end */}

            {/* Footer list */}
            <div className="row footer-item-section margin-zero">
                        <div className="col-sm-12 col-md-3">
                            <div className="footer-list">
                                <ul><span>Get to Know Us</span>
                                <li><a href="#"className="">About us </a></li>
                                <li><a href="#"className="">Career </a></li>
                                <li><a href="#"className="">Contact Us </a></li>
                                    <li><a href="#"className="">Blog </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="footer-list">
                                <ul><span>Our Policy</span>
                                <li><a href="#"className="">Privacy Policy </a></li>
                                <li><a href="#"className="">Return Policy </a></li>
                                <li><a href="#"className="">Sitemap</a></li>
                                <li><a href="#"className="">Terms Of use </a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="footer-list">
                                <ul> <span>Connect with Us</span>
                                    <li><a href="#"className="">Facebook </a></li>
                                    <li><a href="#"className="">LinkedIn </a></li>
                                    <li><a href="#"className="">Instagram </a></li>
                                    <li><a href="#"className="">Twitter</a></li>
                                    <li><a href="#"className="">Youtube</a></li>
                                    {/* <li><a href="#"className="">HokoApp Download</a></li> */}


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 get-the-app">
                            <h4 className="mb-3">Get the App</h4>
                            <Applications_footer/>
                        </div>
            </div>{/*Row 1 end */}

            <div className="row footer2 margin-zero">
                <div className="footer2-items">
                    <p>Copyright &copy; Pricyfy Technologies Ltd. All Rights Reserved</p>
                </div>
            </div>
            
    </div>
            

            
    )
}
