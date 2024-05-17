import React from 'react'
import './DestinationStyle.css'
import S1 from '../images/s1.jpg'
import S2 from '../images/s2.jpg'
import G1 from '../images/g1.jpg'
import G2 from '../images/g2.jpg'

import DestinationData from './DestinationData'


const Destination = () => {
    return (
        <div className='destination'>
            <h1>Discover Exquisite Destinations</h1>
            <p>Explore the world's most breathtaking locales, each curated for unmatched luxury and unique experiences.</p>
            <DestinationData
            className="first-des"
                heading="Switzerland: Luxury Amidst the Alps"
                text="Embrace the pinnacle of Alpine elegance in Switzerland, a destination known 
                for its majestic landscapes and sophisticated living. Indulge in luxury chalets with
                 breathtaking mountain views, world-class skiing, and spa retreats. Enjoy gourmet dining, 
                 exclusive shopping in Zurich, and private tours through picturesque villages and pristine lakes."
                img1={S1}
                img2={S2}

            />
            <DestinationData
            className="first-des-reverse"
                heading="Santorini: Elegance on the Aegean"
                text="Experience the quintessence of Mediterranean luxury in Santorini, with its stunning sunsets and iconic blue-domed churches. This exquisite island combines natural beauty with refined Greek hospitality. Enjoy bespoke tours of ancient ruins, savor gourmet dining atop cliffs overlooking the sea, and relax in exclusive suites that offer sweeping views of the Aegean."
                img1={G1}
                img2={G2}

            />
        </div>
    )
}

export default Destination
