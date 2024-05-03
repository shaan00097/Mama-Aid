import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const FoodiesWhiteIcon = () => {
  return (
    <Image
      style={styles.foodiesWhiteIcon}
      contentFit="cover"
      source={require("../assets/foodies-white.png")}
    />
  );
};

const styles = StyleSheet.create({
  foodiesWhiteIcon: {
    width: 36,
    height: 36,
  },
});

export default FoodiesWhiteIcon;
