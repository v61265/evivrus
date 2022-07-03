import styled from "styled-components";

const LandingWrapper = styled.div`
  padding: 7rem 2rem;
  margin: 0 auto;
  text-align: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ theme }) => theme.media.sm} {
    padding: 9rem 5rem;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.5;
  text-align: right;
  color: #000000;
  ${({ theme }) => theme.media.sm} {
    font-size: 4.5rem;
  }
  ${({ theme }) => theme.media.md} {
    font-size: 6rem;
  }
`;

const Slash = styled.div`
  color: #0b3e92;
  border: 3px solid #0b3e92;
  transform: rotate(122.32deg);
  width: 5rem;
  margin: 3rem 0;
  margin-top: 15rem;
  ${({ theme }) => theme.media.sm} {
    margin-top: 30rem;
  }
  ${({ theme }) => theme.media.md} {
    margin: 3rem 0;
  }
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.5;
  text-align: right;
  color: #0b3e92;
  ${({ theme }) => theme.media.md} {
    font-size: 3rem;
  }
`;

export default function Landing({ landing }) {
  return (
    <LandingWrapper>
      <Title>
        {landing.title.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </Title>
      <Slash />
      <SubTitle>
        {landing.subtitle?.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </SubTitle>
    </LandingWrapper>
  );
}
