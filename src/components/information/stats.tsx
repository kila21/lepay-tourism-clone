import styled from "styled-components";
import { StatLogo1 } from "./statLogo-1";
import { StatLogo2 } from "./statLogo-2";
import { StatLogo3 } from "./statLogo-3";

export const Stats = () => {
  return (
    <StatsStyled>
      <SingleStat>
        <StatLogo1 />
        <span>70</span>
        <h3>kilometres of shoreline</h3>
        <p>You can use the shores of the lakes for jogging or walking.</p>
      </SingleStat>
      <SingleStat>
        <StatLogo2 />
        <span>1150</span>
        <h3>kilometres of signed trails.</h3>
        <p>
          Explore the Pays des Lacs as a family, alone or in a group, and at
          your own pace.
        </p>
      </SingleStat>
      <SingleStat>
        <StatLogo3 />
        <span>100+</span>
        <h3>accommodation options.</h3>
        <p>
          Whether you want something unusual or comfortable, you will find what
          you need for your getaway.
        </p>
      </SingleStat>
    </StatsStyled>
  );
};

const StatsStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (min-width: 768px) and (max-width: 1024px) {
    div:nth-child(1) {
      transform: translate(100%, 0);
    }
    div:nth-child(2) {
      transform: translate(0, -40%);
    }
    div:nth-child(3) {
      transform: translate(100%, -80%);
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 700px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 70px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1700px) {
    align-items: center;
    justify-content: center;

    div:nth-child(1) {
      transform: translate(0, -50%);
    }
    div:nth-child(2) {
      /* transform: translate(0, -40%); */
    }
    div:nth-child(3) {
      transform: translate(0, -50%);
    }
  }
`;

const SingleStat = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  color: #1f218f;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  svg {
    height: 70px;
    margin: auto;
  }

  span {
    font-size: 84px;
    font-family: "Prospectus L Black";
  }
  h3 {
    font-family: "FSP DEMO - Cervo Neue Neue";
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
  }
  p {
    font-family: "Work Sans", sans-serif;
    line-height: 2;
    font-size: 16px;
    width: 90%;
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1700px) {
    width: 20%;
    margin-right: 50px;
    span {
      font-size: 110px;
    }
    p {
      font-size: 20px;
      width: 50%;
    }
  }
`;
