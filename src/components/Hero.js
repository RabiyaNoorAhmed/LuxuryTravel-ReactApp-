import React from 'react'
import "./HeroStyles.css"
const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt='heroImg' src={props.heroImg}/>
        <div className='hero-text'>
            <h1>{props.title} <span>{props.titleSpan}</span></h1>
     
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
     
    </>
  )
}

export default Hero
