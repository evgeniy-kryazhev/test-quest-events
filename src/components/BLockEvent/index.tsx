import "./index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef } from "react";
import { FC } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./components/EventCard";

interface IContainerProps {}

const BLockEvent: FC<IContainerProps> = ({}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container">
      <div>
        <div>
          <div className="header">
            <h1>Исторические даты</h1>
          </div>
        </div>
        <div style={{marginLeft: '80px', marginRight: '80px'}}>
          <div>
            <div className="swiper-buttons">
              <div className="swiper-button" ref={navigationPrevRef}>
                2
              </div>
              <div className="swiper-button" ref={navigationNextRef}>
                1
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              freeMode={true}
              spaceBetween={0}
              slidesPerView={3}
            >
              <SwiperSlide>
                <EventCard title="2015" body="3 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"/>
              </SwiperSlide>
              <SwiperSlide>
                <EventCard title="1" body="123"/>
              </SwiperSlide>
              <SwiperSlide>
                <EventCard title="1" body="123"/>
              </SwiperSlide>
              <SwiperSlide>
                <EventCard title="1" body="123"/>
              </SwiperSlide>
              <SwiperSlide>
                <EventCard title="1" body="123"/>
              </SwiperSlide>
              <SwiperSlide>
                <EventCard title="1" body="123"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLockEvent;
