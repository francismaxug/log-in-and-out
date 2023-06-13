import React from 'react'
import './Landing.css'
const Sidebar = ({backToMain}) => {
  return (
    <div className='side'>
      <button>Users</button>
      <button>Admi</button>
      <button className='call' onClick={backToMain}>Logout</button>
    </div>
  )
}

export default Sidebar
