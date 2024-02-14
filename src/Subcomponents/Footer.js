import React from 'react'
import TicketeLogo from '../Assets/Screenshot (115) (1).png'
import HeartLogo from '../Assets/heartLogo.png'
const Footer = () => {
  return (
    <div className='FooterParent'>
        <div className="FooterTop">
            <div className="FooterTopInner">
                <img src={TicketeLogo} alt="logo12" />
            </div>
        </div>
        <div className="FooterBottom">
              <div className="FooterBottomInner">
                  <div className="FooterBottomInner1">
                      <p>Made with</p>
                      <img src={HeartLogo} alt="Heart" />
                  </div>
                  <div className="FooterBottomInner2">
                        {
                            [". Privacy Policy",". Terms and Usage",". Cancellation policy",". Sitemap"].map((elements,index)=>(
                                <p className='Footertags' key={index}>{elements}</p>
                            ))
                        }
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Footer