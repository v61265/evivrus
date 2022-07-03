import styled from "styled-components";
import logo from "../asstes/logo-white.png";
import fb from "../asstes/fb.svg";
import mail from "../asstes/mail.svg";

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
  return (
    <Wrapper>
      <img src={logo} alt='logo' />
      <Right>
        <a>
          <img src={fb} alt='fb' />
        </a>
        <a>
          <img src={mail} alt='mail' />
        </a>
      </Right>
    </Wrapper>
  );
}
