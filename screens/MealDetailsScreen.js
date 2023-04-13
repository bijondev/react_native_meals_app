import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);


  function headerButtonPressHandeler(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>");
  }


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandeler} />
      }
    });
  },[navigation, headerButtonPressHandeler]);



  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        compelexity={selectedMeal.complexity}
        affordibility={selectedMeal.affordability}
        style={styles.detailtext}
        textStyle={styles.detailtext}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer} >
          <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>

          <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
      </View>
      </View>

    </ScrollView>
  );
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24
  },
  image: {
    width: "100%",
    height: 250,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailtext:{
    color:'white'
  },
  subTitle:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  listOuterContainer:{
    alignItems: 'center'
  },
  listContainer:{
    width: '80%'
  }
});
