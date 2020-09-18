import LoadingSpinner from 'views/components/LoadingSpinner'
import React from 'react'
import './style.css'

const LoadingSpinnerBlur = (props) => {
  return (
    <div className={`LoadingSpinnerBlur ${props.className}`}>
      <LoadingSpinner className={'LoadingSpinnerBlur__Spinner'} color="#3858ad" size={60} speed={116} thickness={180}/>
    </div>
  )
}

export default LoadingSpinnerBlur
