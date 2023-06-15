import React, {useState} from 'react'
import './index.css'

const Welcome = () => {
  const [subscribed, setSubscribed] = useState(false)

  const handleClick = () => {
    setSubscribed(!subscribed)
  }

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button className="subscribe-button" onClick={handleClick}>
        {subscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}

export default Welcome
