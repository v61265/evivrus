import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const FeatureItem = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2.5rem 1rem;
  ${({ theme }) => theme.media.md} {
    padding: 5rem 1rem;
  }
`;

const FeatureItemTitle = styled.div`
  font-size: 2rem;
  ${({ theme }) => theme.media.md} {
    font-size: 2.75rem;
  }
`;

const ItemContentTitle = styled.div`
  font-size: 1.6rem;
  margin-top: 2.5rem;
  ${({ theme }) => theme.media.md} {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

const ItemContentDesc = styled.div`
  font-size: 1.5rem;
  margin-top: 4px;
  ${({ theme }) => theme.media.md} {
    margin-top: 1rem;
  }
`;

const Item = styled.div`
  opacity: 0;
  transition: opacity 2s;
  ${(props) =>
    props.opened &&
    `
    opacity: 1;
    transition-delay: ${props.index * 1}s
  `}
`;

export default function FeatureItemComponent({ feature }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <InView
      onChange={(inView, entry) => setIsOpened(inView)}
      triggerOnce={true}
    >
      <FeatureItem>
        <FeatureItemTitle>
          <ReactMarkdown
            children={"#" + feature.title}
            components={{ a: LinkRenderer }}
          />
        </FeatureItemTitle>
        {feature.content.map((item, i) => (
          <Item key={`feature-item-${i}`} opened={isOpened} index={i}>
            <ItemContentTitle>
              <ReactMarkdown
                children={item.title}
                components={{ a: LinkRenderer }}
              />
            </ItemContentTitle>
            {item.description.map((desc) => (
              <ItemContentDesc key={`item-desc-${desc}`}>
                <ReactMarkdown
                  children={desc}
                  components={{ a: LinkRenderer }}
                />
              </ItemContentDesc>
            ))}
          </Item>
        ))}
      </FeatureItem>
    </InView>
  );
}
