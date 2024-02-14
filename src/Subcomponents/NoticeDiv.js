import React from 'react'
import infoLogo from '../Assets/infoButton.png'

const NoticeDiv = ({text,cname1,cname2,cname3}) => {
  return (
    <div className={cname1}>
        <div className={cname2}>
           
               {
                  text.map((element,index)=>(
                    <p className={`pTagInsideNoticeDiv${index+1}`}  key={index}>{element}</p>
               ))
             }
          

        </div>
        <div className={cname3}>
              <img src={infoLogo} alt="infoLogo" className='infoLogo' />
        </div>
    </div>
  )
}

export default NoticeDiv