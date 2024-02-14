import React from 'react'
import chatImage from '../Assets/ChatImage.png'
const ChatWithUs = () => {
  return (
    <div className='ChatWithUs'>
        <div className="ChatWithUs1">
            <p>Still need Help? We're here for you.</p>
            <button>Chat With Us</button>
        </div>
        <div className="ChatWithUs2">
             <img src={chatImage} alt="ChatImage" />
        </div>
    </div>
  )
}

export default ChatWithUs