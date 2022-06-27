import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

const CategoryGridTile = ({ title, color,onPress }) => {
  let imageURL = {
    uri: "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        {/* <View>
          <Image source={imageURL} /> 
        </View> */}
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white ",
    shadowColor: "#999999",
    shadowOpacity: 0.25,
    shadowOffset: { width: 15, height: 15 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
});
