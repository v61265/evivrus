import styled from "styled-components";
import bgDesktop from "../asstes/interview-bg-desktop.jpeg";
import bgMobile from "../asstes/interview-bg-mobile.svg";
import { wording } from "../constants/interview.js";

import Header from "../components/Header";
import Landing from "../components/Landing";
import Resume from "../components/Resume";
import Feature from "../components/Feature";
import Review from "../components/Review";
import Plan from "../components/Plan";
import Step from "../components/Step";
import Qa from "../components/Qa";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
  background: url(${bgMobile});
  background-size: cover;
  overflow: hidden;
  ${({ theme }) => theme.media.md} {
    background: url(${bgDesktop});
    background-size: cover;
  }
`;

const Charge = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: rgba(202, 213, 232, 0.4);
  font-size: 1.6rem;
  font-weight: 600;
`;

export default function InterviewPage() {
  return (
    <>
      <Header headerList={wording.headerList} />
      <Wrapper>
        <Landing landing={wording.landing} />
        <Resume resume={wording.resume} />
        <Review reviews={wording.reviews} />
        <Feature features={wording.features} />
        <Plan plans={wording.plans} />
        <Charge>{wording.charging}</Charge>
        <Step steps={wording.steps} />
        <Qa qaList={wording.qaList} />
      </Wrapper>
      <Footer />
    </>
  );
}
