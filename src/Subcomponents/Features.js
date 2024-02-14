import React from 'react'

const Features = ({text}) => {
  return (
    <div className='FeaturesParent'>
        <img src={text[0]} alt="ticketImage" />
        <p>{text[1]}</p>
    </div>
  )
}

export default Features