import styled from "styled-components";
import avatar from "../asstes/apcs-resume.png";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
`;

const Bubble = styled.div`
  position: relative;
  background: #fff;
  border-radius: 0.4em;
  border-radius: 50px;
  padding: 15px 25px;
  margin-bottom: 18px;
  font-size: 20px;
  line-height: 26px;
  color: #565656;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 80%;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-top-color: #fff;
    border-bottom: 0;
    border-left: 0;
    margin-left: -9px;
    margin-bottom: -18px;
  }

  ${({ theme }) => theme.media.md} {
    width: 534px;
    padding: 28px 63px;
    max-width: 50%;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 80%;
      width: 0;
      height: 0;
      border: 18px solid transparent;
      border-top-color: #fff;
      border-bottom: 0;
      border-right: 0;
      margin-left: -9px;
      margin-bottom: -18px;
    }
  }

  ${({ theme }) => theme.media.l} {
    font-size: 32px;
    line-height: 42px;
    max-width: auto;
  }
`;

const Block = styled.div`
  border-radius: 50%;
  background: rgba(255, 182, 182, 0.51);
  height: 0;
  padding-bottom: 100%;
  text-align: start;
  padding-left: 12vw;
  & + & {
    background: #ffd8b1;
    transform: translate(0, -20vw);
    h3 {
      width: fit-content;
      transform: translate(calc(76vw - 150%), 0);
      margin-bottom: 0;
    }
  }
  ${({ theme }) => theme.media.md} {
    width: 50vw;
    height: 50vw;
    padding-bottom: 0;
    margin: 0 auto;
    padding-left: 10%;
    & + & {
      h3 {
        width: fit-content;
        transform: translate(0, 0);
        margin-bottom: 18px;
      }
    }
  }
  ${({ theme }) => theme.media.l} {
    width: 35vw;
    height: 35vw;
    padding-bottom: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-140%, 0);
    padding-left: 5%;
    z-index: 0;
    & + & {
      top: 50%;
      z-index: 2;
      transform: translate(20%, -30vw);
      h3 {
        transform: translate(15vw, 0);
      }
    }
  }
  ${({ theme }) => theme.media.l} {
    padding-left: 5vw;
  }
  ${({ theme }) => theme.media.xl} {
    padding-left: 5vw;
    transform: translate(-120%, 20vh);
    & + & {
      transform: translate(7vw, -85%);
      h3 {
        transform: translate(18vw, 0);
      }
    }
  }
`;

const BlockName = styled.h3`
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  color: #fef4ea;
  margin-top: 8vw;
  margin-bottom: 18px;
  ${({ theme }) => theme.media.md} {
    margin-top: 42px;
  }
`;

const Item = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #565656;
  ${({ theme }) => theme.media.l} {
    font-size: 22px;
    line-height: 33px;
  }
  ${({ theme }) => theme.media.xl} {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Avatar = styled.img`
  ${({ theme }) => theme.media.md} {
    max-width: 704px;
    margin: 0 auto;
    width: 50vw;
    z-index: 2;
  }
`;

export default function ApcsResume({ resume }) {
  return (
    <Wrapper id='experience'>
      <Bubble>{resume[0].title}</Bubble>
      <Avatar alt='avatar' src={avatar} />
      <Block>
        <BlockName>{resume[1].name}</BlockName>
        {resume[1].title.map((title, i) => (
          <Item key={`resume-title-1-${i}`}>{title}</Item>
        ))}
      </Block>
      <Block>
        <BlockName>{resume[2].name}</BlockName>
        {resume[2].title.map((title, j) => (
          <Item key={`resume-title-1-${j}`}>{title}</Item>
        ))}
      </Block>
    </Wrapper>
  );
}
