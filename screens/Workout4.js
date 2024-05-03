import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Workout4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout4}>
      <View style={[styles.background, styles.imageIconPosition]}>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle1.png")}
        />
      </View>
      <View style={[styles.info, styles.infoPosition]}>
        <View style={[styles.duration, styles.caloriePosition]}>
          <Image
            style={styles.playIcon}
            contentFit="cover"
            source={require("../assets/play.png")}
          />
          <Text style={styles.min}>60 min</Text>
        </View>
        <View style={[styles.calorie, styles.caloriePosition]}>
          <Image
            style={styles.playIcon}
            contentFit="cover"
            source={require("../assets/flame.png")}
          />
          <Text style={styles.min}>350 Cal</Text>
        </View>
      </View>
      <View style={[styles.text, styles.infoPosition]}>
        <Text style={styles.subtitle}>04 Workouts for Beginner</Text>
        <Text style={styles.title}>Yoga Training</Text>
        <Text
          style={styles.description}
        >{`Want your body to be healthy. Join our program with directions according to body’s goals. 

Maintain body fitness by doing physical exercise at least 2-3 times a week. `}</Text>
      </View>
      <View style={[styles.smallCard, styles.smallCardLayout]}>
        <View style={[styles.rectangle, styles.imageIconPosition]} />
        <Text style={[styles.title1, styles.titleTypo]}>{`Simple Warm-Up
Exercises`}</Text>
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image2.png")}
        />
        <Image
          style={styles.downIcon}
          contentFit="cover"
          source={require("../assets/down1.png")}
        />
        <Text style={styles.title2}>0:30</Text>
      </View>
      <View style={[styles.smallCard1, styles.smallCardLayout]}>
        <View style={[styles.rectangle, styles.imageIconPosition]} />
        <Text style={[styles.title3, styles.titleTypo]}>
          Stability Training Basics
        </Text>
        <Image
          style={[styles.imageIcon3, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image3.png")}
        />
        <Image
          style={styles.downIcon}
          contentFit="cover"
          source={require("../assets/down2.png")}
        />
        <Text style={styles.title2}>0:30</Text>
      </View>
      <Pressable
        style={[styles.buttonPrimary, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Workout5")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Start Workout</Text>
      </Pressable>
      <View style={[styles.buttonPrimary1, styles.buttonFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Frame5")}>
          <Text
            style={[styles.requestForVerification, styles.buttonTypo]}
          >{`Request for verification `}</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("Workout3")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIconPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  infoPosition: {
    left: "5.85%",
    position: "absolute",
  },
  caloriePosition: {
    paddingBottom: Padding.p_8xs,
    paddingRight: Padding.p_sm,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_8xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.main,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  smallCardLayout: {
    height: 76,
    position: "absolute",
  },
  titleTypo: {
    fontWeight: "500",
    lineHeight: 18,
    top: "13.16%",
    height: "47.37%",
    left: "30.23%",
    fontSize: FontSize.bodyMedium_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_133xl,
    justifyContent: "center",
    height: 60,
    width: 353,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    lineHeight: 25,
    fontWeight: "600",
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.h3Regular,
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  imageIcon: {
    height: "41.62%",
    bottom: "58.38%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  rectangleIcon: {
    height: "68.47%",
    top: "31.53%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  background: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  playIcon: {
    width: 19,
    height: 19,
  },
  min: {
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.white,
  },
  duration: {
    width: "43.22%",
    right: "56.78%",
    left: "0%",
  },
  calorie: {
    width: "46.23%",
    left: "53.77%",
    right: "0%",
  },
  info: {
    height: "3.16%",
    width: "50.64%",
    top: "42.86%",
    right: "43.51%",
    bottom: "53.98%",
  },
  subtitle: {
    height: "6.88%",
    width: "47.27%",
    top: "14.2%",
    color: Color.primary,
    left: "0.63%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
  },
  title: {
    height: "10.76%",
    width: "52.1%",
    lineHeight: 25,
    color: Color.globalBlack,
    fontWeight: "600",
    fontSize: FontSize.h5Semibold_size,
    left: "0.63%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    top: "0%",
    position: "absolute",
  },
  description: {
    height: "49.21%",
    top: "50.79%",
    lineHeight: 21,
    fontSize: FontSize.bodyMedium_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    height: "24.73%",
    width: "88.55%",
    top: "35.46%",
    right: "5.6%",
    bottom: "39.8%",
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.border,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  title1: {
    width: "47.26%",
  },
  imageIcon2: {
    width: "25.07%",
    right: "74.93%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  downIcon: {
    top: 26,
    right: 16,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  title2: {
    width: "18.01%",
    top: "65.79%",
    left: "30.23%",
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
  },
  smallCard: {
    top: 560,
    left: 24,
    width: 347,
  },
  title3: {
    width: "47.25%",
  },
  imageIcon3: {
    width: "25.09%",
    right: "74.91%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  smallCard1: {
    top: 650,
    left: 25,
    width: 346,
  },
  button: {
    color: Color.white,
    textAlign: "center",
    lineHeight: 25,
  },
  buttonPrimary: {
    top: 824,
    left: 23,
    backgroundColor: Color.main,
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_133xl,
    justifyContent: "center",
    height: 60,
    width: 353,
  },
  requestForVerification: {
    color: Color.globalBlack,
  },
  buttonPrimary1: {
    top: 753,
    left: 20,
    backgroundColor: Color.border,
  },
  backChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    height: 39,
    width: 39,
  },
  iconChevronleft: {
    marginTop: -7.5,
    top: "50%",
    right: 14,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 36,
    left: 30,
  },
  workout4: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.dark1,
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default Workout4;
