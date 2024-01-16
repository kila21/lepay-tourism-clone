import styled from "styled-components";
import { Logo } from "../header/Logo";

export const FooterNewslater = () => {
  return (
    <FooterNewslaterStyled>
      <div>
        <Logo color="white" />
        <h3>
          Subscribe to our newsletter to receive tips about the Pays des Lacs
        </h3>
      </div>
      <InputStyled type="email" placeholder="Your e-mail address…" />
      <small>
        You will be subscribed to the Pays des Lacs Tourism Office’s newsletter.
        You can change your mind at any time by clicking the ‘Unsubscribe’ link
        in the footer of any email you receive from us. Learn more about our
        Privacy Policy.
      </small>
    </FooterNewslaterStyled>
  );
};

const FooterNewslaterStyled = styled.div`
  width: 100%;
  background-color: #1f218f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  div {
    display: flex;
    align-items: center;
    margin: 50px 20px;
    width: 80% !important;

    h3 {
      font-family: "Prospectus L Black", sans-serif;
      font-size: 20px;
      margin-left: 30px;
      width: 70%;
    }
  }
  small {
    color: hsla(0, 0%, 100%, 0.7);
    width: 80%;
    line-height: 1.65;
    font-size: 0.9rem;
    margin-bottom: 30px;
    font-family: "Work Sans", sans-serif;
  }
  @media (min-width: 950px) {
    min-height: 700px;
  }
`;

const InputStyled = styled.input`
  width: 80%;
  height: 65px;
  position: relative;
  border-radius: 50px;
  outline: none;
  border: none;
  padding-left: 30px;
  font-size: 17px;
  color: #1f218f;
  font-weight: 600;
  &::placeholder {
    color: #1f218f;
  }
  &:focus {
    border: 3px solid #e94f26;
  }
  margin-bottom: 30px;
`;
