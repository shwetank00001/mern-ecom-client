import React from 'react'
import ReactStars from 'react-rating-stars-component'
import profilePng from '../../images/Profile.png'

const ReviewCard = ({ review }) => {
    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
      };
    
  return (
    <div className='reviewCard'>
    <img src={profilePng}/>
    <p>{review.name}</p>
    <ReactStars {...options}/>    
    </div>
  )
}

export default ReviewCard