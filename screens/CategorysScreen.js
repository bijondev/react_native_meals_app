import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";
import { CategoryGridTitle } from "../components/CategoryGridTitle";

import { Grid } from "../components/Grid";

function CategorysScreen({ navigation }) {
  function renderCategoryItem(itemData) {
// 
    function pressHandeler() {
      // navigation.navigate("MealsOverview");
    }

    return (
      <Grid/>
    );

    // return(
    //   <View><Text>{itemData.item.title}</Text></View>
    // );

    // return (
    //   <CategoryGridTitle
    //     title={itemData.item.title}
    //     color={itemData.item.color}
    //     onPress={pressHandeler}
    //   />
    // );
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
export default CategorysScreen;
