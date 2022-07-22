import "./ListVertical.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ListVertical = ({ title, items }) => {
  return (
    <div className="listVertical">
      <h2>{title}</h2>
      <div className="arrow-left--vertical">
        <FiChevronLeft style={{ fontSize: 50 }} />
      </div>
      <div className="arrow-right--vertical">
        <FiChevronRight style={{ fontSize: 50 }} />
      </div>
      <div className="listRowArea--vertical">
        <div
          className="listRow--vertical"
          style={{
            marginLeft: 0,
            width: items * 150,
          }}
        >
          <Swiper
            spaceBetween={2}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.length > 0 &&
              items.map((item) => (
                <SwiperSlide key={item.id} className="slide">
                  <div className="itemRow--vertical">
                    <img
                      width={300}
                      src={item.url_cover_vertical}
                      alt={item.title}
                    />
                    <div className="itemDetails--vertical">
                      <h1>{item.title}</h1>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ListVertical;
