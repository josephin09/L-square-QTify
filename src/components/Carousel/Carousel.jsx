import React, { useEffect } from "react";
import styles from './Carousel.module.css';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({data}) =>{
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0, 1);
    }, [data]);
    return <></>
}

export default function Carousel({data, renderComponent}) {
    return(
        <div className={styles.wrapper}>
            <Swiper 
            styles={{padding: "0px 20px"}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={40}
            allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele,index) => (
                    <SwiperSlide key={index}>
                        {renderComponent(ele)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}