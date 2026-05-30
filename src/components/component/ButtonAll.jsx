import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ButtonAll({link,text}) {
  return (<>

  <div className='allbtn'>
    <NavLink to={link}>
    <div className='allbtn-in'>
      <Link to={link}>{text}</Link>
    </div>
    </NavLink>
  </div>
  
  </>
  )
}
