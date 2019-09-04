import React from 'react'
import {Button} from 'reactstrap'


export default function Application() {
    return (
       
             <div className="app-store">
                        <Button variant="primary" className="btn-1" size="lg" active>
                            <div className="android">
                            <i className="fab fa-google-play"></i>
                        <div className="android-app">
                            {/* <div className="android-icon"></div> */}
                            <div className="anroid-text-1">
                                <span className="get-it-on">GET IT ON</span> <br/><span className="google-play-text">Google Play</span>
                            </div>

                        </div>
                            </div>
                        
                        {/* <i class="fab fa-apple"></i> */}
                        
                        </Button>
                         <Button variant="primary" className="btn-2 mt-2" size="lg" active>
                             <div className="android">
                         <i className="fab fa-apple"></i>
                        <div className="android-app">
                            {/* <div className="android-icon"></div> */}
                            <div className="anroid-text-2">
                                <span className="get-it-on">Download it on</span> <br/><span className="google-play-text">App Store</span>
                            </div>

                        </div>
                            </div></Button>
                </div>
       
    )
}
