import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
  }
  .img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }

  .contents {
    h2 {
      margin: 0;
      margin-left: 5px;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      margin-left: 5px;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="img" src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
