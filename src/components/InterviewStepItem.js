import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StepItemTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  ${({ theme }) => theme.media.md} {
    margin-bottom: 1.5rem;
  }
`;

const Cover = styled.div`
  width: 200vw;
  height: 25vw;
  overflow: hidden;
  transform: translate(-12.5vw, 0);
  ${({ theme }) => theme.media.md} {
    min-width: 100vw;
    transform: translate(-6rem, 0);
  }
  img {
    height: 100%;
  }
`;

const StepsWrapper = styled.div`
  transform: translate(0, -2rem);
  max-width: 1200px;
  margin: 0 auto;
  ${({ theme }) => theme.media.md} {
    display: flex;
    transform: translate(0, -60px);
    * {
      flex: 1;
    }
  }
`;

const Item = styled.div`
  display: flex;
  font-size: 1.5rem;
  ${({ theme }) => theme.media.md} {
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
  }
  & + & {
    margin-top: 30px;
    ${({ theme }) => theme.media.md} {
      margin: 0 0 0 4rem;
    }
  }
`;

const Icon = styled.div`
  min-width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #0b3e92;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.md} {
    min-width: 120px;
    max-width: 120px;
    min-height: 120px;
    max-height: 120px;
  }

  img {
    width: 50%;
    height: 50%;
    ${({ theme }) => theme.media.md} {
      width: 60%;
      height: 60%;
    }
  }
`;

const ItemContent = styled.div`
  transform: translate(0, 1rem);
  margin-left: 9px;
  text-align: start;
  ${({ theme }) => theme.media.md} {
    text-align: center;
  }
`;

const ItemContentTitle = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
  ${({ theme }) => theme.media.md} {
    font-size: 3rem;
  }
`;

export default function StepItem({ stepObject }) {
  return (
    <Wrapper>
      <StepItemTitle>
        <ReactMarkdown
          children={`#${stepObject.title}`}
          components={{ a: LinkRenderer }}
        />
      </StepItemTitle>
      <Cover>
        <img src={stepObject.cover} alt={stepObject.title} />
      </Cover>
      <StepsWrapper>
        {stepObject.steps.map((step, index) => (
          <Item key={`step-item-${index}`}>
            <Icon>
              <img src={step.icon} alt={`step-${index + 1}`} />
            </Icon>
            <ItemContent>
              <ItemContentTitle>{step.title}</ItemContentTitle>
              <>{step.content}</>
            </ItemContent>
          </Item>
        ))}
      </StepsWrapper>
    </Wrapper>
  );
}
