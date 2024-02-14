import React from 'react'
import Star from '../Assets/starLogo.png'
import Features from './Features'
import { data } from '../data'
import FeaturesBig from './FeaturesBig'
const SliderCardDetail = () => {
  return (
    <div className='SliderCardDetailParent'>
        <div className="SliderCardDetailTop">
              <div className="SliderCardDetailTop1">
                  <img src={Star} alt="Star" />
                  <p className='Kptag'>4.9(4.5k) .</p>
                  <p className='category'>{'<category>'}</p>
              </div>
              <div className="SliderCardDetailTop2">
                  <p>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
              </div>

        </div>
        <div className="SliderCardDetailtopBot">
            <Features text={data.FeaturesData1}/>
            <FeaturesBig text={data.FeaturesData2}/>
            <FeaturesBig text={data.FeaturesData3}/>
            <Features text={data.FeaturesData4}/>
            
        </div>
        <div className="SliderCardDetailBot">

        </div>
    </div>
  )
}

export default SliderCardDetail