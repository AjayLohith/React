import React from 'react'
import PropTypes from 'prop-types'
import myimage from './assets/picofme.png'
import './Styles/Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={myimage} className="resizeImage"alt="profile"></img>
        <h2 className='cardTitle'>{props.heading}</h2>
        <div className='cardText'>{props.text}</div>
    </div>
  )
}

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
}
Card.defaultProps={
  heading: "Card Title",
  text: "Default card text"
}

export default Card
