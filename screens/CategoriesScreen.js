import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";



const CategoriesScreen = ({ navigation }) => {

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealOverview',{
        categoryId: itemData.item.id,
      })
  };
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
