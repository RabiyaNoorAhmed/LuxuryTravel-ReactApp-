import React from 'react'
import './TripStyle.css'
import TripData from './TripData'
import Card1 from '../images/card1.jpg'
import Card2 from '../images/card2.jpg'
import Card3 from '../images/card3.jpg'
import Card4 from '../images/card4.jpg'
import Card5 from '../images/card5.jpg'
import Card6 from '../images/card6.jpg'
import Card7 from '../images/card7.jpg'
import Card8 from '../images/card8.jpg'
import Card9 from '../images/card9.jpg'



const Trip = () => {
    return (
        <div className='trip'>
            <h1>Featured Journeys</h1>
            <p>Discover exclusive adventures and stunning destinations around the world.</p>
            <div className='tripcard'>
                <TripData
                    image={Card1}
                    heading='Tokyo, Japan'
                    text='Explore the vibrant heart of Japan where ancient traditions seamlessly blend with cutting-edge technology. Experience its bustling streets, exquisite cuisine, and serene temples.'
                />
                 <TripData
                    image={Card2}
                    heading='Cape Town, South Africa'
                    text='Discover the stunning beauty of Cape Town with its dramatic Table Mountain backdrop, vibrant cultural scene, and picturesque vineyards just a short drive away.'
                /> 
                <TripData
                    image={Card3}
                    heading='Paris, France'
                    text='Walk the romantic streets of Paris, soak in the art and culture, and enjoy world-renowned cuisine and shopping in the fashion capital of the world.'
                />
                 <TripData
                    image={Card4}
                    heading='Sydney, Australia'
                    text='Visit Sydney for its iconic Opera House, stunning harbor views, and vibrant outdoor lifestyle. Enjoy beaches, great dining, and a bustling arts scene.'
                /> 
                <TripData
                    image={Card5}
                    heading='Reykjavik, Iceland'
                    text='Embark on an adventure in Reykjavik, the gateway to Iceland’s dramatic landscapes, from geysers and volcanoes to the spectacular Northern Lights.'
                /> 
                <TripData
                    image={Card6}
                    heading='Machu Picchu, Peru'
                    text='Journey to the ancient Inca city of Machu Picchu, a breathtaking archaeological wonder that offers a glimpse into Peru’s rich history and stunning vistas.'
                />
                 <TripData
                    image={Card7}
                    heading='Venice, Italy'
                    text='Experience the enchanting city of Venice, where the canals echo with the history of the Venetian republic, complemented by stunning architecture and local Italian cuisine.'
                /> 
                <TripData
                    image={Card8}
                    heading=' Banff, Canada'
                    text='Explore the rugged beauty of Banff, nestled in the Canadian Rockies, offering year-round outdoor activities from skiing and snowboarding to hiking and boating in its famous turquoise lakes.'
                />
                 <TripData
                    image={Card9}
                    heading='Dubai, United Arab Emirates'
                    text='Marvel at Dubai’s architectural wonders and luxury, from the towering Burj Khalifa to expansive shopping malls and lavish resorts.'
                />
            </div>
        </div>
    )
}

export default Trip
