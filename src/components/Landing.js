import styled from "styled-components";

const LandingWrapper = styled.div`
  padding-top: 7.8vw;
  padding-right: 11vw;
  text-align: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 6rem;
  line-height: 1.5;
  text-align: right;
  color: #000000;
`;

const Slash = styled.div`
  color: #0b3e92;
  border: 3px solid #0b3e92;
  transform: rotate(122.32deg);
  width: 5rem;
  margin: 3rem 0;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
  text-align: right;
  color: #0b3e92;
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
