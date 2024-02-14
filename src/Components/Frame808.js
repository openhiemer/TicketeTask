import React, { useState } from 'react'
import NoticeDiv from '../Subcomponents/NoticeDiv'
import NoticeBove from '../Subcomponents/NoticeBove'
import { data } from '../data'
import HeadingWithPara from '../Subcomponents/HeadingWithPara'
import Additional from '../Subcomponents/Additional'
import PaymentDiv from '../Subcomponents/PaymentDiv'
import BookingSlide from '../Subcomponents/BookingSlide'
// import { EmailJSResponseStatus } from 'emailjs-com'
import emailjs from "@emailjs/browser";
import SavePrice from '../Subcomponents/SavePrice'

// import FaqComponent from './FaqComponent'

const Frame808 = () => {
    const [fullName, setfullName] = useState('')
    const [selectedOption, setselectedOption] = useState('')
    const [phNumber, setphNumber] = useState('')
    const [email, setemail] = useState('')
    const [confirmEmail, setconfirmEmail] = useState('')
    const sendemail=()=>{
        const template={
            fullName:fullName,
            selectedCountry:selectedOption,
            user_email:email
        }
       emailjs.send('service_nkva3bc','template_x76glac',template,'uHty4qgt7Y5Z_GDiL')
         .then((response)=>{
             console.log("email sent succesfully:",response)
             setfullName('')
             setemail('')
             setselectedOption('')
             setphNumber('')
             setconfirmEmail('')
         })
         .catch((e)=>{
            console.log("error:",e)
         })
        
    }

  return (
    <>
        <div className='Frame808'>
        <div className="Frame803">
            <div className="Frame796">
                <div className="ConfirmAndPay">
                    <NoticeBove text={data.confirmAndPay}  cname='ConfirmnadPayDiv'cname2='ConfirmAndPayHTag'/>
                    <BookingSlide cname='BookingSlideParentDivForMobile'/>
                    <NoticeDiv text={data.NoticeDiv} cname1='NoticeDiv' cname2='innerDivNoticeDiv' cname3='ImageLogoIButton'/>
                </div>
                <div className="enterYourDetails">
                    <HeadingWithPara text={data.HeadingPara1}/>
                    <div className="enteryourDetailsInner">
                        <div className="enteryourDetailsInner1">
                            <input type="text" name='fullName' value={fullName} onChange={(e)=>setfullName(e.target.value)} />
                           {fullName===''&& <label className='Placeholderlabel1'>full name <span>*</span></label>}
                        </div>
                        <div className="enteryourDetailsInner2">
                              <div className="countryCode">
                             {selectedOption===''&& <label htmlFor="dropdown" className='countrycodeLabel'>Country Code <span>*</span></label>}  
                              <select value={selectedOption} className='CountryCodeDropDown' onChange={(e)=>(setselectedOption(e.target.value))}>
                                 <option value=""></option>
                                 <option value="INDIA">INDIA</option>
                                 <option value="DUBAI">DUBAI</option>
                                 <option value="EUROPE">EUROPE</option>
                               </select>
                              </div>
                              <div className="phoneNumber">
                           {phNumber===''&& <label className='Placeholderlabel2'>Phone Number <span>*</span></label>}
                              <input type="text" name='PhoneNumber' value={phNumber} onChange={(e)=>setphNumber(e.target.value)} />
                              </div>
                        </div>
                        <div className="enteryourDetailsInner3">
                                 <div className="email">
                                    <input type="text" name='email' value={email} onChange={(e)=>setemail(e.target.value)} />
                                   {email===''&& <label className='Placeholderlabel3'>email <span>*</span></label>}
                                 </div>
                                 <div className="confirmEmail">
                                 <input type="text" name='confirmEmail' value={confirmEmail} onChange={(e)=>setconfirmEmail(e.target.value)} />
                                   {confirmEmail===''&& <label className='Placeholderlabel4'>confirm email <span>*</span></label>}
                                 </div>
                        </div>
                    </div>
                </div>
                 <div className="additonalInformation">
                    <HeadingWithPara text={data.HeadingPara2}/>
                    <Additional/>
                 </div>
                 <div className="CreditCardContainer">
                    <HeadingWithPara text={data.HeadingPara3}/>
                    <PaymentDiv onSend={sendemail}/>
                    {
                        data.PaymentLogo.map((element,index)=>(
                            <div className='ComingSoonDiv'>
                                <div className="ComingSoonInner1">
                                    <img src={element} alt={`images${index}`} key={index} />
                                    <p>Coming Soon</p>
                                </div>
                                <div className="radioDivComigSoon">
                                    <input type="radio" name='comingsoon' value="comingSoon"/>
                                </div>
                            </div>
                        ))
                    }
                 </div>
                 <div className="TotalPaymentParent">
                    <SavePrice cname='savedPriceParentForMobile'/>
                    <NoticeBove text={data.TotalPayment}  cname='ConfirmnadPayDivTotal'cname2='ConfirmAndPayHTagTotal'/>
                    <NoticeDiv text={data.NoticeDiv2} cname1='NoticeDiv2' cname2='innerDivNoticeDiv2' cname3='ImageLogoIButton2'/>
                 </div>
            </div>
            <div className="BookingSlide">
                <BookingSlide cname='BookingSlideParentDiv'/>
            </div>
        </div>
          {/* <FaqComponent/> */}
    </div>
         
    </>

  )
}

export default Frame808