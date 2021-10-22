import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ConnectStreams from '../ConnectMe';
import MA from '../MA';

import './forms.css';
import Footer from '../Footer';
class ThankYou extends Component {
    render() {

      const urlSearch = window.location.search;

      const urlParams = new URLSearchParams(urlSearch);

      const firstName = urlParams.get('first_name');

      const phone = urlParams.get('phone_home');

      const tele = document.getElementById('tele').value;

      console.log('tele value is ' + tele)

      console.log(phone)
        return (

          
            <div>

                <div className="bg-blue-500 headerText justify-center align-middle text-center h-screen">
                    <h2>Get Your Free Business Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:mx-auto sm:overflow-hidden m-12  content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className=" pt-1">
            <div className=" mb-2 items-center justify-between">
              
              <div className="text-center justify-center align-center">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 content-center justify-center">
                  {firstName}, You Are On Your Way To Saving!
                </span> 
                <h2 className="text-lg font-bold inline-block pt-10"> A Quantum Assurance Agent will be with you shortly!</h2>
                <p>If now isn't a good time to talk to an Agent about getting the best price on insrance for your business, you can call us at <a href="tel:8552045980"><b>(855) 204-5980</b> </a>at your convenience. We look foward to helping you save.
 </p>
              </div>
            </div>
          
          </div>


         

          </div>. 


          </div>
<Footer />
          </div>
  
        )
    }
}

export default withRouter(ThankYou)