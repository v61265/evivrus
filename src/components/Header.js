import styled from "styled-components";
import useIsDesktop from "../hooks/useIsDesktop.js";
import logoDesktop from "../asstes/logo.svg";
import SignUpButton from "../components/SignUpButton.js";

const Wrapper = styled.div`
  background: #dfdfdf;
  padding: 18px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.md} {
    padding: 20px 50px;
  }
`;

const Logo = styled.div`
  width: 189.27px;
  height: 62.36px;
  background: url(${logoDesktop});
  background-size: cover;
`;

const Link = styled.a`
  margin-right: 60px;
  font-family: "IBM Plex Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5rem;
  color: #000000;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.5), 0 2px 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s;

  :hover {
    cursor: pointer;
    box-shadow: inset 0 -30px 0 rgba(50, 85, 127, 0.3),
      0 2px 0 rgba(50, 85, 127, 0.3);
  }
`;

export default function Header({ headerList }) {
  let isDesktop = useIsDesktop();
  console.log(headerList);
  return (
    <Wrapper>
      <Logo />
      <div>
        {isDesktop && (
          <>
            {headerList.map((item) => (
              <Link href={item.href}>{item.title}</Link>
            ))}
            <SignUpButton />
          </>
        )}
      </div>
    </Wrapper>
  );
}
