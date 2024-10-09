import React from 'react'

const Loader = ({line}) => {
    if(!line){
        return null}
        const lines=new Array(line).fill(1)

  return (
    <div className="animate-pulse">
        {lines.map((item, index) => (
            <div key={index} className="h-6 bg-gray-200 mt-3 mb-6 rounded "></div>
        ))}
    
    
  </div>
  )
}

export default Loader  