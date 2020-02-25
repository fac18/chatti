import React from 'react'
import AboutUsContent from '../AboutUsContent/AboutUsContent'
import { ReactComponent as MainImage } from '../../assets/svgs/image_hp1.svg'
import { ReactComponent as LogoBig } from '../../assets/svgs/logo_big.svg'
import { ReactComponent as ArrowDown } from '../../assets/svgs/arrow_down.svg'
import * as SC from './homepage.style'
import Button from '../button'
import { Link } from 'react-router-dom'

function Homepage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SC.Homepage>
      <div className="container-flex">
        <div className="logo-container">
          <LogoBig />
        </div>
        <div className="image-container">
          <MainImage />
        </div>
        <h3 className="header-text">
          Interactive ideas to inspire special moments with your little one
          everyday
        </h3>
        <Link to="/signup">
          <Button buttonText="Get started"></Button>
        </Link>
        <Link to="/login">
          <Button buttonText="I already have an account" secondary></Button>
        </Link>
        <ArrowDown />
        <p className="header_tip">Scroll down to learn some more</p>
      </div>
      <AboutUsContent />
      <footer>
        <Link to="/signup">
          <Button buttonText="Get started"></Button>
        </Link>
        <p>Chatti © 2020</p>
      </footer>
    </SC.Homepage>
  )
}

export default Homepage
