import styled from "styled-components";
import Title from "./Title";

const Wrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${({ theme }) => theme.media.md} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StepArea = styled.div`
  margin-top: 3rem;
  z-index: 3;
  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
    margin: 100px 44px;
    position: relative;
  }
`;

const StepItem = styled.div`
  display: flex;
  & + & {
    margin-top: 32px;
  }
`;

const StepTitle = styled.div`
  min-width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd8b1;
  font-size: 3rem;
  position: relative;
  z-index: 20;
  margin: 0 32px 0 3rem;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 7px solid #ffd8b1;
    left: 0.8rem;
    z-index: -1;
  }
  ${({ theme }) => theme.media.md} {
    font-size: 60px;
    line-height: 125px;
    min-width: 120px;
    height: 120px;
    margin-left: 0;
    &::before {
      min-width: 120px;
      height: 120px;
    }
  }
`;

const StepContent = styled.div`
  margin: 18px 3rem 0 0;
  font-size: 16px;
  text-align: start;
  ${({ theme }) => theme.media.md} {
    font-size: 24px;
  }
`;

const Cover = styled.picture`
  height: 332px;
  width: 1438px;
  img {
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => theme.media.md} {
    min-width: 50%;
    height: fit-content;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Mobile = styled.img`
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const Desktop = styled.img`
  display: none;
  border-radius: 30px;
  ${({ theme }) => theme.media.md} {
    display: block;
  }
`;

const StepItemContainer = styled.div`
  transform: translate(0, -12px);
  ${({ theme }) => theme.media.md} {
    transform: translate(-60px, 0);
    min-width: 60%;
    position: absoulte;
    top: 0;
    left: 0;
  }
`;

export default function ApcsStep({ steps }) {
  return (
    <Wrapper id='step'>
      <Title title='進行方式' isLight={false} />
      {steps.map((stepArea, i) => (
        <StepArea key={`spcs-step-${i}`}>
          <Cover>
            <Mobile src={stepArea.coverList?.mobile} alt='進行方式' />
            <Desktop src={stepArea.coverList?.desktop} alt='進行方式' />
          </Cover>
          <StepItemContainer>
            {stepArea?.steps?.map((step, j) => (
              <StepItem key={`spcs-step-${i}-${j}`}>
                <StepTitle>{step.title}</StepTitle>
                <StepContent>{step.content}</StepContent>
              </StepItem>
            ))}
          </StepItemContainer>
        </StepArea>
      ))}
    </Wrapper>
  );
}
