import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import Nutrition7 from "./Nutrition7";

const Frame3 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.nutrition8Wrapper}>
        <Nutrition7 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nutrition8Wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    height: 903,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 903,
  },
});

export default Frame3;
