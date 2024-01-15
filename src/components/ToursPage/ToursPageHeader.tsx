import styled from "styled-components";

export const ToursPageHeader = (props: {
  name: string;
  img: string;
  place: string;
}) => {
  return (
    <ToursPageHeaderStyled>
      <h1>
        <svg
          className="location-icon"
          width="24"
          height="24"
          fill="#1f218f"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12,3.25c-3.86,0-7,3.13-7,6.99,0,3.52,5.95,9.49,7,10.51,1.05-1.02,7-6.99,7-10.51,0-3.86-3.14-6.99-7-6.99Zm.17,9.8c-1.64,0-2.97-1.26-2.97-2.8s1.34-2.8,2.97-2.8,2.98,1.26,2.98,2.8-1.34,2.8-2.98,2.8Z"></path>
        </svg>
        {props.place}
      </h1>
      <h2>{props.name}</h2>
      <div>ALL YEAR ROUND</div>
      <img src={props.img} alt="image of tour" />
    </ToursPageHeaderStyled>
  );
};

const ToursPageHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  color: #1f218f;
  font-family: "Prospectus L Black", sans-serif;
  font-weight: 900;
  h1 {
    width: 50%;
    font-size: 1rem;
    margin-bottom: 30px;
    font-family: "FSP DEMO - Cervo Neue Neue", sans-serif;
    svg {
      margin-right: 20px;
      transform: translate(0, 20%);
    }
  }

  h2 {
    margin-bottom: 30px;
    font-weight: 900;
    font-size: 2.1rem;
  }

  div {
    font-family: "FSP DEMO - Cervo Neue Neue", sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
  }

  img {
    width: 120%;
    margin-left: 0;
    height: 350px;
  }

  @media (max-width: 768px) {
    margin-left: 40px;
    img {
      transform: translate(-15%, 0);
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 100px;
    img {
      width: 100%;
      height: 500px;
    }
  }
  @media (min-width: 1025px) {
    margin-left: 100px;
    h2 {
      width: 50%;
      font-size: 3rem;
    }
    img {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 500px;
    }
  }
`;
