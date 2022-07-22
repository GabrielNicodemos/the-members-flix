import "./ListHorizontal.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ListHorizontal = ({ title, items }) => {
  return (
    <div className="listHorizontal">
      <h2>{title}</h2>
      <div className="arrow-left--horizontal">
        <FiChevronLeft style={{ fontSize: 50 }} />
      </div>
      <div className="arrow-right--horizontal">
        <FiChevronRight style={{ fontSize: 50 }} />
      </div>
      <div className="listRowArea--horizontal">
        <div className="listRow--horizontal">
          {items.length > 0 &&
            items.map((item) => (
              <div key={item.id} className="itemRow--horizontal">
                <img height={200} src={item.url_banner} alt={item.title} />
                <div className="itemDetails--horizontal">
                  <h1>{item.title}</h1>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListHorizontal;
