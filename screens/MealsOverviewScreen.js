import { View, StyleSheet, Text } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
