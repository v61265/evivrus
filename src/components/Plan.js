import styled from "styled-components";
import Title from "./Title";
import PlanCard from "./PlanCard";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default function Plan({ plans }) {
  return (
    <Wrapper>
      <Title title='課程規劃' isLight={false} />
      {plans.map((plan, i) => {
        return <PlanCard plan={plan} color={plan.color} key={`plan-${i}`} />;
      })}
    </Wrapper>
  );
}
