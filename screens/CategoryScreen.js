import { FlatList } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data.js";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoryScreen({ navigation }) {

  function renderCategoryItem(itemData) {

    function onPressHandler() {
      navigation.navigate("MealOverview", {categoryId: itemData.item.id});
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
