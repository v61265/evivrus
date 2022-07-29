import styled from "styled-components";
import useIsDesktop from "../hooks/useIsDesktop.js";
import SignUpButton from "../components/SignUpButton.js";
import logoDesktop from "../asstes/logo.svg";
import openBurger from "../asstes/open-burger.svg";
import closeBurger from "../asstes/close-burger.svg";
import arrowPng from "../asstes/arrow.png";
import { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useLocation } from "react-router-dom";
import { wording as interviewWording } from "../constants/interview.js";
import { wording as defaultWording } from "../constants/default.js";
import { wording as apcsWording } from "../constants/apcs.js";

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
  background: rgba(29, 29, 29, 0.8);
  `}
  ${(props) => props.isHide && `transform: translate(0, -100%);`}
`;

const Logo = styled.div`
  width: 189.27px;
  height: 62.36px;
  background: url(${logoDesktop});
  background-size: cover;
`;

const BurgerRightLinksItem = styled.li`
  position: relative;

  a {
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      background: none repeat scroll 0 0 transparent;
      height: 2px;
      width: 0;
      background: #000;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    :hover::after {
      width: 100%;
      left: 0;
    }
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
  background: rgba(29, 29, 29, 0.8);
  min-height: calc(100vh - 98px);
  min-width: 100vw;
  padding: 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1000;
  * {
    width: fit-content;
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  background: url(${arrowPng});
  background-size: contain;
  ${(props) =>
    props.isActive ||
    `
    transform:rotate(270deg);
  `}
`;

const LinkInBergur = styled(BurgerRightLinksItem)`
  margin-bottom: 1rem;
  margin-right: 0;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1.5rem;
  color: #fff;
  a {
    display: flex;
    align-items: center;
    color: #fff;
    &::after {
      background: #fff;
    }
  }
`;

const SubTitle = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 20px;
  transition: color 1s;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #fff;
    opacity: 0.5;
  }
`;

const BurgerRight = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerRightLinks = styled.div`
  display: flex;
  margin-right: 120px;
  list-style: none;
  font-size: 1.2rem;
`;

const Space = styled.div`
  height: 98.36px;
`;

export default function Header() {
  let isDesktop = useIsDesktop();
  const scrollDirection = useScrollDirection();
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [page, setPage] = useState("");
  const [headerList, setHeaderList] = useState([]);
  const [signUpLink, setSignUpLink] = useState("");
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/interview": {
        setPage("interview");
        setHeaderList(interviewWording.headerList);
        setSignUpLink(interviewWording.signUpLink);
        break;
      }
      case "/apcs": {
        setHeaderList(apcsWording.headerList);
        setSignUpLink(apcsWording.signUpLink);
        setPage("apcs");
        break;
      }
      default: {
        setHeaderList(defaultWording.headerList);
        setSignUpLink(defaultWording.signUpLink);
        setPage("default");
      }
    }
  }, [location.pathname]);
  return (
    <>
      {(page !== "apcs" || isOpenBurger) && <Space />}
      <SignUpButton
        isBall={scrollDirection === "down"}
        page={page}
        link={signUpLink}
      />
      <Wrapper
        isOpen={isOpenBurger}
        isHide={scrollDirection === "down" && !isOpenBurger}
      >
        <a href={"/"}>
          <Logo />
        </a>
        <BurgerRight>
          {isDesktop && (
            <BurgerRightLinks>
              {headerList.map((item, i) => (
                <BurgerRightLinksItem key={`header-list-${i}`}>
                  <a href={"/#/" + item.href}>{item.title}</a>
                </BurgerRightLinksItem>
              ))}
            </BurgerRightLinks>
          )}
          {!isDesktop && page !== "default" && (
            <BurgerButton
              onClick={() => setIsOpenBurger(!isOpenBurger)}
              isOpen={isOpenBurger}
            />
          )}
        </BurgerRight>
      </Wrapper>
      {((isOpenBurger && !isDesktop) || page === "default") && (
        <BurgerWrapper>
          {headerList.map((item) => (
            <>
              <LinkInBergur onClick={() => setIsOpenBurger(false)}>
                <a href={"#/" + item.href}>
                  <div>{item.title}</div>
                  <Arrow isActive={item.isActive} />
                </a>
              </LinkInBergur>
              {item.content &&
                item.content.map((subItem) => (
                  <SubTitle
                    href={"/#/" + item.href + "#" + subItem.href}
                    onClick={() => setIsOpenBurger(false)}
                  >
                    {subItem.title}
                  </SubTitle>
                ))}
            </>
          ))}
        </BurgerWrapper>
      )}
    </>
  );
}
