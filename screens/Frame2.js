import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Nutrition6 from "./Nutrition6";

const Frame2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.nutrition3Wrapper}>
        <Nutrition6 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nutrition3Wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 393,
    height: 852,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default Frame2;
