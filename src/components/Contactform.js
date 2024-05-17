import React from 'react'
import './Contactform.css'
const Contactform = () => {
  return (
    <div className='form-container'>
    <h1>Get in Touch with Luxury</h1>
      <form>
        <input placeholder='Enter Your Name'/>
        <input placeholder='Enter Your Email'/>
        <input placeholder='Enter Your Subject'/>
        <textarea placeholder='Enter Your Message.....' rows={4}></textarea>
<button>Send Message</button>
      </form>
    </div>
  )
}

export default Contactform
