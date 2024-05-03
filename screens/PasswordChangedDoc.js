import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PasswordChangedDoc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordChangedDoc}>
      <Text style={styles.passwordChanged}>Password changed</Text>
      <Text style={[styles.yourPasswordHas, styles.buttonPrimaryFlexBox]}>
        Your password has been changed succesfully
      </Text>
      <Pressable
        style={[styles.buttonPrimary, styles.buttonPrimaryFlexBox]}
        onPress={() => navigation.navigate("LogInDoc")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Back to Login</Text>
      </Pressable>
      <Image
        style={styles.checked11}
        contentFit="cover"
        source={require("../assets/checked-1-1.png")}
      />
      <Image
        style={styles.checked11}
        contentFit="cover"
        source={require("../assets/checked-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPrimaryFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
  },
  passwordChanged: {
    top: 345,
    left: 51,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    textAlign: "left",
    position: "absolute",
  },
  yourPasswordHas: {
    top: 397,
    left: 68,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.baseShade70,
    display: "flex",
    alignItems: "flex-end",
    width: 257,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    fontWeight: "600",
    color: Color.white,
  },
  buttonPrimary: {
    top: 473,
    left: 20,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.main,
    width: 353,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
  },
  checked11: {
    top: 253,
    left: 167,
    width: 80,
    height: 79,
    position: "absolute",
  },
  passwordChangedDoc: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PasswordChangedDoc;
