import styled from "styled-components";
import Title from "./Title";
import StepItem from "./StepItem";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default function Step({ steps }) {
  return (
    <Wrapper>
      <Title title='進行方式' isLight={false} />
      {steps.map((item, i) => (
        <StepItem stepObject={item} key={`steps-item-${i}`} />
      ))}
    </Wrapper>
  );
}
