import styled from "styled-components";

const Wrapper = styled.h2`
  font-weight: 700;
  font-size: 3.3rem;
  color: #000000;
  padding-bottom: 0.5rem;
  border-bottom: 10px solid #0b3e92;
  margin: 0 auto;
  ${(props) => props.light && `border-bottom: 10px solid #ffffff;`}
  ${({ theme }) => theme.media.md} {
    font-size: 4rem;
  }
`;

export default function Title({ title, isLight }) {
  return <Wrapper light={isLight}>{title}</Wrapper>;
}
