import styled from "styled-components";
import bgDesktop from "../asstes/interview-bg-desktop.svg";
import { wording } from "../constants/interview.js";

import Header from "../components/Header";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
  background: url(${bgDesktop});
  background-size: cover;
`;

export default function InterviewPage() {
  return (
    <Wrapper>
      <Header headerList={wording.headerList} />
    </Wrapper>
  );
}
