import React from 'react'
import IMG from '../picture/image1-1.png'
import Logo from '../picture/logo2.png' 
import styles from './Page.css'

const Page = () => {
  return (
    <div className="App-header">
    <img src={IMG} alt='' className='App-logo'/>
     <div className='text'>
     <h1 className='first'>Website under maintenance</h1>
     <p className='second'>Our site is currently undergoing scheduled maintenance.</p>
     <p className='second'>We should be back shortly. Thank you for your patience.</p>
     <img src={Logo} alt='' className='logo'/>
     </div>
  </div>
  )
}

export default Page
