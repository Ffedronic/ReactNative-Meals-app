import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";
useNavigation;

function MealItem(props) {
  const { complexity, affordability } = props;
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("MealDetailsScreen", { mealId: props.id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [
          styles.mealContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image src={props.imageUrl} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails
            duration={props.duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    padding: 16,
    overflow: "hidden",
  },
  mealItem: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    borderRadius: 8,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  // details: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 8,
  //   justifyContent: "center",
  // },
  // detailsItem: {
  //   marginHorizontal: 4,
  //   fontSize: 12,
  // },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default MealItem;
