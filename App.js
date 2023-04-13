import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealDetailsScreen from "./screens/MealDetailsScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator
        screenOptions={{
          headerStyle:{ backgroundColor: '#2c1908' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#523317' }
        }}
        >
          <Stack.Screen name="Home" 
          component={CategoriesScreen}
          options={{
            title: 'All categories',
            
          }}
           />
          <Stack.Screen 
          name="MealsOverViewScreen" 
          component={MealsOverView}

           />
           <Stack.Screen 
          name="MealDetailsScreen" 
          component={MealDetailsScreen}
          
          
           />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
