import styled from "styled-components";
import useIsDesktop from "../hooks/useIsDesktop.js";
import SignUpButton from "../components/SignUpButton.js";
import logoDesktop from "../asstes/logo.svg";
import openBurger from "../asstes/open-burger.svg";
import closeBurger from "../asstes/close-burger.svg";
import arrowSvg from "../asstes/arrow.svg";
import { useState } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Wrapper = styled.div`
  background: #dfdfdf;
  padding: 18px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: transform 1s;
  ${({ theme }) => theme.media.md} {
    padding: 20px 50px;
  }
  ${(props) =>
    props.isOpen &&
    `
  background: rgba(29, 29, 29, 0.42);
  `}
  ${(props) => props.isHide && `transform: translate(0, -100%);`}
`;

const Logo = styled.div`
  width: 189.27px;
  height: 62.36px;
  background: url(${logoDesktop});
  background-size: cover;
`;

const Link = styled.a`
  margin-right: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5rem;
  color: #000000;
  height: fit-content;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.7), 0 2px 0 rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.3s;
  padding-bottom: 2px;

  :hover {
    cursor: pointer;
    box-shadow: inset 0 -30px 0 rgba(0, 0, 0, 0.3), 0 2px 0 rgba(0, 0, 0, 0.3);
  }
`;

const BurgerButton = styled.div`
  width: 36px;
  height: 36px;
  background: url(${(props) => {
    return props.isOpen ? closeBurger : openBurger;
  }});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`;

const BurgerWrapper = styled.ul`
  background: rgba(29, 29, 29, 0.42);
  min-height: calc(100vh - 98px);
  padding: 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    width: fit-content;
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  background: url(${arrowSvg});
  ${(props) =>
    props.isActive ||
    `
    transform:rotate(270deg);
  `}
`;

const LinkInBergur = styled(Link)`
  margin-bottom: 40px;
  margin-right: 0;

  display: flex;
  align-items: center;
`;

const SubTitle = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    color: #fff;
  }
`;

const BurgerRight = styled.div`
  display: flex;
  align-items: center;
`;

const Space = styled.div`
  height: 110px;
`;

export default function Header({ headerList }) {
  let isDesktop = useIsDesktop();
  const scrollDirection = useScrollDirection();
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  return (
    <>
      <Space />
      <Wrapper
        isOpen={isOpenBurger}
        isHide={scrollDirection === "down" && !isOpenBurger}
      >
        <Logo />
        <BurgerRight>
          {isDesktop ? (
            <>
              {headerList.map((item, i) => (
                <Link href={item.href} key={`header-list-${i}`}>
                  {item.title}
                </Link>
              ))}
              <SignUpButton />
            </>
          ) : (
            <BurgerButton
              onClick={() => setIsOpenBurger(!isOpenBurger)}
              isOpen={isOpenBurger}
            />
          )}
        </BurgerRight>
      </Wrapper>
      {isOpenBurger && !isDesktop && (
        <BurgerWrapper>
          {headerList.map((item) => (
            <>
              <LinkInBergur href={item.href}>
                {item.title}
                <Arrow isActive={item.isActive} />
              </LinkInBergur>
              {item.content &&
                item.content.map((subItem) => (
                  <SubTitle>{subItem.title}</SubTitle>
                ))}
            </>
          ))}
        </BurgerWrapper>
      )}
    </>
  );
}
