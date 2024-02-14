import React, { useState } from 'react'
import { data } from '../data'

const QuestionsFaq = ({cname}) => {
    const [expandAnswer, setexpandAnswer] = useState(null)
    let duplicateAnswer=[...data.FaqAnswer]
    for(let i=0;i<4;i++){
        duplicateAnswer.push(...data.FaqAnswer)
    }
    const handler=(index)=>{
        setexpandAnswer((prevIndex)=>(prevIndex===index?null:index));
    }
  return (
    <div className={cname}>
        {
            data.FaqQuestion.map((question,index)=>(
                
               <div className="faqParentConatainerChild">
                 <div className="faqParentConatainerChildTop">
                    <p onClick={()=>handler(index)}>{expandAnswer===index?'X':'+'}</p>
                    <h3>{question}</h3>
                  </div>
                  {expandAnswer===index && <div className="faqParentConatainerChildBot"><p>{duplicateAnswer[index]}</p></div>}
           </div>

            ))
        }
    </div>
  )
}

export default QuestionsFaq