import React from 'react';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

function NewsPage({ match }) {
  // 카테고리가 선택되지 않았으면 all
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
