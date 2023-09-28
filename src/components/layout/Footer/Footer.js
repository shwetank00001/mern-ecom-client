import React from 'react'
import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>

      <div className='leftFooter'>
        <h4>App coming soon</h4>
        <p>App</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className='midFooter'>
        <h1>Shwetank Ecommerce</h1>
        <h4>Best Outlet</h4>

        <p>&copy; Shwetank</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow us</h4>
        <a href='https://www.google.co.in/'>Link 1</a>
        <a href='https://www.google.co.in/'>Link 2</a>
        <a href='https://www.google.co.in/'>Link 3</a>

      </div>

    </footer>
  )
}

export default Footer