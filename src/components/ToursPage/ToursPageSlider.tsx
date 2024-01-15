import { useEffect, useState } from "react";
import styled from "styled-components";

export const ToursPageSlider = (props: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }
      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevState) => {
      if (prevState + 1 < props.images.length) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevState) => {
      if (prevState - 1 >= 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  return (
    <ToursPageSliderStyled>
      <Slider $index={currentIndex}>
        {props.images.map((img) => {
          return <Image key={img + 1} src={img} />;
        })}
      </Slider>
    </ToursPageSliderStyled>
  );
};

const ToursPageSliderStyled = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div<{ $index: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  /* justify-content: center; */
  transition: transform 0.5s ease-in-out;
  @media (max-width: 400px) {
    transform: ${(props) => `translateX(${-props.$index * 90}%)`};
  }
  @media (min-width: 401px) and (max-width: 768px) {
    transform: ${(props) => `translateX(${-props.$index * 85}%)`};
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    transform: ${(props) => `translateX(${-props.$index * 77}%)`};
  }
  @media (min-width: 1025px) {
    transform: ${(props) => `translateX(${-props.$index * 40}%)`};
  }
  @media (min-width: 1600px) {
    transform: ${(props) => `translateX(${-props.$index * 20}%)`};
  }
`;

const Image = styled.img`
  width: 80%;
  margin-right: 30px;
  @media (min-width: 1025px) {
    width: 45%;
  }
`;
