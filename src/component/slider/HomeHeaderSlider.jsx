import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { slide1, slide2, slide3, slide4 } from "../../utils/imports";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.scss";
const HomeHeaderSlider = () => {
  const image = [slide1, slide2, slide3, slide4];
  const data = ["exercitationem", "veritatis", "sapiente", "voluptate"];
  const para = [
    "Lorem ipsum dolor sit amet consectetur adipisicing",
    "jkfkj",
    "Accusantium distinctio veniam eius",
    " numquam adipisci reprehenderit quo neque maxime, dolorum tempore",
    "ipsam qui ullam illo accusantium, exercitationem maxime rerum veritatis alias",
    "alias magnam, quis voluptate laboriosam quisquam in natus sapiente velit dicta soluta cumque! Iste, cum natus? Distinctio, nam!",
  ];
  return (
    <>
      <Swiper
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {image.map((img, index) => {
          return (
            <SwiperSlide>
              <img src={img} alt="" className="img" />
              <div className="overlay">
                <div className="overlay-col">
                  <h1>{data[index]}</h1>
                  <p>{para[index]}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default HomeHeaderSlider;
