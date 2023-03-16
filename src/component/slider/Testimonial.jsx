import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import slide4 from "../../img/slide4.jpg";
const Testimonial = () => {
  const image = [
    slide1,
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
    "Sabnam",
    "Sonam",
  ];

  return (
    <>
      <div className="testimonial-container">
        <div className="our-client-heading section-3">
          <div className="heading-col">
            <h1> Real words by real people</h1>
            <p>
              It's great to get a pat on your back for a job well done. See what
              our clients have to say about us.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={120}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            grabCursor
          >
            {image.map((img, index) => {
              return (
                <SwiperSlide className="slide">
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
