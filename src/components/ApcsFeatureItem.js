import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const FeatureItem = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2.5rem 1rem;
  z-index: 3;
  position: relative;
  ${({ theme }) => theme.media.l} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ItemContentTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
  ${({ theme }) => theme.media.l} {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 31px;
  }
`;

const ItemContentDesc = styled.div`
  font-size: 1.5rem;
  margin-top: 4px;
  ${({ theme }) => theme.media.l} {
    text-align: start;
  }
`;

const Item = styled.div`
  opacity: 0;
  transition: opacity 2s;
  background: ${(props) => props.color};
  padding: 24px;
  border-radius: 20px;
  margin-top: 24px;
  ${(props) =>
    props.opened &&
    `
    opacity: 1;
    transition-delay: ${props.index * 1}s
  `};
  ${({ theme }) => theme.media.l} {
    background: 0;
    width: 50%;
    &:nth-child(2n + 1) {
      transform: translate(-30%, 0);
      .title {
        text-align: end;
      }
    }
    &:nth-child(2n) {
      transform: translate(30%, 0);
      .title {
        text-align: start;
      }
      .desc {
        width: 140%;
      }
    }
  }
`;

export default function FeatureItemComponent({ feature }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <InView
      onChange={(inView, entry) => setIsOpened(inView)}
      triggerOnce={true}
    >
      <FeatureItem>
        {feature.content.map((item, i) => (
          <Item
            key={`feature-item-${i}`}
            opened={isOpened}
            index={i}
            color={feature.colorList[i]}
          >
            <ItemContentTitle className='title'>
              {item.title.map((item, j) => (
                <ReactMarkdown
                  key={`feature-item-${i}-${j}`}
                  children={item}
                  components={{ a: LinkRenderer }}
                />
              ))}
            </ItemContentTitle>
            {item.description.map((desc) => (
              <ItemContentDesc className='desc' key={`item-desc-${desc}`}>
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
