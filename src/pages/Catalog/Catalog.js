import { getAllAdverts } from 'Api/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { CatalogContainer, LoadMoreBtn } from './Catalog.styled';
import AdvertsCard from 'components/AdvertsCard/AdvertsCard';
import { useFavorites } from 'hooks/useFavorites';

const Catalog = () => {
  const [advertsList, setAdvertsList] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtnLoadmore, setShowBtnLoadmore] = useState(false);

  useEffect(() => {
    const getAdverts = async () => {
      const res = await getAllAdverts(page);
      setShowBtnLoadmore(res.data.length > 7);
      setAdvertsList(prevState => {
        return [...prevState, ...res.data];
      });
    };
    getAdverts();
  }, [page]);

  const handleChangePage = () => setPage(prevState => prevState + 1);

  const { favorites, toggleFavorite } = useFavorites();
  return (
    <>
      <CatalogContainer>
        {advertsList.map(item => (
          <AdvertsCard
            key={item.id}
            advertInfo={item}
            isFavorite={!!favorites.find(({ id }) => id === item.id)}
            toggleFavorite={() => toggleFavorite(item)}
          />
        ))}
      </CatalogContainer>
      {showBtnLoadmore && (
        <LoadMoreBtn onClick={handleChangePage}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Catalog;
