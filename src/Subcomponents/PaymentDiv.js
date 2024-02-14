import React, { useState } from 'react'
import creditCard from '../Assets/creditcard.png'
import { data } from '../data'
import cardLogo from '../Assets/creditcard.png'
import TotalPayment from './TotalPayment'

const PaymentDiv = ({onSend}) => {
    const [cardName, setcardName] = useState('')
    const [cardNumber, setcardNumber] = useState('')
    const [expiryDate, setexpiryDate] = useState('')
    const [cvvNum, setcvvNum] = useState('')
  return (
    <div className='PaymentDivParent'>
          <div className="creditCardDiv">
              <div className="creditCardInner">
                <div className="CreditCradImagDiv">
                  <img src={creditCard} alt="CredictCard" />
                </div>
                <div className="CreditCardContent">
                    <p className='CreditCard'>Credit & debit cards</p>
                </div>
              </div>
              <div className="radioButton">
                 <input type="radio" name='radioButton' className='CustomRadio' value="CreditOption" />
              </div>
          </div>
          <div className="CreditCardLogoDiv">
          <div className="ImageContCreditCard" >
             {
                data.CreditCardLogo.map((element,index)=>(
                    <img src={element} alt={`images${index}`} key={index} />
                ))
             }              
          </div>
          </div>
          <div className="creditCardDetailsDiv">
              <div className="creditCardDetailsDivTop">
                     <div className="creditCardDetailsDivTopInner1">
                     <input type="text" name='cardName' value={cardName} onChange={(e)=>setcardName(e.target.value)} />
                    {cardName===''&& <label className='Placeholderlabel8'>Name on card <span>*</span></label>}
                     </div>
                     <div className="creditCardDetailsDivTopInner2">
                      <input type="text" name='cardNumber' value={cardNumber} onChange={(e)=>setcardNumber(e.target.value)} />
                      {cardNumber===''&& <label className='Placeholderlabel9'><img src={cardLogo} alt="CardLogo1" />Card Number <span>*</span></label>}
                     </div>
              </div>
              <div className="creditCardDetailsDivBottom">
                      <div className="creditCardDetailsDivBottomInner1">
                      <input type="text" name='expiryDate' value={expiryDate} onChange={(e)=>setexpiryDate(e.target.value)} />
                      {expiryDate===''&& <label className='Placeholderlabel10'>expiry Date <span>*</span></label>}
                      </div>
                      <div className="creditCardDetailsDivBottomInner2">
                      <input type="text" name='cvvNum' value={cvvNum} onChange={(e)=>setcvvNum(e.target.value)} />
                      {cvvNum===''&& <label className='Placeholderlabel11'>CVV/CVC<span>*</span></label>}
                      </div>
              </div>
          </div>
          <TotalPayment cnameSavePrice='TotalPaymentInner1' cnameSavePriceInner1='TotalPaymentInner1Top' cnameSavePriceInnerTop='TotalPaymentInner1Top1' cnameSavePriceInnerTop2='TotalPaymentInner1Top2' cnameSavePriceInner2Button='ConfirmAndPayButton' cnameButton='TotalPaymentInner2PaymentDiv' cnameLast='TotalPaymentInner1BotPaymentDiv' cnameParent='TotalpaymentParentdiv' OnSend={onSend}/>
    </div>
  )
}

export default PaymentDiv