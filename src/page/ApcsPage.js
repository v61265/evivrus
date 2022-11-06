import { wording } from "../constants/apcs.js";
import Header from "../components/Header";
import styled from "styled-components";
import ApcsLanding from "../components/ApcsLanding";
import Qa from "../components/Qa";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer.js";
import ApcsStep from "../components/ApcsStep.js";
import ApcsPlan from "../components/ApcsPlan.js";
import ApcsFeature from "../components/ApcsFeature.js";
import ApcsIntro from "../components/ApcsIntro.js";
import ApcsResume from "../components/ApcsResume.js";
import bg from "../asstes/apcs-background.png";
import bgMobile from "../asstes/apcs-background-mobile.png";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  background: #fef4ea;
  overflow: hidden;
  background-image: url(${bgMobile});
  background-size: contain;
  background-repeat: no-repeat;
  ${({ theme }) => theme.media.md} {
    background-image: url(${bg});
  }
`;

export default function DefaultPage() {
  const location = useLocation();
  const introRef = useRef();
  const planRef = useRef();
  const featureRef = useRef();
  const stepRef = useRef();
  const resumeRef = useRef();
  const qaRef = useRef();
  useEffect(() => {
    const hash = location?.hash;
    switch (hash.replace("#", "")) {
      case "introduction": {
        introRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "plan": {
        planRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "feature": {
        featureRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "step": {
        stepRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "experience": {
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "qa": {
        qaRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <Wrapper>
        <ApcsLanding />
        <div ref={introRef}>
          <ApcsIntro intro={wording.intro} />
        </div>
        <div ref={planRef}>
          <ApcsPlan
            plans={wording.plans}
            hint={wording.planHint}
            charging={wording.charging}
          />
        </div>
        <div ref={featureRef}>
          <ApcsFeature features={wording.features} />
        </div>
        <div ref={stepRef}>
          <ApcsStep steps={wording.steps} />
        </div>
        <div ref={resumeRef}>
          <ApcsResume resume={wording.resume} />
        </div>
        <div ref={qaRef}>
          <Qa qaList={wording.qaList} location={location.pathname} />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
