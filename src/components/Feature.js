import styled from "styled-components";

import FeatureItemComponent from "./FeatureItem";
import Title from "./Title";

const FeatureWrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Slash = styled.div`
  width: 7rem;
  border-top: 0.75rem solid #0b3e92;
  transform: rotate(122.32deg);
  margin: 3rem auto;
`;

export default function Feature({ features }) {
  return (
    <FeatureWrapper>
      <Title title='課程特色' isLight={true} />
      {features.map((feature, i) => {
        if (i !== 0) {
          return (
            <div key={`feature-item-${i}`}>
              <Slash />
              <FeatureItemComponent feature={feature} />
            </div>
          );
        }
        return (
          <FeatureItemComponent key={`feature-item-${i}`} feature={feature} />
        );
      })}
    </FeatureWrapper>
  );
}
