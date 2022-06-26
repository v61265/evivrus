export default function ContentHandler({ contents, name }) {
  return (
    <div>
      {contents.map((content, i) => {
        switch (content.style) {
          case "link": {
            return (
              <a key={`${name}-${i}`} href={content.href}>
                {content.content}
              </a>
            );
          }
          default: {
            return <span key={`${name}-${i}`}>{content.content}</span>;
          }
        }
      })}
    </div>
  );
}
