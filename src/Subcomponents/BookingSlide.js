import React from 'react'
import ImageSlider from './ImageSlider'
import SliderCardDetail from './SliderCardDetail'
import TotalPayment from './TotalPayment'

const BookingSlide = ({cname}) => {
  return (
    <div className={cname}>
          <div className="BookingSlideParentDivInner1">
               <div className="BookingSlideParentDivInner1Top">
                     <ImageSlider/>
                     <SliderCardDetail/>
               </div>
               <div className="BookingSlideParentDivInner1Bot">
                 <div className="BookingSlideParentDivInner1Bot1">
                    <p className='ViewPayment'>View payment summary</p>
                    <p className='PlusIcon'>+</p>
                 </div>

               </div>
          </div>
          <div className="BookingSlideParentDivInner2">
                 <TotalPayment cnameSavePrice='TotalPaymentInner1BookingSlide' cnameSavePriceInner1='TotalPaymentInner1TopBookingSlide' cnameSavePriceInnerTop='TotalPaymentInner1Top1BookingSlide' cnameSavePriceInnerTop2='TotalPaymentInner1Top2BookingSlide' cnameSavePriceInner2Button='ConfirmAndPayButtonBookingSlide' cnameButton='TotalPaymentInner2' cnameLast='TotalPaymentInner1Bot' cnameParent='TotalpaymentParentdivBookingSlide'/>
          </div>
    </div>
  )
}

export default BookingSlide