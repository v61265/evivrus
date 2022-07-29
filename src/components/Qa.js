import styled from "styled-components";
import Title from "./Title";
import QAItem from "./QAItem";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
  // ${({ theme }) => theme.media.md} {
  //   margin-top: 12rem;
  // }
`;

export default function Qa({ qaList, location }) {
  const [isShown, setIsShown] = useState(false);
  const handleOnChange = (inView, entry) => {
    setIsShown(inView);
  };
  return (
    <Wrapper id='qa'>
      <Title title='Q & A' isLight={false} location={location} />
      {qaList.map((qa, i) => {
        return (
          <InView onChange={handleOnChange} triggerOnce={true} key={`qa-${i}`}>
            <QAItem
              qa={qa}
              key={`qa-item-${i}`}
              index={i}
              isShown={isShown}
              location={location}
            />
          </InView>
        );
      })}
    </Wrapper>
  );
}
