import styled from "styled-components";
import Title from "./Title";
import QAItem from "./QAItem";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export default function Qa({ qaList }) {
  return (
    <Wrapper>
      <Title title='Q & A' isLight={false} />
      {qaList.map((qa, i) => {
        return <QAItem qa={qa} key={`qa-item-${i}`} />;
      })}
    </Wrapper>
  );
}
