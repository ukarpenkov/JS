import React from 'react'
import prealoader from './../../../assets/images/loading.svg'

let Preloader: React.FC = (props) => {
  return (
    <div>
      <img src={prealoader} />
    </div>
  )
}

export default Preloader
