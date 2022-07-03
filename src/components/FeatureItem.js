import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import LinkRenderer from "./LinkRenderer";

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

export default function FeatureItemComponent({ feature }) {
  return (
    <FeatureItem>
      <FeatureItemTitle>
        <ReactMarkdown
          children={"#" + feature.title}
          components={{ a: LinkRenderer }}
        />
      </FeatureItemTitle>
      {feature.content.map((item, i) => (
        <div key={`feature-item-${i}`}>
          <ItemContentTitle>
            <ReactMarkdown
              children={item.title}
              components={{ a: LinkRenderer }}
            />
          </ItemContentTitle>
          {item.description.map((desc) => (
            <ItemContentDesc key={`item-desc-${desc}`}>
              <ReactMarkdown children={desc} components={{ a: LinkRenderer }} />
            </ItemContentDesc>
          ))}
        </div>
      ))}
    </FeatureItem>
  );
}
