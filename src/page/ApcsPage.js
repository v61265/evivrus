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
import { useEffect } from "react";

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
      <Header />
      <Wrapper>
        <ApcsLanding />
        <ApcsIntro intro={wording.intro} />
        <ApcsPlan
          plans={wording.plans}
          hint={wording.planHint}
          charging={wording.charging}
        />
        <ApcsFeature features={wording.features} />
        <ApcsStep steps={wording.steps} />
        <ApcsResume resume={wording.resume} />
        <Qa qaList={wording.qaList} location={location.pathname} />
      </Wrapper>
      <Footer />
    </>
  );
}
