import React from 'react'

const FeaturesBig = ({text}) => {
  return (
    <div className='FeaturesBigParent'>
        <img src={text[0]} alt="calendarLogo" />
        <div className="FeaturesBigInner">
           <div className="FeaturesBigInner1">
             <p className='FeaturesBigP1'>{text[1]}</p>
           </div>
            <div className="FeatureBigInner2">
                <p className='FeaturesBigP2'>{text[2]}</p>
            </div>
        </div>

    </div>
  )
}

export default FeaturesBig