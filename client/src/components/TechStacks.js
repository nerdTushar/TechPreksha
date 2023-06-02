import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const TechStacks = () => {
  return (
    <>
      <div className="flex justify-end py-8 px-12">
        <NavLink to="/">
          <AiOutlineClose className="text-3xl font-bold cursor-pointer" />
        </NavLink>
      </div>
      <h1 className="text-5xl text-center">Technologies & Stacks</h1>
      <div className="pt-20 md:pb-20 pb-10">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        loop={true}
        className="md:mb-20 mb-10 md:h-[500px] h-52"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek1.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek2.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek3.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek4.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek5.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek6.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek7.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/techprek8.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="flex justify-center md:pb-32 pb-20">
      <div className="md:w-2/5 w-full px-4 md:px-0">
      <Swiper spaceBetween={10} centeredSlides={true}
             autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
             pagination={{ clickable: true, }}
             navigation={true}
             loop={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper rounded-3xl md:h-96 h-80 md:scale-125"
         >
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/android1.jpg"
            alt="slide 1"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/android2.jpg"
            alt="slide 2"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/android3.jpg"
            alt="slide 3"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/android4.jpg"
            alt="slide 4"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/android5.jpg"
            alt="slide 4"
         />
         </SwiperSlide>
        </Swiper> 
      </div>
      </div>
    </>
  )
}

export default TechStacks
