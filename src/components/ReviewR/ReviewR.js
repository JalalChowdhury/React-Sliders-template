import React from 'react';
import Items from './Items';
import './ReviewR.css';
import StarRatings from 'react-star-ratings';

// { feedback: { name, address, rating, description } }
const ReviewR = (props) => {
    const { name, address, rating, description, image } = props.feedback;
    return (
        <div>
            <img src={image} className="card-img-top rounded-circle review-img" alt="" />
            <div className="feedback">
                <Items>
                    <h4 className="headerTxt">{name}</h4>
                    <h5>{address}</h5>
                    <StarRatings
                        rating={rating}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor='rgba(254, 130, 32,1)'
                        className='rating'
                    />
                    <div className="d-flex justify-content-center align-items-center">
                        <p >{description}</p>
                    </div>

                </Items>
            </div>
        </div>
    )
};
export default ReviewR;

