import React from 'react'
import "../Dashboard/Dashboard.css"
const MetricsCard = ({ value , Title}) => {
  return (
      <div className='company-card'>
        <p className='company-value'>{value}</p>
        <p className='company-title'>{ Title }</p>
      </div>
  )
}

export default MetricsCard