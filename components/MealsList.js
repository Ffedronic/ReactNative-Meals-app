import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

function MealsList({displayedMeals}) {

    function renderMealItem(itemData) {
        return (
          <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />
        );
      }


    return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  


export default MealsList