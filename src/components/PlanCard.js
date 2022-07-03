import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  margin-top: 1rem;
  ${(props) => `border: 8px solid ${props.color};`}
`;

const TitleWrapper = styled.div`
  border-radius: 50px;
  padding: 1rem 2rem;
  font-weight: 600;
  color: #000000;
  font-size: 1.66rem;
  transform: translate(0, -8px);
  ${(props) => `background: ${props.color};`};
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

export default function PlanCard({ plan, color }) {
  return (
    <Wrapper color={color}>
      <TitleWrapper color={color}>
        {plan.title.map((title) => (
          <PlanTitle>{title}</PlanTitle>
        ))}
      </TitleWrapper>
      <ContentWrapper isList={plan.content.length > 1}>
        {plan.content.map((content) => (
          <PlanContent isList={plan.content.length > 1}>{content}</PlanContent>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
