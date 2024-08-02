import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Scrollbar, A11y ,Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import itd from "../../assets/about/itd.png"
import cbtis from "../../assets/about/cbtis.png"
import js from "../../assets/about/js.png"
import python from "../../assets/about/phyton.png"
import node from "../../assets/about/node.png"
import express from "../../assets/about/express.png"
import react from "../../assets/about/react.png"
import wordpress from "../../assets/about/wordpress.png"
import postgresql from "../../assets/about/postgresql.png"
import brain from "../../assets/about/brain.png"
import Arrow from "../../assets/Arrow.svg";
export default function Carousel() {
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        navigation={true}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        effect={"cards"}
      >
        <SwiperSlide>
          <img width={500} height={400} src={cbtis} alt="Cbtis" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={itd} alt="itd" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={js} alt="js" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={python} alt="python" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={node} alt="node" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={express} alt="express" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={react} alt="react" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={wordpress} alt="wordpress" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={postgresql} alt="postgresql" />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} height={400} src={brain} alt="brain" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  @media (max-width: 70em) {
    height: 60vh;
    padding:15px 0;
    
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
    
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after{
      display:none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }

  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    transform:rotate(180deg);
    &:after{
      display:none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }

  }
`;
