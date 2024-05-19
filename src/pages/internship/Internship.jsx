import React from 'react'
import './Internship.css'
import InternShipIcon from '../../assets/internship-icon.png'

const InternShipData = []

const Internship = () => {
  return (
    <div className='internship-main'>
        <div className='internship-heading'>
        How does the Internship Program works ?
        </div>
        <div className='points-1'>
            <div className='point'>
                <img src={InternShipIcon} alt='icon' className='icon'/>
                <div> Learn from our structured pre recorded courses made by experts to meet industry needs </div>
            </div>
            <div className='point'>
                <img src={InternShipIcon} alt='icon' className='icon'/>
                <div> Learn from our structured pre recorded courses made by experts to meet industry needs </div>
            </div>
            <div className='point'>
                <img src={InternShipIcon} alt='icon' className='icon'/>
                <div> Learn from our structured pre recorded courses made by experts to meet industry needs </div>
            </div>
        </div>
        <div className='points-2'>
            <div className='point-2'>
                <img src={InternShipIcon} alt='icon' className='icon'/>
                <div> Learn from our structured pre recorded courses made by experts to meet industry needs </div>
            </div>
            <div className='point-2'>
                <img src={InternShipIcon} alt='icon' className='icon'/>
                <div> Learn from our structured pre recorded courses made by experts to meet industry needs </div>
            </div>
        </div>
        <div className='apply-now'>
            <div className='apply-now-btn'> Apply now for ₹ 2999 </div>
        </div>
    </div>
  )
}

export default Internship