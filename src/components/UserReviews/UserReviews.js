import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import ReviewR from "../ReviewR/ReviewR";



import './UserReviews.css';

const UserReviews = () => {

    const feedbacks = [
        {
            "name": 'Jalal Chowdhury',
            "address": 'Sylhet',
            "rating": 5,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Kalal Miah',
            "address": 'Comilla',
            "rating": 3,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Dalal Hussan',
            "address": 'Syl',
            "rating": 5,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'jalal',
            "address": 'Syl',
            "rating": 4,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'jalal',
            "address": 'Syl',
            "rating": 3,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Jalal',
            "address": 'Sylhet',
            "rating": 5,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Aalal',
            "address": 'Dhaka',
            "rating": 4,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Kalal',
            "address": 'Comilla',
            "rating": 3,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Dalal',
            "address": 'Sylhet',
            "rating": 5,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        },
        {
            "name": 'Jalal',
            "address": 'Syl',
            "rating": 4,
            "description": 'hcwdhc whwhcf hweihcf hewih ewwwf wefc wef wefc wecf wef wef wef we',
            "image": 'https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg'
        }
    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className="feedbacks">
            <div className="feedbacksContent">

                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>User Reviews </h1>
                <div className="Apply">
                    <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000}>
                        {feedbacks.map((feedback) => {
                            return <ReviewR feedback={feedback}></ReviewR>;
                        })}
                    </Carousel>
                </div>

            </div>
        </div>
    );
};

export default UserReviews;