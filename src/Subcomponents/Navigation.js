import React from 'react'
import logo from '../Assets/Screenshot (114) (1).png'
import lock from '../Assets/lock.jpg'
import qmark from '../Assets/QuestionMark.png'
import Back from '../Assets/backward.png'
const Navigation = () => {
  return (
    <div className='Navigation'>
        <div className="Header">
            <div className="HeaderInner">
                <img src={logo} alt="logo1" className='ImageLogo' />
                <img src={Back} alt="Logo2" className='ImageLogoForMobile' />
                <div className="Checkout">
                    <img src={lock} alt="lock1" className='LockImage'/>
                    <p className='CheckOutPTag'>checkout</p>
                </div>
                <div className="Help">
                    <img src={qmark} alt="qmarkLogo" className='Qmark' />
                    <p className='Helptext'>Help</p>
                </div>
            </div>
        </div>
        <div className="HeaderTime">
            <div className="HeaderTimeInner">
               <p className='Timer'>Hold your tickets for 30:00</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation