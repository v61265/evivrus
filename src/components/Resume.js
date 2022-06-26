import styled from "styled-components";

import ContentHandler from "./ContnetHandler";

const ResumeWrapper = styled.div`
  padding: 3rem;
  display: flex;
`;

const ResumeTitle = styled.h2`
  font-weight: 700;
  font-size: 4.5rem;
  text-align: right;
  display: block;
`;

const ResumeItemWrapper = styled.div`
  margin-left: 5rem;
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
  }
`;

const ResumeItemName = styled.div`
  font-size: 1.5rem;
  background: linear-gradient(0deg, #0b3e92, #0b3e92), #0b3e92;
  border-radius: 50%;
  color: #ffffff;
  min-width: 6.25rem;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
`;

const ResumeItemTitle = styled.div`
  color: #0b3e92;
  font-size: 2rem;
  margin-top: 1.5rem;
`;

const ResumeItemSubtitle = styled.div`
  color: #424242;
  font-size: 2rem;
`;

export default function Resume({ resume }) {
  return (
    <ResumeWrapper>
      <ResumeTitle>
        寺尾老師
        <br />
        學經歷
      </ResumeTitle>
      <ResumeItemWrapper>
        {resume.map((item, i) => (
          <ResumeItem key={`resume-item-${i}`}>
            <ResumeItemName>{item.name}</ResumeItemName>
            <div>
              <ResumeItemTitle>
                {item.title.map((title, i) => (
                  <ContentHandler
                    key={`resume-item-content-${i}`}
                    contents={title}
                    name={`resume-item-content-${i}`}
                  />
                ))}
              </ResumeItemTitle>
              <ResumeItemSubtitle>
                {item.subtitle &&
                  item.subtitle.map((subtitle, i) => (
                    <ContentHandler
                      key={`resume-item-content-${i}`}
                      contents={subtitle}
                      name={`resume-item-content-${i}`}
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
