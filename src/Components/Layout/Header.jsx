import React from 'react'
import logo from '../../assets/images/logo-bonus.svg'

import Score from './Score'

export default function header() {
  return (
    <div className="header box">
        <div className="header__logo">
            <img src={logo} alt="" />
        </div>
        <div className="header__score">
            <Score/>
        </div>
    </div>
  )
}
