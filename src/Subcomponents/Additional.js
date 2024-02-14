import React, { useState } from 'react'

const Additional = () => {
    const [inputLabel, setinputLabel] = useState('')
    const [select, setselect] = useState('')
    const [Multiselect, setMultiselect] = useState('')
  return (
    <div className='Additional'>
        <div className="additionalupper">
             <div className="inputLabel">
             <input type="text" name='inputLabel' value={inputLabel} onChange={(e)=>setinputLabel(e.target.value)} />
             {inputLabel===''&& <label className='Placeholderlabel5'>input label <span>*</span></label>}
             </div>
             <div className="select">
             {select===''&& <label htmlFor="dropdown" className='Placeholderlabel6'>select<span>*</span></label>}  
                              <select value={select} className='CountryCodeDropDown2' onChange={(e)=>(setselect(e.target.value))}>
                                 <option value=""></option>
                                 <option value="INDIA">INDIA</option>
                                 <option value="DUBAI">DUBAI</option>
                                 <option value="EUROPE">EUROPE</option>
                               </select>
             </div>
        </div>
        <div className="additionalBottom">
        {Multiselect===''&& <label htmlFor="dropdown" className='Placeholderlabel7'>Multi select<span>*</span></label>}  
                              <select value={Multiselect} className='CountryCodeDropDown3' onChange={(e)=>(setMultiselect(e.target.value))}>
                                 <option value=""></option>
                                 <option value="INDIA">INDIA</option>
                                 <option value="DUBAI">DUBAI</option>
                                 <option value="EUROPE">EUROPE</option>
                               </select>
        </div>

    </div>
  )
}

export default Additional