import * as React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverView from "./screens/MealsOverView";
import MealDetailsScreen from "./screens/MealDetailsScreen";
// import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function Drawernavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Allcatagories" component={CategoriesScreen} />
//       {/* <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} /> */}
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer
        screenOptions={{
          headerStyle: { backgroundColor: "#2c1908" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#523317" },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CategoriesScreen}
            // options={{
            //     title: 'All categories',

            //   }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverView} />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
