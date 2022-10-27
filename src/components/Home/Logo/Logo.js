import './index.scss'
import logo from '../../../assets/images/logo-s.png'
import { useRef } from 'react'

export const Logo = () => {

  const bgRef = useRef()

  return (
    <div className='logo-container'>
      <img ref={bgRef} className='solid-logo' src={logo} alt='logo' />


    </div>
  )
}
