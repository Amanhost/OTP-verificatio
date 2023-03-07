import React, { useEffect, useState } from 'react'
import './OTP.css'
const TimeOut = ({
    getotp,
    setShowOtpMessage,
    setShowOtpminut,
}) => {
    const [input, setinput] = useState();
    const [minut, setMinut] = useState(1);
    const [second, setSecond] = useState(30);
    let otp = []
    useEffect(() => {
        const interval = setInterval(() => {

            if (second > 0) {
                setSecond(second - 1)
            }

            if (second == 0) {
                if (minut == 0) {
                    clearInterval(interval)
                    setShowOtpminut(true)
                }else{
              setSecond(59)
              setMinut(minut-1)

                }
                setShowOtpMessage(true)
            }
        },1000)
        return (()=>{
clearInterval(interval)
        })

    }, [second])
    console.log();
    return (
        <>

            <div>
               {input?.length===6&& <div>
                {input==getotp?<p style={{color:"Green"}}>successfully verified OTP</p>:<p style={{color:"red"}}>Iinvalid OTP...!!!!</p>}
                </div>}
                {otp && <input
                    placeholder="Enter TOP"
                    type="input"
                    value={input}
                    maxLength="6"
                    onChange={(e) => setinput(e.target.value)} />}
            </div><br></br>
           {minut>0 || second>0?<div className='d-flex gap-1 justify-content-center time'><br></br>
                <div>
                   {getotp&& <p>Time Remaining:<strong>{minut<10 ?`0${minut}`:minut}:{second<10?` 0${second}`:second }</strong></p>}
                </div>

            </div>:"Didn't receive OTP...?"}

        </>
    )
}

export default TimeOut