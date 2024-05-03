import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DocVerifyWO1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.docVerifyWo2}>
      <View style={[styles.background, styles.imageIconPosition]}>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image4.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle2.png")}
        />
      </View>
      <View style={styles.info}>
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
            source={require("../assets/flame1.png")}
          />
          <Text style={styles.min}>350 Cal</Text>
        </View>
      </View>
      <View style={styles.text}>
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
          style={[styles.imageIcon1, styles.imageIconLayout]}
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
          style={[styles.imageIcon2, styles.imageIconLayout]}
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
        style={styles.back}
        onPress={() => navigation.navigate("DocVerifyWO")}
      >
        <View style={styles.backChild} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.nextWrapper, styles.nextShadowBox]}
        onPress={() => navigation.navigate("DocVerifyWO")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Decline</Text>
      </Pressable>
      <Pressable
        style={[styles.nextContainer, styles.nextShadowBox]}
        onPress={() => navigation.navigate("DocVerifyWO")}
      >
        <Text style={[styles.next1, styles.nextTypo]}>Approve</Text>
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
  nextShadowBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    width: 115,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 754,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textAlign: "left",
  },
  imageIcon: {
    height: "41.63%",
    bottom: "58.37%",
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
    color: Color.white,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
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
    height: "3.4%",
    width: "50.64%",
    top: "44.25%",
    right: "45.29%",
    bottom: "52.35%",
    left: "4.07%",
    position: "absolute",
  },
  subtitle: {
    height: "6.89%",
    width: "47.27%",
    top: "14.19%",
    color: Color.primary,
    left: "0.63%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
  },
  title: {
    height: "10.75%",
    width: "52.1%",
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.globalBlack,
    fontWeight: "600",
    left: "0.63%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    top: "0%",
    position: "absolute",
  },
  description: {
    height: "49.22%",
    top: "50.78%",
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
    height: "28.62%",
    width: "88.55%",
    top: "35.47%",
    right: "5.6%",
    bottom: "35.92%",
    left: "5.85%",
    position: "absolute",
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
  imageIcon1: {
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
  imageIcon2: {
    width: "25.09%",
    right: "74.91%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  smallCard1: {
    top: 650,
    width: 346,
    left: 25,
  },
  backChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderColor: Color.globalBlack,
    borderWidth: 1,
    borderStyle: "solid",
    height: 39,
    width: 39,
    position: "absolute",
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
    top: 44,
    height: 39,
    width: 39,
    left: 25,
    position: "absolute",
  },
  next: {
    color: Color.globalBlack,
  },
  nextWrapper: {
    left: 25,
    backgroundColor: Color.border,
  },
  next1: {
    color: Color.gray6,
  },
  nextContainer: {
    left: 256,
    backgroundColor: Color.main,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    width: 115,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 754,
  },
  docVerifyWo2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.dark1,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default DocVerifyWO1;
