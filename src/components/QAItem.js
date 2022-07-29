import styled from "styled-components";
import student from "../asstes/student-avatar.png";
import teacher from "../asstes/teacher-avatar.png";

const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & + & {
    align-self: end;
  }
`;

const Avatar = styled.div`
  min-width: 36px;
  height: 36px;
  background: #d9d9d9;
  border-radius: 50%;
  margin-right: 24px;
  img {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.md} {
    min-width: 80px;
    height: 80px;
  }
`;

const TeacherAvatar = styled(Avatar)`
  margin: 0 0 0 24px;
  background: ${(props) =>
    props.location === "/interview" ? "#6d8bbe" : "#FFD8B1"};
  position: relative;
`;

const Bubble = styled.div`
  position: relative;
  background: #d9d9d9;
  border-radius: 0.4em;
  border-bottom-left-radius: 0;
  padding: 14px;
  font-size: 1.5rem;
  color: #000000;
  margin-top: 2rem;
  text-align: start;
  margin-right: 60px;
  max-width: 600px;
  &:after {
    content: "";
    position: absolute;
    left: 2px;
    top: 100%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-right-color: #d9d9d9;
    border-left: 0;
    border-bottom: 0;
    margin-top: -8px;
    margin-left: -16px;
    transform: translate(0, -50%);
  }

  ${({ theme }) => theme.media.md} {
    padding: 28px 40px;
    margin-top: 4rem;
    font-size: 1rem;
  }
`;

const TeacherBubble = styled(Bubble)`
  background: ${(props) =>
    props.location === "/interview" ? "#6d8bbe" : "#FFD8B1"};
  margin-top: 1rem;
  border-bottom-left-radius: 0.4em;
  margin-right: 0;
  margin-left: 60px;
  max-width: 600px;
  &:after {
    left: auto;
    right: 0;
    border-right-color: ${(props) =>
      props.location === "/interview" ? "#6d8bbe" : "#FFD8B1"};
    transform: translate(50%, -50%) scaleX(-1);
  }
`;

const Container = styled.div`
  opacity: 0;
  transform: translate(0, 50px);
  transition: opacity 1s, transform 1s;
  transition-delay: ${(props) => props.index * 0.5}s;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isShown &&
    `
    opacity: 1;
    transform: translate(0);
    `}
`;

export default function QAItem({ qa, index, isShown, location }) {
  return (
    <Container isShown={isShown} index={index}>
      <ItemWrapper>
        <Avatar>
          <img alt='student' src={student} />
        </Avatar>
        <Bubble>{qa.question}</Bubble>
      </ItemWrapper>
      <ItemWrapper>
        <TeacherBubble location={location}>{qa.answer}</TeacherBubble>
        <TeacherAvatar location={location}>
          <img alt='student' src={teacher} />
        </TeacherAvatar>
      </ItemWrapper>
    </Container>
  );
}
