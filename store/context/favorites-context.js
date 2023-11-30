import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMealsIds, setFavoritesMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoritesMealsIds((currentFavIds) =>
      currentFavIds.filter((favoriteId) => favoriteId !== id)
    );
  }

  const values = {
    ids: favoritesMealsIds,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
