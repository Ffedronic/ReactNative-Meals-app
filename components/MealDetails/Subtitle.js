import { View, Text, StyleSheet } from "react-native"

View
function Subtitle({subTitle}) {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
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
  });

export default Subtitle