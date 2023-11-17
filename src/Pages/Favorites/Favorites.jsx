import {
  Ul,
  Conteiner,
  LoadMoreButton,
  BoxButton,
  Wrap,
} from './Favorites.styled';
import { useState } from 'react';
import React from 'react';

import { FavoritesCards } from 'components/Cards/FavoriteCards';
import { Search } from 'components/Search/Search';

export default function Favorites({
  favoritesCars,
  toggleCars,
  filterFavoriteCars,
  carsArray,
  inputPrice,
}) {
  const [limit, setLimit] = useState(8);
  const clickLoadMore = () => {
    setLimit(state => state + 8);
  };
  console.log(favoritesCars.length);
  const cars = favoritesCars.slice(0, limit);

  return (
    <Wrap>
      {favoritesCars.length === 0 ? (
        'Your favorite cars will be displayed here.'
      ) : (
        <Search
          filterCatalogCars={filterFavoriteCars}
          carsArray={carsArray}
          inputPrice={inputPrice}
        />
      )}

      <Conteiner>
        <Ul>
          <FavoritesCards
            favoritesCars={cars}
            toggleCars={toggleCars}
            catalogCars={null}
          />
        </Ul>
        <BoxButton>
          {favoritesCars.length >= 8 && (
            <LoadMoreButton type="button" onClick={clickLoadMore}>
              Load more
            </LoadMoreButton>
          )}
        </BoxButton>
      </Conteiner>
    </Wrap>
  );
}
