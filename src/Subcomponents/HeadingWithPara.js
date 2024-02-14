import React from 'react'

const HeadingWithPara = ({text}) => {
  return (
    <div className='HeadingWithPara'>
        <h1>{text[0]}</h1>
        <p>{text[1]}</p>
    </div>
  )
}

export default HeadingWithPara