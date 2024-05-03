import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  rectangle9,
  bMIScalingInPostpartum,
  propTop,
  propLeft,
  propHeight,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <Image
        style={[styles.groupChild, rectangleIconStyle]}
        contentFit="cover"
        source={rectangle9}
      />
      <Text style={[styles.bmiScalingIn, styles.adamSherPosition]}>
        {bMIScalingInPostpartum}
      </Text>
      <Text style={[styles.adamSher, styles.adamSherPosition]}>Adam sher</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adamSherPosition: {
    textAlign: "left",
    color: Color.globalBlack,
    left: 127,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    width: 116,
    height: 110,
    position: "absolute",
  },
  bmiScalingIn: {
    top: 31,
    fontSize: FontSize.body1Medium_size,
    fontWeight: "700",
    fontFamily: FontFamily.h3Regular,
    width: 217,
    height: 61,
  },
  adamSher: {
    top: 75,
    fontSize: FontSize.caption1Regular12_size,
    fontFamily: FontFamily.caption2Regular11,
    width: 237,
    height: 50,
  },
  rectangleParent: {
    top: 185,
    left: 15,
    width: 364,
    height: 125,
    position: "absolute",
  },
});

export default GroupComponent1;
