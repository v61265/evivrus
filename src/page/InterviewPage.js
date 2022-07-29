import styled from "styled-components";
import bgDesktop from "../asstes/interview-bg-desktop.jpeg";
import bgMobile from "../asstes/interview-bg-mobile.svg";
import { wording } from "../constants/interview.js";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Resume from "../components/InterviewResume";
import Feature from "../components/InterviewFeature";
import Review from "../components/Review";
import Plan from "../components/InterviewPlan";
import Step from "../components/InterviewStep";
import Qa from "../components/Qa";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const hash = location?.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Header headerList={wording.headerList} />
      <Wrapper>
        <Landing landing={wording.landing} />
        <Resume resume={wording.resume} location={location.pathname} />
        <Review reviews={wording.reviews} location={location.pathname} />
        <Feature features={wording.features} location={location.pathname} />
        <Plan plans={wording.plans} location={location.pathname} />
        <Charge>{wording.charging}</Charge>
        <Step steps={wording.steps} location={location.pathname} />
        <Qa qaList={wording.qaList} location={location.pathname} />
      </Wrapper>
      <Footer />
    </>
  );
}
