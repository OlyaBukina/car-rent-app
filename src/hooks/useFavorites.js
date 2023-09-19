import { useCallback } from 'react';
import { useState } from 'react';

const getSavedFavorites = () => {
  const savedJSON = localStorage.getItem('favorites-adverts');
  return savedJSON === null ? [] : JSON.parse(savedJSON);
};

const setSavedFavorites = saved => {
  localStorage.setItem('favorites-adverts', JSON.stringify(saved));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getSavedFavorites());

  const addToFavorites = useCallback(advert => {
    try {
      const saved = getSavedFavorites();
      saved.push(advert);
      setSavedFavorites(saved);
      setFavorites(saved);
    } catch (error) {
      throw error;
    }
  }, []);

  const removeFromFavorites = useCallback(id => {
    try {
      const saved = getSavedFavorites();
      const filtered = saved.filter(item => item.id !== id);
      setSavedFavorites(filtered);
      setFavorites(filtered);
    } catch (error) {
      throw error;
    }
  }, []);

  const toggleFavorite = useCallback(
    advert => {
      const saved = getSavedFavorites();

      const includes = !!saved.find(item => item.id === advert.id);
      if (includes) {
        removeFromFavorites(advert.id);
      } else {
        addToFavorites(advert);
      }
    },
    [addToFavorites, removeFromFavorites]
  );

  return { favorites, addToFavorites, removeFromFavorites, toggleFavorite };
};
