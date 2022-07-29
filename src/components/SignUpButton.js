import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 50%;
  transition: width 0.5s, background 0.5s, border 0.5s;
  z-index: 999;
  position: fixed;
  bottom: 18px;
  left: 36px;
  background: ${(props) =>
    props.page === "interview"
      ? "rgba(11, 62, 146, 0.41)"
      : "rgba(255, 168, 161, 0.58)"};
  border: 4px solid
    ${(props) => (props.page === "interview" ? "#0b3e92" : "#FFA8A1")};
  width: 100px;
  :hover {
    box-shadow: -8px 8px 4px -5px rgba(0, 0, 0, 0.4);
    transform: translate(2px, -2px);
  }
  ${({ theme }) => theme.media.md} {
    top: 18px;
    bottom: auto;
    right: 36px;
    left: auto;
    border: 4px solid
      ${(props) => (props.page === "interview" ? "#ffffff" : "#4A6084")};
    color: ${(props) => (props.page === "interview" ? "#ffffff" : "#4A6084")};
    width: auto;
    background-color: transparent;
    border-radius: 40px;
    ${(props) =>
      props.page !== "interview" &&
      `
      :hover {
        box-shadow: none;
        transform: translate(0);
        background: #4A6084;
        color: #fff;
      }
    `}
    ${(props) =>
      props.isBall &&
      `
      width: 100px;
      background: rgba(11, 62, 146, 0.41);
      border: 4px solid ${props.page === "interview" ? "#0b3e92" : "#FFA8A1"};
      border-radius: 50%;
      ${
        props.page !== "interview" &&
        `
        color: #fff;
        background: rgba(255, 168, 161, 0.58);
      `
      }
    `}
  }
`;

export default function SignUpButton({ isBall, page, link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <Button isBall={isBall} page={page}>
        立即報名
      </Button>
    </a>
  );
}
