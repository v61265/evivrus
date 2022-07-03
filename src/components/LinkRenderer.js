import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  box-shadow: inset 0 -2px 0 rgba(50, 85, 127, 0.5),
    0 2px 0 rgba(50, 85, 127, 0.5);
  transition: box-shadow 1s, color 0.3s;
  color: inherit;
  overflow: hidden;
  &:hover {
    color: #fff;
    box-shadow: inset 0 -5rem 0 rgba(50, 85, 127, 0.5),
      0 2px 0 rgba(50, 85, 127, 0.5);
  }
`;

export default function LinkRenderer({ href, children }) {
  return (
    <Link href={href} target='_blank' rel='noreferrer'>
      {children}
    </Link>
  );
}
