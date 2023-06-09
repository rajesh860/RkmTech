import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { slide1, slide2, slide3, slide4 } from "../../utils/imports";

const Testimonial = ({ heading }) => {
  const image = [
    slide1,
    slide4,
    slide2,
    slide2,
    slide3,
    slide4,
    slide1,
    slide2,
    slide3,
    slide4,
    slide2,
    slide1,
  ];
  const clientName = [
    "Tabrej",
    "Himanshu",
    "Rajesh",
    "Anshu",
    "Komal",
    "Shruti",
    "Pawan",
    "Anjali",
    "Anjali",
    "Anjali",

    "Sabnam",
    "Sonam",
  ];

  // const swiper = new Swiper(".swiper", {
  //   // Default parameters
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
  // });

  return (
    <>
      <div className="testimonial-container">
        <div className="our-client-heading section-3">
          <div className="heading-col">
            <h1>{heading}</h1>
            <p>
              It's great to get a pat on your back for a job well done. See what
              our clients have to say about us.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            slidesPerView={5}
            spaceBetween={50}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grabCursor
          >
            {image.map((img, index) => {
              return (
                <SwiperSlide className="slide">
                  <div className="hui">
                    <div
                      className="client-profile"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                    <div className="info">
                      <h5>{clientName[index]}</h5>
                      <h6>Chief Product Officer @PaisaBazaar</h6>
                      <p>
                        “It was a pleasure to work with Square Boat, Gaurav
                        Gupta's organisation. Firstly the passion was very
                        evident. The quality of people in his team are very high
                        caliber. The level of ownership from start to finish was
                        tremendous.”
                      </p>
                    </div>
                  </div>

                  {/* <img src={img} alt="" /> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
