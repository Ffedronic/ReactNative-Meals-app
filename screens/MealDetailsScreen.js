import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function onPressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={onPressHandler} icon={"star"} color={"white"} />
      },
    });
  }, [navigation, onPressHandler]);


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} src={selectedMeal.imageUrl} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subTitle={"Ingredients"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle subTitle={"Steps"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    margin: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
