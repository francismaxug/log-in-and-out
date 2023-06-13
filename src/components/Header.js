import React from 'react'
import './Head.css'
const Header = () => {
  // const [date, setDate] = useState(new Date())
  const date = new Date()
  const local = navigator.language
  const options = {
    weekday: "long",
    day : "2-digit",
    month: "long",
    year : "numeric",
  }
  const intDate = new Intl.DateTimeFormat(
  local,options
  ).format(date)
//  setDate(intDate)

  return (
    <React.Fragment>
    <header className='head'>
      <h2>A Typical Page <span>{intDate}</span></h2>
    </header>
    </React.Fragment>
  )
}

export default Header
