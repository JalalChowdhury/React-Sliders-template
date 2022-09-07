import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Container } from "react-bootstrap";
// import BlueSpinner from "../../Shared/Spinner/Spinner";
import Review from "./Review/Review";

SwiperCore.use([EffectCoverflow, Pagination]);

const Reviews = () => {

    // indexe.js theke React Mode a div replace kore dite hobe -> Slider ar jonno

    const reviews = [
        {
            "key": 1,
            "displayName": "Somapika Das",
            "rating": 4,
            "img": "https://i.ibb.co/GM6bxLT/reviews-4.jpg",
            "reviewMsg": " jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri ",
        },
        {
            "key": 2,
            "displayName": "Jalal Chowdhury",
            "rating": 5,
            "img": "https://i.ibb.co/hC8myCn/151495494-1368433020159233-4901087587933473771-n.jpg",
            "reviewMsg": " jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri  ",
        },
        {
            "key": 3,
            "displayName": "Ashab Chowdhury",
            "rating": 4.5,
            "img": "https://i.ibb.co/LnLVBRP/151731346-446754869702415-2181325967843279804-n.jpg",
            "reviewMsg": " jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri ",
        },
        {
            "key": 5,
            "displayName": "Sumaiha Chowdhury",
            "rating": 4,
            "img": "https://i.ibb.co/mqFL5Rd/images.jpg",
            "reviewMsg": " jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri ",
        },
        {
            "key": 3.5,
            "displayName": "Ashraful Chowdhury",
            "rating": 4,
            "img": "https://i.ibb.co/dB5nc8S/275185525-3106390506300624-2732139981625977316-n.jpg",
            "reviewMsg": " jhffd dfhedj hhejh erherjr hverr  errfhverko errjveri ioerjv erjv ererivj jewri ",
        }
    ]
    console.log(reviews.length);

    return (
        // <BlueSpinner></BlueSpinner>
        reviews.length === 0 ? <p>loading</p> :
            <Container>

                <h2 className="banner-quote" style={{ fontSize: '2.4rem', textAlign: "center", marginBottom: "3rem", marginTop: "3rem" }}>
                    Reviews
                </h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,        // Slide rotate in degrees
                        "stretch": -50,      // Stretch space between slides (in px)
                        "depth": 100,     // Depth offset in px (slides translate in Z 
                        "modifier": 1,       // Effect multiplier
                        "slideShadows": false // Enables slides shadows
                    }}
                    loop={true}
                    pagination={true}
                    className="mySwiper">
                    {
                        reviews.map((review) => {
                            return (
                                <SwiperSlide className="slider-custom" >
                                    {/* <h1>Ami Asi </h1> */}
                                    <Review review={review} />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>

            </Container>
    );
};

export default Reviews;