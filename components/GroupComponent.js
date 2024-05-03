import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.avatarParent}>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <Text style={[styles.puertoRico, styles.puertoRicoFlexBox]}>
        Puerto Rico
      </Text>
      <Text style={[styles.youremaildomaincom01, styles.puertoRicoFlexBox]}>
        youremail@domain.com | +01 234 567 89
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  puertoRicoFlexBox: {
    textAlign: "center",
    color: Color.globalBlack,
    position: "absolute",
  },
  avatarIcon: {
    top: 0,
    left: 74,
    width: 127,
    height: 130,
    position: "absolute",
  },
  puertoRico: {
    top: 135,
    left: 40,
    fontSize: FontSize.title2Bold22_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 194,
  },
  youremaildomaincom01: {
    height: "10.78%",
    width: "100%",
    top: "89.22%",
    left: "0%",
    fontSize: FontSize.body1Medium_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.caption2Regular11,
  },
  avatarParent: {
    top: 131,
    left: 57,
    width: 276,
    height: 187,
    position: "absolute",
  },
});

export default GroupComponent;
