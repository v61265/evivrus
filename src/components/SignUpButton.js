import styled from "styled-components";
import useIsDesktop from "../hooks/useIsDesktop.js";

const Button = styled.button`
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding: 12px 20px;
  border: 4px solid #ffffff;
  border-radius: 40px;
  :hover {
    box-shadow: -8px 8px 4px -5px rgba(0, 0, 0, 0.4);
    transform: translate(2px, -2px);
  }
`;

export default function SignUpButton({ isOpen }) {
  let isDesktop = useIsDesktop();
  return <Button>立即報名</Button>;
}
