import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import MediaList from "../components/MealsList";

function MealsOverView({ route, navigation }) {
  const title = route.params.catTitle;
  const catId = route.params.catId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((Category) => Category.id == catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MediaList items={displayedMeals} />;
}

export default MealsOverView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
