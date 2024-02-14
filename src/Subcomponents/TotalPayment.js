import React from 'react'
// import piggyBank from '../Assets/piggyBank.jpeg'
import ilogo from '../Assets/infoButton.png'
import lockimage from '../Assets/lock.jpg'
import SavePrice from './SavePrice'

const TotalPayment = ({cnameSavePrice,cnameSavePriceInner1,cnameSavePriceInnerTop,cnameSavePriceInnerTop2,cnameSavePriceInner2Button,OnSend,cnameButton,cnameLast,cnameParent}) => {
  return (
    <div className={cnameParent}>
    <div className={cnameSavePrice}>
      <div className={cnameSavePriceInner1}>
             <div className={cnameSavePriceInnerTop}>
                  <h3><span className='TotalPaySpan1'>Total payable:</span> <span className='TotalPaySpan2'>$XXX</span> </h3>
             </div>
              <SavePrice cname={cnameSavePriceInnerTop2}/>
      </div>
      <div className={cnameLast}>
          <p>You will be charged in AED</p>
          <img src={ilogo} alt="ilogo1" />
      </div>

    </div>
    <div className={cnameButton}>
         <p>By clicking "confirm & pay",you agree to <span className='termandCondition'>Tickete's general term and conditions</span> and <span className='termandCondition'>cancellation policy</span> </p>
         <button className={cnameSavePriceInner2Button} onClick={OnSend}><img src={lockimage} alt="lock2" /> Confirm & Pay</button>
    </div>
</div>
  )
}

export default TotalPayment