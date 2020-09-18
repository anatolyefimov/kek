import {SpinnerCircular} from 'spinners-react'
import React from 'react'

const LoadingSpinner = (props) => {
  return (
    <SpinnerCircular className={props.className} color="#3858ad" size={60} speed={116} thickness={180}/>
  )
}

export default LoadingSpinner
