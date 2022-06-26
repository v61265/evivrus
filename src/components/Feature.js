import styled from "styled-components";

import ContentHandler from "./ContnetHandler";

const FeatureWrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  color: #000000;
  padding-bottom: 0.5rem;
  border-bottom: 10px solid #ffffff;
`;

const FeatureItem = styled.div``;

const FeatureItemTitle = styled.div``;

export default function Resume({ features }) {
  console.log(features);
  const feature = features[0];
  return (
    <FeatureWrapper>
      <Title>課程特色</Title>
      <FeatureItem>
        <FeatureItemTitle>{feature.title}</FeatureItemTitle>
      </FeatureItem>
    </FeatureWrapper>
  );
}
