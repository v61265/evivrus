import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";

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
  background: #d9d9d9;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export default function Review({ review }) {
  return (
    <Wrapper>
      <Info>
        <Avatar />
        <div>
          <Name>{review.name}</Name>
          <Background>{review.background}</Background>
        </div>
      </Info>
      <Student>
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
