import styled from "styled-components";

export const ToursPageContent = (props: {
  content: { header: string; text: string[] }[];
}) => {
  return (
    <ToursPageContentStyled>
      {props.content.map((item: { header: string; text: string[] }) => {
        return (
          <>
            <h2>{item.header}</h2>
            {item.text.map((t) => {
              return <p key={t}>{t}</p>;
            })}
          </>
        );
      })}
    </ToursPageContentStyled>
  );
};

const ToursPageContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1f218f;
  margin-top: 70px;
  h2 {
    width: 70%;
    font-weight: 900;
    font-family: "Prospectus L Black", sans-serif;
    margin-top: 20px;
    font-size: 2.2rem;
  }
  p {
    width: 70%;
    margin-top: 20px;
    font-family: "Work Sans", sans-serif;
    line-height: 1.5;
    font-size: 1rem;
  }

  @media (min-width: 608px) {
    h2,
    p {
      width: 50%;
    }
  }
`;
