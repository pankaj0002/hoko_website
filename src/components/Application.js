import React, { Component } from 'react'
import {Button} from 'reactstrap'


export default  class Application extends Component {

    handleClick=()=>{
        
    }

    render(){

        return (
       
            <div className="app-store">
                     <a href="https://play.google.com/store/apps/details?id=com.shopping.pricyfy" target="_blank"><Button variant="primary"  className="btn-1" size="lg" active>
                           <div className="android">
                           <i className="fab fa-google-play"></i>
                       <div className="android-app">
                           {/* <div className="android-icon"></div> */}
                           <div className="anroid-text-1">
                               <span className="get-it-on">Download on the</span> <br/><span className="google-play-text">Google Play</span>
                           </div>

                       </div>
                           </div>
                       
                       {/* <i class="fab fa-apple"></i> */}
                       
                       </Button></a> 
                     <a href="" target="_blank"><Button variant="primary" className="btn-2" size="lg" active>
                            <div className="android">
                        <i className="fab fa-apple"></i>
                       <div className="android-app">
                           {/* <div className="android-icon"></div> */}
                           <div className="anroid-text-2">
                               <span className="get-it-on">Download on the</span> <br/><span className="google-play-text">App Store</span>
                           </div>

                       </div>
                           </div></Button></a>
               </div>
      
   )
}

    }
