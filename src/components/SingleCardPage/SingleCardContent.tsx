import styled from "styled-components";

interface single {
  information: {
    span: string;
    infoTitle: string;
    infoText: string;
    didKnow: string;
  };
}

export const SingleCardContent = (props: single) => {
  return (
    <SingleCardContentStyled>
      <div className="content-info">
        <span>{props.information.span}</span>
        <span>{props.information.infoTitle}</span>
        {props.information.infoText && <p> {props.information.infoText}</p>}
      </div>
      <div className="content-didKnow">
        <h5>Did you know...</h5>
        <p>{props.information.didKnow}</p>
      </div>
    </SingleCardContentStyled>
  );
};

const SingleCardContentStyled = styled.div`
  width: 100%;
  background-color: #fff;
  min-height: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 500px;
  .content-info {
    color: #1f218f;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
    align-items: center;
    span {
      display: block;
      width: 70%;
      &:nth-child(1) {
        font-weight: 900;
        font-size: 5rem;
        margin-bottom: 20px;
      }
      &:nth-child(2) {
        font-family: "FSP DEMO - Cervo Neue Neue";
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
    p {
      width: 70%;
      margin-top: 30px;
      font-weight: 100;
      opacity: 0.8;
      line-height: 1.5;
      word-spacing: 5px;
      font-family: "FSP DEMO - Cervo Neue Neue";
    }
  }

  .content-didKnow {
    margin-left: 80px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-top: 30px;
    border-radius: 30px;
    color: #e94f26;
    background: #fffaf8;
    width: 70%;
    min-height: 200px;
    h5 {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-family: "FSP DEMO - Cervo Neue Neue";
    }
    p {
      font-family: "Prospectus L Black";
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    padding-top: 350px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 550px;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    .content-info {
      width: 50%;
    }
    .content-didKnow {
      width: 35%;
      padding-right: 30px;
    }
    padding-top: 450px;
  }
`;
