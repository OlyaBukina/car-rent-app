import AdvertsCard from 'components/AdvertsCard/AdvertsCard';
import { useFavorites } from 'hooks/useFavorites';
import { Wrapper, Container } from 'pages/Catalog/Catalog.styled';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  return (
    <Wrapper>
      <Container>
        {favorites.map(item => (
          <AdvertsCard
            key={item.id}
            advertInfo={item}
            isFavorite={!!favorites.find(({ id }) => id === item.id)}
            toggleFavorite={() => toggleFavorite(item)}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
