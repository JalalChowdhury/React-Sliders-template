import React from 'react';
import './Review.css';
import StarRatings from 'react-star-ratings';

const Review = ({ review }) => {
    const { img, displayName, rating, reviewMsg } = review;
    return (
        <div className="review-card">
            {
                console.log("Data card o gese : ", review)
            }
            <div className="main-review">
                <div>
                    <div className="review-img-div">
                        <div className="review-img-div2">
                            {
                                img ? <img className="review-img" src={img} /> :
                                    <div className="review-name-text">
                                        <div>{displayName[0]}</div>
                                    </div>
                            }
                        </div>

                    </div>
                    <p className="reviewer-name">
                        {displayName}
                    </p>
                    <div className="rating-div" style={{ fontSize: "1rem" }}>
                        <StarRatings
                            rating={rating}
                            starDimension="20px"
                            starSpacing="2px"
                            starRatedColor='rgba(254, 130, 32,1)'
                            className='rating'
                        />
                    </div>
                    <p className="review-msg">
                        {reviewMsg}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;