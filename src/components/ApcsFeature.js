import styled from "styled-components";
import FeatureItemComponent from "./ApcsFeatureItem";
import Title from "./Title";
import bg from "../asstes/donut.png";
import online from "../asstes/online.png";

const FeatureWrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 3;
`;

const FeatureGroup = styled.div`
  ${({ theme }) => theme.media.l} {
    width: 860px;
    height: 860px;
    margin: 0 auto;
    background: url(${bg});
    margin-top: 27px;
  }
`;

export default function Feature({ features }) {
  return (
    <FeatureWrapper id='feature'>
      <Title title='教學特色' isLight={false} />
      <FeatureGroup>
        {features.map((feature, i) => {
          return (
            <FeatureItemComponent key={`feature-item-${i}`} feature={feature} />
          );
        })}
      </FeatureGroup>
    </FeatureWrapper>
  );
}
