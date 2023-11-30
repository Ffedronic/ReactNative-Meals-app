import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";

function FavoritesScreen() {
  const mealsFavoritesCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    mealsFavoritesCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  } else {
    return <MealsList displayedMeals={favoriteMeals} />;
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default FavoritesScreen;
