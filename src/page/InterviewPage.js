import styled from "styled-components";
import bgDesktop from "../asstes/interview-bg-desktop.svg";
import { wording } from "../constants/interview.js";

import Header from "../components/Header";
import Landing from "../components/Landing";
import Resume from "../components/Resume";
import Feature from "../components/Feature";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
  background: url(${bgDesktop});
  background-size: cover;
`;

export default function InterviewPage() {
  return (
    <>
      <Header headerList={wording.headerList} />
      <Wrapper>
        <Landing landing={wording.landing} />
        <Resume resume={wording.resume} />
        <Feature features={wording.features} />
      </Wrapper>
    </>
  );
}
