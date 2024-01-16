import React from 'react'
import './style.css'
import { cross } from '../../assets'

const Button = ({logo,name,deleteUser,Key,email,count,max}) => {
  console.log(Key);
  return (
    <div className='button' style={{border:count===1&&Key===max && '1px solid #333'}} key={Key}>
    <div className='button-logo'>
      <img src={logo} alt='logo' />
    </div>
      <p>{name}</p>
      <div className='button-logo' onClick={()=>{deleteUser(name,email,logo)}}>
      <img src={cross} alt='cross' />
      </div>
    </div>
  )
}

export default Button