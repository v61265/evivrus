import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  margin-top: 1rem;
  overflow: hidden;
  ${(props) => `border: 8px solid ${props.color};`}
  ${({ theme }) => theme.media.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TitleWrapper = styled.div`
  border-radius: 30px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 50px 2rem;
  font-weight: 600;
  color: #000000;
  font-size: 1.66rem;
  transform: translate(-4px, -4px);
  width: 102%;
  ${(props) => `background: ${props.color};`};
  ${(props) => `border: 8px solid ${props.color};`}
  ${({ theme }) => theme.media.md} {
    min-width: 260px;
    max-width: 260px;
    height: 100%;
    border-radius: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transform: translate(0, 0);
  }
`;

const PlanTitle = styled.p``;

const ContentWrapper = styled.ul`
  font-size: 1.3rem;
  text-align: start;
  padding: 1rem 3rem;
`;

const PlanContent = styled.li`
  ${(props) => !props.isList && `list-style: none;`}
`;

const Desktop = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: block;
  }
`;

const Mobile = styled.div`
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export default function PlanCard({ plan, color }) {
  return (
    <Wrapper color={color}>
      <TitleWrapper color={color}>
        <Desktop>
          {plan.titleDesktop.map((title) => (
            <PlanTitle>{title}</PlanTitle>
          ))}
        </Desktop>
        <Mobile>
          {plan.title.map((title) => (
            <PlanTitle>{title}</PlanTitle>
          ))}
        </Mobile>
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
