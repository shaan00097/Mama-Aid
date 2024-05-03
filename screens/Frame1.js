import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import Nutrition8 from "./Nutrition8";

const Frame1 = () => {
  return (
    <View style={styles.nutrition7Parent}>
      <Nutrition8 />
    </View>
  );
};

const styles = StyleSheet.create({
  nutrition7Parent: {
    flex: 1,
    width: "100%",
    height: 903,
  },
});

export default Frame1;
