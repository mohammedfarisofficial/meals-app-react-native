import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
  <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle : {backgroundColor: '#351401'},
        headerTintColor : 'white',
        contentStyle : { backgroundColor : '#3f2f25'}
      }}>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{ title : 'All Categories'}} />
        <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>)
}

const styles = StyleSheet.create({
  container: {},
});
