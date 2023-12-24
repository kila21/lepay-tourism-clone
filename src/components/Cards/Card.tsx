import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { CardProps } from "../../types/componentPropTypes/CardProp";

// max-width: 425 , card -width 314px, height: 360px

export const Card = (props: CardProps) => {
  const updateInitiCardPosition = () => {
    const width = window.innerWidth;
    if (props.cardNum === 0 && width <= 425) {
      return `translate3d(-60%,-20%, 0)`;
    } else if (props.cardNum > 0 && width <= 425) {
      return `translate3d(-60% + ${props.cardNum * 10}%, -20% + ${
        props.cardNum * 10
      }, 0)`;
    } else {
      return `translate3d(100%,100%, 0)`;
    }
  };
  const [cardPosition, setCardPosition] = useState(() => {
    return updateInitiCardPosition();
  });

  const handleScroll = () => {
    // max-width  425px
    let translateX = ``;
    let translateY = ``;
    let translate = ``;
    // const width = window.innerWidth;
    if (window.innerWidth <= 425) {
      translateX = `calc(${-60}% + ${props.cardNum * 70}% - ${
        window.scrollY * 0.9
      }px)`;
      translateY = `calc(${-20}% + ${props.cardNum * 90}% - ${
        window.scrollY * 0.7
      }px)`;
      translate = `translate3d(${translateX}, ${translateY}, 0) rotate(${
        props.cardNum * 10 - window.scrollY / 30
      }deg) scale(0.7, 0.7)`;
    } else if (window.innerWidth > 425 && window.innerWidth <= 768) {
      translateX = `calc(${-60}% + ${props.cardNum * 70}% - ${
        window.scrollY * 0.9
      }px)`;
      translateY = `calc(${-20}% + ${props.cardNum * 90}% - ${
        window.scrollY * 0.3
      }px)`;

      translate = `translate3d(${translateX}, ${translateY}, 0) scale(0.8, 0.8)`;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1440) {
      translateX = `calc(${-60}% + ${props.cardNum * 100}% - ${
        window.scrollY * 1.5
      }px)`;
      translateY = `calc(${-20}% + ${props.cardNum * 90}% - ${
        window.scrollY * 0.5
      }px)`;

      translate = `translate3d(${translateX}, ${translateY}, 0) scale(0.9, 0.9)`;
    } else if (window.innerWidth > 1440) {
      translateX = `calc(${-60}% + ${props.cardNum * 150}% - ${
        window.scrollY * 2.2
      }px)`;
      translateY = `calc(${-20}% + ${props.cardNum * 120}% - ${
        window.scrollY * 1.2
      }px)`;

      translate = `translate3d(${translateX}, ${translateY}, 0) scale(1, 1)`;
    }

    // translate = `translate3d(${translateX}, ${translateY}, 0) rotate(${
    //   props.cardNum * 10 - window.scrollY / 30
    // }deg) scale(0.7, 0.7)`;

    // Update card position based on scroll position
    setCardPosition(translate);
  };

  useEffect(() => {
    updateInitiCardPosition();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CardStyled style={{ transform: cardPosition }}>
      <CardArticleStyled $bc={props.backgroundColor} $backImg={props.backImg}>
        <CardImgStyled src={props.imgUrl} alt="card img" />
        <CardTitleStyled>{props.text}</CardTitleStyled>
      </CardArticleStyled>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: min(100% - 8vw * 2, 39rem);
  height: 300px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    1.3rem 0,
    calc(100% - 1.3rem) 0,
    calc(100% + 0.1rem) 1.3rem,
    calc(100% + 0.1rem) calc(100% - 1.3rem),
    calc(100% - 1.3rem) calc(100% + 0.1rem),
    1.3rem 100%,
    0 calc(100% - 1.3rem),
    0 1.3rem
  );

  @media (max-width: 425px) {
    width: 314px;
    height: 360px;
  }
  @media (max-width: 768px) and (min-width: 426px) {
    width: 380px;
    height: 430px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 325px;
    height: 380px;
  }
  @media (max-width: 1600px) and (min-width: 1025px) {
    width: 380px;
    height: 420px;
  }

  @media (max-width: 2560px) and (min-width: 1601px) {
    width: 512px;
    height: 572px;
  }
`;

const CardArticleStyled = styled.article<{ $bc: string; $backImg: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  height: 95%;
  background-image: ${(props) => props.$backImg && `url(${props.$backImg})`};
  clip-path: polygon(
    1.3rem 0,
    calc(100% - 1.3rem) 0,
    calc(100% + 0.1rem) 1.3rem,
    calc(100% + 0.1rem) calc(100% - 1.3rem),
    calc(100% - 1.3rem) calc(100% + 0.1rem),
    1.3rem 100%,
    0 calc(100% - 1.3rem),
    0 1.3rem
  );
  background-color: ${(props) => props.$bc || "blue"};
  padding: 20px;
  border: 1px solid white;
`;

const CardTitleStyled = styled.h3`
  width: 80%;
  word-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  color: white;
  line-height: 1.3;
`;

const CardImgStyled = styled.img`
  width: 10rem;
  border-radius: 50%;
`;
