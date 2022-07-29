import styled from "styled-components";
import Title from "./Title";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  z-index: 3;
  position: relative;
  ${({ theme }) => theme.media.md} {
    padding: 3rem 0;
    display: flex;
    align-items: flex-end;
  }
`;

const Description = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  :before {
    content: "“";
    color: #fff;
    font-size: 64px;
    margin-right: 24px;
  }
  :after {
    content: "”";
    color: #fff;
    font-size: 64px;
    margin-right: 24px;
    transform: translate(0, 200%);
  }
  ${({ theme }) => theme.media.md} {
    font-size: 28px;
    line-height: 42px;
    :before {
      font-size: 128px;
    }
    :after {
      font-size: 128px;
    }
  }
`;

const Subtitle = styled.div`
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #000000;
  ${({ theme }) => theme.media.md} {
    font-size: 40px;
    text-align: start;
  }
`;

const Paragraph = styled.div`
  margin-top: 32px;
  z-index: 30;
  position: relative;
  a {
    display: block;
    font-size: 20px;
    line-height: 26px;
    color: #4a6084;
    padding: 12px;
    border: 6px solid #4a6084;
    width: fit-content;
    margin: 20px auto 0 auto;
    border-radius: 40px;
    :hover {
      background: #4a6084;
      color: #ffd8b1;
    }
  }
  ${({ theme }) => theme.media.md} {
    font-size: 32px;
    line-height: 1.5em;
    a {
      margin-left: 0;
      font-size: 30px;
      line-height: 39px;
      padding: 12px 28px;
    }
  }
`;

const Top = styled.div`
  ${({ theme }) => theme.media.md} {
    max-width: 1000px;
  }
`;

const Middle = styled.div`
  ${({ theme }) => theme.media.md} {
    width: 50%;
    align-self: start;
    margin-left: 150px;
  }
`;

const Bottom = styled.div`
  ${({ theme }) => theme.media.md} {
    width: 50%;
    margin-right: 150px;
    .second {
      display: flex;
      flex-direction: column;
      a {
        align-self: end;
        margin-right: 0;
      }
    }
  }
`;

export default function Step({ intro }) {
  return (
    <Wrapper id='introduction'>
      <Top>
        <Title title={intro.title} isLight={false} />
        <Description>{intro.description}</Description>
      </Top>

      <Middle>
        <Subtitle>{intro.subtitle}</Subtitle>
        <Paragraph>
          <ReactMarkdown
            children={intro.paragraph[0].description}
            components={{ a: LinkRenderer }}
          />
          <a
            href={intro.paragraph[0].button.href}
            target='_blank'
            rel='noreferrer'
          >
            {intro.paragraph[0].button.name}
          </a>
        </Paragraph>
      </Middle>

      <Bottom>
        <Paragraph className='second'>
          {intro.paragraph[1].description}
          <a
            href={intro.paragraph[1].button.href}
            target='_blank'
            rel='noreferrer'
          >
            {intro.paragraph[1].button.name}
          </a>
        </Paragraph>
      </Bottom>
    </Wrapper>
  );
}
