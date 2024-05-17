import React from 'react'
import './FooterStyle.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Luxury Travel</h1>
                    <p>Experience the Extraordinary.</p>
                </div>
                <div>
                    <a href='/'> 
                    <i className="fa-brands fa-facebook"></i> 
                    </a>
                    <a href='/'>
                    <i className="fa-brands fa-instagram"></i>
                     </a>
                    <a href='/'>
                     <i className="fa-brands fa-linkedin"></i>
                     </a>
                    <a href='/'>
                     <i className="fa-brands fa-square-twitter"></i>
                     </a>
                </div>

            </div>
            <div className='bottom'>
                <div>
                    <h4>About Us</h4>
                    <a href='/'>Company Overview</a>
                    <a href='/'>Meet the Team</a>
                    <a href='/'>Careers</a>
                    <a href='/'>Press & Awards</a>
                    <a href='/'>Sustainability Initiatives</a>

                </div>
                <div>
                    <h4>Destinations</h4>
                    <a href='/'>Exclusive Resorts</a>
                    <a href='/'>Private Retreats</a>
                    <a href='/'>City Breaks</a>
                    <a href='/'>Adventure Tours</a>
                    <a href='/'>Cruise Escapes</a>

                </div>
                <div>
                    <h4>Client Services</h4>
                    <a href='/'>Personal Travel Planning</a>
                    <a href='/'>Private Jet Services</a>
                    <a href='/'>Yacht Chartering</a>
                    <a href='/'>24/7 Support</a>
                    <a href='/'>Luxury Concierge Services</a>

                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href='/'>Contact Us</a>
                    <a href='/'>FAQs</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Sitemap</a>

                </div>
            </div>

        </div>
    )
}

export default Footer
