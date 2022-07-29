import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.h2`
  z-index: 3;
  font-weight: 700;
  font-size: 3.3rem;
  width: fit-content;
  color: ${(props) =>
    props.location === "/interview" ? "#000000" : "#545454"};
  padding-bottom: 0.5rem;
  border-bottom: 10px solid
    ${(props) => (props.location === "/interview" ? "#0b3e92" : "#545454")};
  margin: 0 auto;
  ${(props) => props.light && `border-bottom: 10px solid #ffffff;`}
  ${({ theme }) => theme.media.md} {
    font-size: 4rem;
  }
`;

export default function Title({ title, isLight, location }) {
  const defaultLocation = useLocation().pathname;
  return (
    <Wrapper light={isLight} location={location?.pathname || defaultLocation}>
      {title}
    </Wrapper>
  );
}
