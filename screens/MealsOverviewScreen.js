import { StyleSheet} from "react-native";
import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  /* The `useLayoutEffect` hook is used to perform side effects in a React component. In this case, it
 is used to update the title of the screen based on the selected category. */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <MealsList
      displayedMeals={displayedMeals}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
