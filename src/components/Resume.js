import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";
import useIsDesktop from "../hooks/useIsDesktop.js";

const ResumeWrapper = styled.div`
  padding: 3rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`;

const ResumeTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  display: block;
  text-align: center;
  margin-bottom: 4.3rem;
  ${({ theme }) => theme.media.md} {
    font-size: 4.5rem;
    text-align: right;
    margin-bottom: 0;
  }
`;

const ResumeItemWrapper = styled.div`
  ${({ theme }) => theme.media.md} {
    margin-left: 5rem;
  }
`;

const ResumeItem = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  &:not(:first-child) {
    margin-top: 6rem;
  }
  &:not(:last-child) {
    &::before {
      content: "";
      position: absolute;
      height: calc(100% + 6rem);
      width: 1rem;
      background: #0b3e92;
      top: 3rem;
      left: 3.125rem;
      transform: translate(-50%, 0);
      z-index: -1;
  }
`;

const ResumeItemName = styled.div`
  font-size: 1.6rem;
  background: linear-gradient(0deg, #0b3e92, #0b3e92), #0b3e92;
  border-radius: 50%;
  color: #ffffff;
  min-width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2.8rem;
  ${({ theme }) => theme.media.md} {
    min-width: 6.25rem;
    height: 6.25rem;
    font-size: 1.5rem;
    margin-right: 4rem;
  }
`;

const ResumeItemTitle = styled.div`
  color: #0b3e92;
  font-size: 2rem;
  margin-top: 1.4rem;
  ${({ theme }) => theme.media.md} {
    margin-top: 1.5rem;
  }
`;

const ResumeItemSubtitle = styled.div`
  color: #424242;
  font-size: 1.5rem;
  p:first-child {
    margin-top: 1rem;
  }
  ${({ theme }) => theme.media.md} {
    font-size: 2rem;
  }
`;

export default function Resume({ resume }) {
  const isDesktop = useIsDesktop();
  return (
    <ResumeWrapper>
      <ResumeTitle>
        寺尾老師
        {isDesktop && <br />}
        學經歷
      </ResumeTitle>
      <ResumeItemWrapper>
        {resume.map((item, i) => (
          <ResumeItem key={`resume-item-${i}`}>
            <ResumeItemName>{item.name}</ResumeItemName>
            <div>
              <ResumeItemTitle>
                {item.title.map((title) => {
                  return (
                    <ReactMarkdown
                      children={title}
                      key={`resume-item-title-${title}`}
                      components={{ a: LinkRenderer }}
                    />
                  );
                })}
              </ResumeItemTitle>
              <ResumeItemSubtitle>
                {item.subtitle &&
                  item.subtitle.map((subtitle) => (
                    <ReactMarkdown
                      children={subtitle}
                      key={`resume-item-subtitle-${subtitle}`}
                      components={{ a: LinkRenderer }}
                    />
                  ))}
              </ResumeItemSubtitle>
            </div>
          </ResumeItem>
        ))}
      </ResumeItemWrapper>
    </ResumeWrapper>
  );
}
