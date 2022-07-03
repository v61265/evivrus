import styled from "styled-components";
import student from "../asstes/student-avatar.png";
import teacher from "../asstes/teacher-avatar.png";

const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  &:nth-child(2n + 1) {
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
  background: #6d8bbe;
  img {
    width: 59.67px;
    height: 64.06px;
  }
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
  background: #6d8bbe;
  margin-top: 1rem;
  border-bottom-left-radius: 0.4em;
  margin-right: 0;
  margin-left: 60px;
  max-width: 600px;
  &:after {
    left: auto;
    right: 0;
    border-right-color: #6d8bbe;
    transform: translate(50%, -50%) scaleX(-1);
  }
`;

export default function QAItem({ qa }) {
  return (
    <>
      <ItemWrapper>
        <Avatar>
          <img alt='student' src={student} />
        </Avatar>
        <Bubble>{qa.question}</Bubble>
      </ItemWrapper>
      <ItemWrapper>
        <TeacherBubble>{qa.answer}</TeacherBubble>
        <TeacherAvatar>
          <img alt='student' src={teacher} />
        </TeacherAvatar>
      </ItemWrapper>
    </>
  );
}
