import styled, { keyframes } from "styled-components";
import { ToursType } from "../../types/JsonTypes/ToursType";

export const SingleCardTour = (props: ToursType) => {
  return (
    <SingleCardTourStyled $backImg={props.img}>
      <h3>{props.name}</h3>
      <h4>
        <svg
          className="location-icon"
          width="24"
          height="24"
          fill="#fff"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12,3.25c-3.86,0-7,3.13-7,6.99,0,3.52,5.95,9.49,7,10.51,1.05-1.02,7-6.99,7-10.51,0-3.86-3.14-6.99-7-6.99Zm.17,9.8c-1.64,0-2.97-1.26-2.97-2.8s1.34-2.8,2.97-2.8,2.98,1.26,2.98,2.8-1.34,2.8-2.98,2.8Z"></path>
        </svg>
        {props.place}
      </h4>
    </SingleCardTourStyled>
  );
};

const fadeIn = keyframes`
  from {
    background-position: 0 100%;
  }
  to {
    background-position: 0 0;
    background-color: #1f218f;
  }
`;

const fadeIntext = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-100px);
    opacity: 1;
  }
`;

const SingleCardTourStyled = styled.div<{ $backImg: string }>`
  border-radius: 20px;
  background-image: ${(props) => `url(${props.$backImg})`};
  background-size: cover;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
  position: relative;

  &:hover {
    background: url(https://www.lepaysdeslacs.be/static/img/misc/cards/activity-card_bg.svg)
      no-repeat 50% 80% / cover;

    animation: ${fadeIn} 1.5s ease-in-out forwards;
    h3 {
      animation: ${fadeIntext} 1.5s ease-in-out forwards;
    }
    h4 {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(0deg, #161817 20%, rgba(22, 24, 23, 0) 50%);
  }
  h3 {
    text-transform: uppercase;
    width: 90%;
    text-align: center;
    font-size: 22px;
    line-height: 1.43;
    font-weight: 600;
    z-index: 1;
    font-family: "FSP DEMO - Cervo Neue Neue";
  }

  h4 {
    width: 90%;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    z-index: 1;
    font-family: sans-serif;
    .location-icon {
      position: relative;
      margin-right: 20px;
      transform: translate(-60%, -55%);
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 400px;
  }

  @media (min-width: 769px) and (max-width: 1180px) {
    width: 40%;
    height: 400px;
    margin-right: 20px;
  }
  @media (min-width: 1181px) {
    width: 20%;
    height: 400px;
    margin-right: 20px;
  }
`;
