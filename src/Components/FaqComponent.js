import React from 'react'
import HeadingWithPara from '../Subcomponents/HeadingWithPara'
import { data } from '../data'
import ChatWithUs from '../Subcomponents/ChatWithUs'
import QuestionsFaq from '../Subcomponents/QuestionsFaq'

const FaqComponent = () => {
  return (
    <div className="faqParentContainer">
       <div className="faqParentContainerInner">
           <div className="faqParentContainerInner1">
                <div className="HeadingWithparaDivForMobile">
                <HeadingWithPara text={data.HeadingPara4}/>
                </div>
                 <QuestionsFaq cname='faqParentContainerInner2ForMobile'/>
                 <ChatWithUs/>
           </div>
            <QuestionsFaq cname='faqParentContainerInner2'/>
       </div>
  </div>
  )
}

export default FaqComponent