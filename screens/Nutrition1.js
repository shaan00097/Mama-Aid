import * as React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Nutrition1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.nutrition2, styles.icon4Layout]}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img3.png")}
      >
        <View style={[styles.sauces, styles.juicePosition]} />
        <View style={[styles.pizza, styles.juicePosition]} />
        <View style={[styles.shrimp, styles.juicePosition]} />
        <View style={styles.rice} />
        <View style={[styles.juice, styles.juicePosition]} />
        <View style={[styles.juice1, styles.juicePosition]} />
        <View style={styles.logo} />
      </ImageBackground>
      <Text style={[styles.pleaseEnterThe, styles.myNutritionPosition]}>
        Please enter the following details to recommend you the best meal plan
      </Text>
      <Text style={[styles.myNutrition, styles.myNutritionPosition]}>
        My Nutrition !
      </Text>
      <View style={[styles.inputField, styles.inputBorder]}>
        <Text style={styles.selectYourLactation}>
          Select your Lactation Status
        </Text>
        <Text style={[styles.repeatPassword, styles.repeatPasswordTypo]}>
          repeat password
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Image
          style={styles.iconArrowFullDown}
          contentFit="cover"
          source={require("../assets/icon--arrow-full-down4.png")}
        />
      </View>
      <Text style={styles.lactationStatus}>{`Lactation Status `}</Text>
      <View style={[styles.inputField, styles.inputBorder]}>
        <Text style={styles.selectYourLactation}>
          Select your Postpartum Stage
        </Text>
        <Text style={[styles.repeatPassword, styles.repeatPasswordTypo]}>
          repeat password
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Image
          style={styles.iconArrowFullDown}
          contentFit="cover"
          source={require("../assets/icon--arrow-full-down4.png")}
        />
      </View>
      <View style={[styles.inputField2, styles.inputBorder]}>
        <Text style={[styles.examplegmailcom, styles.repeatPasswordTypo]}>
          example@gmail.com
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon3.png")}
        />
      </View>
      <Text style={[styles.first6Months, styles.monthsTypo]}>
        First 6 Months
      </Text>
      <Text style={[styles.after6Months, styles.monthsTypo]}>
        After 6 Months
      </Text>
      <View style={[styles.inputField, styles.inputBorder]}>
        <Text style={styles.selectYourLactation}>
          Select your Lactation Status
        </Text>
        <Text style={[styles.repeatPassword, styles.repeatPasswordTypo]}>
          repeat password
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Image
          style={styles.iconArrowFullDown}
          contentFit="cover"
          source={require("../assets/icon--arrow-full-down5.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Nutrition5")}
      >
        <Image
          style={[styles.icon4, styles.icon4Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-2362.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon4Layout: {
    width: "100%",
    overflow: "hidden",
  },
  juicePosition: {
    top: "50%",
    position: "absolute",
  },
  myNutritionPosition: {
    textAlign: "left",
    color: Color.globalBlack,
    left: 21,
    position: "absolute",
  },
  inputBorder: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 25,
    top: 480,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  repeatPasswordTypo: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    flex: 1,
  },
  monthsTypo: {
    left: 40,
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  sauces: {
    marginTop: 43,
    right: 0,
    width: 106,
    height: 87,
  },
  pizza: {
    marginTop: -115,
    right: -56,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    width: 132,
    height: 132,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: "50%",
  },
  shrimp: {
    marginTop: -134,
    left: -30,
    width: 119,
    height: 122,
  },
  rice: {
    marginLeft: -59,
    top: -23,
    width: 111,
    height: 112,
    left: "50%",
    position: "absolute",
  },
  juice: {
    marginTop: 52,
    left: -12,
    width: 101,
    height: 69,
  },
  juice1: {
    marginTop: 70,
    left: 43,
    width: 82,
    height: 65,
  },
  logo: {
    marginTop: -21,
    marginLeft: -33,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  imgIcon: {
    top: 0,
    left: -18,
    width: 464,
    height: 282,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterThe: {
    top: 389,
    fontSize: FontSize.subtitleMedium_size,
    letterSpacing: 1,
    lineHeight: 24,
    width: 323,
    height: 34,
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
    left: 21,
  },
  myNutrition: {
    top: 319,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    color: Color.globalBlack,
    left: 21,
  },
  selectYourLactation: {
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  repeatPassword: {
    marginLeft: 10,
    display: "none",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: "none",
    overflow: "hidden",
  },
  iconArrowFullDown: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  inputField: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
  },
  lactationStatus: {
    top: 454,
    lineHeight: 18,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    fontSize: FontSize.body1Medium_size,
    left: 25,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  examplegmailcom: {
    display: "none",
  },
  inputField2: {
    height: 141,
    paddingTop: Padding.p_lg,
  },
  first6Months: {
    top: 554,
  },
  after6Months: {
    top: 592,
  },
  icon4: {
    height: "100%",
    borderRadius: Border.br_2xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.63%",
    top: "64.08%",
    right: "7.38%",
    bottom: "31.22%",
    width: "84.99%",
    height: "4.69%",
    position: "absolute",
  },
  nutrition2: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 60,
    elevation: 60,
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default Nutrition1;
