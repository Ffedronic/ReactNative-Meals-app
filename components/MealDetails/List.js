import { Text, View, StyleSheet } from "react-native";

function List(props) {
  const { data } = props;
  return data.map((ingredient, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemtext}>{ingredient}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemtext: {
    color: "#351401",
    textAlign: "center",
  },
});
export default List;
