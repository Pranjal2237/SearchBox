import React from 'react'
import './style.css'

const SearchBox = ({logo,name,email,Key,handleSet}) => {

  return (
    <div className='searchbox' onClick={()=>{handleSet(name,logo,email)}}>
      <div className='searchbox-logo'>
        <img src={logo} alt='logo' />
      </div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default SearchBox