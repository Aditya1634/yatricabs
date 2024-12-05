import React from 'react'
import googlePlayIcon from "../../assets/SearchBooking/googleplay.png"; 
import appStoreIcon from "../../assets/SearchBooking/appstore.png"; 

const TransparentBilling = () => {
  return (
    <div className="bottomSection">
      <div className="feature">
        <h3>Transparent Billing</h3>
        <p>GPS Based Billing | No Km Tampering</p>
      </div>
      <div className="download">
        <p>Download Now!</p>
        <img src={googlePlayIcon} alt="Google Play" />
        <img src={appStoreIcon} alt="App Store" />
      </div>
      <div className="feature">
        <h3>No return fare</h3>
        <p>One-Way cab fare | No hidden charges</p>
      </div>
    </div>
  )
}

export default TransparentBilling
