import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ToursPageSlider = (props: { images: string[] }) => {
  const settings = {
    dots: false,
    infinite: false,
    lazyload: true,
    speed: 300,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipswipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ToursPageSliderStyled>
      {/* <Slider $index={currentIndex}> */}
      <Slider {...settings}>
        {props.images.map((img) => {
          return <Image key={img + 1} src={img} />;
        })}
      </Slider>
      {/* </Slider> */}
    </ToursPageSliderStyled>
  );
};

const ToursPageSliderStyled = styled.div`
  width: 100%;
  min-height: 150px;
  margin-top: 50px;
  .slick-slide > div {
    display: flex;
  }

  /* display: flex; */
  /* overflow: hidden; */
`;

const Image = styled.img`
  width: 80% !important;
  height: auto;
  margin: auto !important;
`;
