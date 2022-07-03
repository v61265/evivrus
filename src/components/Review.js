import styled from "styled-components";
import Title from "./Title";
import ReviewItem from "./ReviewItem";

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ItemWrapper = styled.div`
  padding-top: 4.5rem;
  margin: 0 auto;
  padding: 3rem;
`;

export default function Review({ reviews }) {
  const review = reviews[0];
  return (
    <ReviewWrapper>
      <Title title='學員錄取心得' isLight={false} />
      <ItemWrapper>
        <ReviewItem review={review} />
      </ItemWrapper>
    </ReviewWrapper>
  );
}
