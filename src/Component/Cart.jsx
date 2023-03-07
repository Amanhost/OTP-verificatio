import React, { useState } from 'react'
import OTP from './OTP'
import './OTP.css'
import TimeOut from './TimeOut'
const Cart = () => {
    const [getotp,setGetOtp]=useState();
    const[showotpmsg,setShowOtpMessage]=useState(false);
    const[showominut,setShowOtpminut]=useState(false);
    const [resendotp,setResendOTP]=useState()
    console.log("showotpmsg",showotpmsg,showominut);
    return (
        <>
            <div className='cart'>
                <div>

                <h3 className='head'>Verify OTP</h3><hr className='horizontalRow'></hr>

                {(showotpmsg===false || showominut===false)?(<div>
                 {getotp&& <p style={{color:"blue"}}>
                    Your Verification code is:
                    <strong>{getotp}</strong></p>}
                </div>):""}

                <div className='TimeOut'>
                    <TimeOut
                     getotp={getotp}
                     setShowOtpMessage={setShowOtpMessage}
                     setShowOtpminut={setShowOtpminut}
                      />
                </div>
                <div>
                    <OTP setGetOtp={setGetOtp}
                    showotpmsg={showotpmsg}
                    showominut={showominut}
                    />

                </div>
                </div>
            </div>
        </>
    )
}

export default Cart