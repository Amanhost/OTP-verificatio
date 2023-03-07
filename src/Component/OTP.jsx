import React, { useEffect } from 'react'
import { useState } from 'react';

const OTP = ({ setGetOtp,showominut,showotpmsg }) => {
    const [otpdata,setotpData]=useState(false);

    const sendOTP = () => {
        var digit = "0123456789";
        var otp = '';
        for (let i = 0; i < 6; i++) {
            otp = otp + digit[Math.floor(Math.random() * 9)]
        }
        setGetOtp(otp)
        setotpData(true)


    }
    console.log("showominut,showotpmsg ",showominut,showotpmsg );

    return (
        <>
        <div>
         {(showominut==true && showotpmsg==true) &&(<div >
                   <p onClick={()=>sendOTP} style={{color:"blue" ,cursor:"pointer"}}>resend OTP</p>
                </div>)}
            <button className="submit" disabled={otpdata==true?true:false} onClick={sendOTP}>
                Send OTP
            </button>

            </div>
        </>
    )
}

export default OTP