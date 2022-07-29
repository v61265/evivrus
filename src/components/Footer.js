import styled from "styled-components";
import logo from "../asstes/logo-white.png";
import fb from "../asstes/fb.svg";
import mail from "../asstes/mail.svg";
import { wording } from "../constants/default.js";

const Wrapper = styled.div`
  background: #000;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  img {
    height: 40px;
    ${({ theme }) => theme.media.md} {
      height: 80px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  a {
    width: 27px;
    height: 27px;
    ${({ theme }) => theme.media.md} {
      width: 48px;
      height: 48px;
    }
  }

  a + a {
    margin-left: 27px;
  }
`;

export default function Footer() {
  const { footer } = wording;
  return (
    <Wrapper>
      <img src={logo} alt='logo' />
      <Right>
        <a target='_blank' href={footer.fb} rel='noreferrer'>
          <img src={fb} alt='fb' />
        </a>
        <a target='_blank' href={`mailto:${footer.mail}`} rel='noreferrer'>
          <img src={mail} alt='mail' />
        </a>
      </Right>
    </Wrapper>
  );
}
