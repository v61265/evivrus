import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  margin-top: 1rem;
  background: #cad5d7;
  border-radius: 130px;
  padding: 12px 48px;
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid #cad5d7;
    border-radius: 130px;
    width: 100%;
    height: 100%;
    left: -18px;
  }
  ${({ theme }) => theme.media.md} {
    padding: 20px 86px;
  }
}
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  color: #000000;
  font-size: 1.66rem;
`;

const PlanTitle = styled.p`
  ${({ theme }) => theme.media.md} {
    font-size: 42px;
    line-height: 52px;
    font-weight: 400;
    text-align: start;
  }
`;

const ContentWrapper = styled.ul`
  font-size: 1.3rem;
  text-align: start;
`;

const PlanContent = styled.li`
  ${({ theme }) => theme.media.md} {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
  }
`;

export default function PlanCard({ plan }) {
  return (
    <Wrapper>
      <TitleWrapper>
        <PlanTitle>{plan.title}</PlanTitle>
      </TitleWrapper>
      <ContentWrapper isList={plan.content.length > 1}>
        {plan.content.map((content, i) => (
          <PlanContent isList={plan.content.length > 1} key={`content-${i}`}>
            {content}
          </PlanContent>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
