import React from 'react'
import piggyBank from '../Assets/piggyBank.jpeg'

const SavePrice = ({cname}) => {
  return (
    <div className={cname}>
    <img src={piggyBank} alt="piggyBank" />
    <p>You save price</p>
</div>
  )
}

export default SavePrice