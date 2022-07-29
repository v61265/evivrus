import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";
import offerGetPng from "../asstes/offer-get.png";

const Wrapper = styled.div`
  max-width: 350px;
  text-align: start;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-size: 1.5rem;
`;

const Background = styled.p`
  color: #777777;
`;

const Student = styled.div`
  background: #d9d9d9;
  border-radius: 30px;
  padding: 2rem;
  margin-top: 1rem;
  position: relative;
`;

const Teacher = styled.div`
  background: #d9d9d9;
  border-radius: 30px;
  margin-top: 1rem;
  padding: 2rem;
  text-align: start;
`;

const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  background: ${(props) => (props.src ? "" : "#d9d9d9")};
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const OfferGet = styled.img`
  width: 68px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0, calc(-100% + 12px));
  ${({ theme }) => theme.media.md} {
    transform: translate(20%, calc(-100% + 60px));
    width: 93px;
  }
`;

const Offer = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 21px;
  ${({ theme }) => theme.media.md} {
    font-size: 20px;
    line-height: 26px;
  }
`;

export default function Review({ review }) {
  return (
    <Wrapper>
      <Info>
        <Avatar src={review.avatar}>
          <img src={review.avatar} alt={review.name} />
        </Avatar>
        <div>
          <Name>{review.name}</Name>
          <Background>{review.background}</Background>
        </div>
      </Info>
      <Student>
        {review.isOfferGet && <OfferGet src={offerGetPng} />}
        {review.offer && <Offer>{review.offer}</Offer>}
        {review.student.map((line, i) => (
          <ReactMarkdown
            children={line}
            key={`from-student-${review.name}-${i}`}
            components={{ a: LinkRenderer }}
          />
        ))}
      </Student>
      <Teacher>
        {review.teacher.map((line, i) => (
          <ReactMarkdown
            children={line}
            key={`from-teacher-${review.name}-${i}`}
            components={{ a: LinkRenderer }}
          />
        ))}
      </Teacher>
    </Wrapper>
  );
}
