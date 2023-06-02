import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverView from './screens/MealsOverView';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import { Provider } from 'react-redux';



// import FavouritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawernavigator(){
  return(
    <Drawer.Navigator
    screenOptions={{
          headerStyle:{ backgroundColor: '#2c1908' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#523317' }
        }}>
      <Drawer.Screen name="Home" component={CategoriesScreen}
           options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: (
            ({color, size}) => (<Ionicons name="home" color = {color} size={size} />)
            )
        }}  />
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} 
      options={{
          drawerLabel: 'Favorites Screen',
          drawerIcon: (
            ({color, size}) => (<Ionicons name="person" color = {color} size={size} />)
            )
        }}  />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    {/* <FavouritesContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{ backgroundColor: '#2c1908' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#523317' }
        }}
        >
      <Stack.Screen 
          name="Allcatagories" 
          component={Drawernavigator}
          options={{
            headerShown: false
          }}
           />
           <Stack.Screen 
          name="MealsOverView" 
          component={MealsOverView}
           />
           <Stack.Screen 
          name="MealDetailsScreen" 
          component={MealDetailsScreen}
        
           />
      {/* <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b'},
        headerTintColor: 'white',
        drawerActiveTintColor: '#3c0a6b',
        drawerActiveBackgroundColor:'#f0e1ff',
        drawerStyle: { backgroundColor: '#cccccc'},
      }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: (
            ({color, size}) => (<Ionicons name="home" color = {color} size={size} />)
            )
        }} />
        <Drawer.Screen name="User" component={UserScreen}
        options={{
          drawerLabel: 'User Screen',
          drawerIcon: (
            ({color, size}) => (<Ionicons name="person" color = {color} size={size} />)
            )
        }}  />
      </Drawer.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
