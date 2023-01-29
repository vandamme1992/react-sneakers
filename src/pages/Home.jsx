import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/ShoesBlock/Skeleton';
import ShoesBlock from '../components/ShoesBlock';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'popular',
    sortProperty: 'rating',
  });

  const [orderType, setOrderType] = useState('asc');

  const category = categoryId > 0 ? `category=${categoryId}` : '';

  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63bd875018bc301c026bdb66.mockapi.io/items?page=${currentPage}&limit=3&${category}&sortBy=${sortType.sortProperty}&order=${orderType}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, orderType, currentPage, search, category]);

  const sneakers = items
    .filter((elems) => {
      if (elems.name.toLowerCase().includes(searchValue)) {
        return true;
      }

      return false;
    })
    .map((obj, index) => <ShoesBlock key={index} {...obj} />);

  const skeleton = [...Array(3)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort
          setOrderType={setOrderType}
          sort
          value={sortType}
          onChangeSort={(index) => setSortType(index)}
        />
      </div>
      <h2 className="content__title">All shoes</h2>
      <div className="content__items">{isLoading ? skeleton : sneakers}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
