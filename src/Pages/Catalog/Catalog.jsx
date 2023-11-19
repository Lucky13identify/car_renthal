import React, { useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import { CatalogCards } from 'components/Cards/CatalogCards';
import { Search } from 'components/Search/Search';
import {
  Ul,
  Conteiner,
  LoadMoreButton,
  BoxButton,
  Wrap,
} from './Catalog.styled';

export default function Catalog({
  toggleCars,
  favoritesCars,
  cars,
  filterCatalogCars,
  carsArray,
  inputPrice,
}) {
  const [limit, setLimit] = useState(8);

  const clickLoadMore = () => {
    setLimit(state => state + 8);
  };

  const catalogCars = cars.slice(0, limit) || [];
  return (
    <Wrap>
      <Search
        filterCatalogCars={filterCatalogCars}
        carsArray={carsArray}
        inputPrice={inputPrice}
      />
      <Conteiner>
        <Ul>
          {catalogCars.length !== 0 ? (
            <CatalogCards
              catalogCars={catalogCars}
              toggleCars={toggleCars}
              favoritesCars={favoritesCars}
            />
          ) : (
            <Hourglass
              visible={true}
              height="50"
              width="50"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            />
          )}
        </Ul>

        <BoxButton>
          {limit < cars.length && (
            <LoadMoreButton type="button" onClick={clickLoadMore}>
              Load more
            </LoadMoreButton>
          )}
        </BoxButton>
      </Conteiner>
    </Wrap>
  );
}
