import styled from "styled-components";
import cover from "../asstes/apcs-cover.png";
import coverMobile from "../asstes/apcs-cover-mobile.png";
import coverMobile2 from "../asstes/apcs-cover-mobile-2.png";

const Landing = styled.div`
  width: 100%;
  padding: 0 3rem;
  min-height: 100vh;
  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: flex-end;
    margin-bottom: 112px;
    position: relative;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  text-align: right;
  color: #545454;
  ${({ theme }) => theme.media.md} {
    font-size: 128px;
    line-height: 166px;
    position: absolute;
    top: minmax(100%, 100vh);
    right: 3rem;
  }
`;

const Cover = styled.img`
  display: none;
  margin-top: 150px;
  ${({ theme }) => theme.media.md} {
    display: block;
    max-height: 80vh;
  }
`;

const CoverMobile = styled.img`
  margin-top: 150px;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const Cover2 = styled.img`
  margin-top: 20px;
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export default function ApcsLanding() {
  return (
    <Landing>
      <Cover src={cover} />
      <CoverMobile src={coverMobile} />
      <Title>
        寺尾
        <br />
        程式家教
      </Title>
      <Cover2 src={coverMobile2} />
    </Landing>
  );
}
