import { Component } from 'react';
import './DestinationStyle.css'
import S1 from '../images/s1.jpg'
import S2 from '../images/s2.jpg'
import G1 from '../images/g1.jpg'
import G2 from '../images/g2.jpg'

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='image'>
                    <img alt='Switzerland' src={this.props.img1} />
                    <img alt='Switzerland' src={this.props.img2} />

                </div>
            </div>
        )
    }
}
export default DestinationData