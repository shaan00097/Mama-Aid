import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Workout6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout6}>
      <Image
        style={styles.workout6Child}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Image
        style={[styles.backgroundIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.info}>
        <View style={[styles.duration, styles.caloriePosition]}>
          <Image
            style={styles.playIcon}
            contentFit="cover"
            source={require("../assets/play.png")}
          />
          <Text style={[styles.min, styles.minClr]}>60 min</Text>
        </View>
        <View style={[styles.calorie, styles.caloriePosition]}>
          <Image
            style={styles.playIcon}
            contentFit="cover"
            source={require("../assets/flame.png")}
          />
          <Text style={[styles.min, styles.minClr]}>350 Cal</Text>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={[styles.subtitle, styles.minLayout]}>
          04 Workouts for Beginner
        </Text>
        <Text style={styles.title}>Yoga Training</Text>
      </View>
      <View style={styles.smallCard}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.title1, styles.titlePosition]}>{`Simple Warm-Up
Exercises`}</Text>
        <Image
          style={[styles.imageIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.downIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/down.png")}
        />
        <Text style={[styles.title2, styles.titlePosition]}>0:30</Text>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("Workout5")}
      >
        <View style={[styles.backChild, styles.backChildBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.bottom, styles.bottomLayout]}>
        <LinearGradient
          style={[styles.overlay, styles.bottomLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
        />
        <Image
          style={[styles.expandIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/expand.png")}
        />
        <View style={[styles.volume, styles.volumeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/sound.png")}
          />
        </View>
        <Text style={[styles.time, styles.timePosition]}>0:10 / 0:41</Text>
        <View style={[styles.bar, styles.barLayout]}>
          <View style={[styles.barProgressed, styles.barLayout]} />
          <Image
            style={styles.barChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
        <Image
          style={[styles.playpuseIcon, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/playpuse.png")}
        />
        <Image
          style={styles.bottomChild}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
      </View>
      <View style={styles.view} />
      <View style={[styles.iconlyboldplayParent, styles.frameParentSpaceBlock]}>
        <Image
          style={styles.iconlyboldplay}
          contentFit="cover"
          source={require("../assets/iconlyboldplay.png")}
        />
        <View style={[styles.step01Wrapper, styles.volumeFlexBox]}>
          <Text style={[styles.step01, styles.stepTypo]}>Step 01</Text>
        </View>
        <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
      </View>
      <View style={[styles.iconlyboldplayGroup, styles.frameParentSpaceBlock]}>
        <Image
          style={styles.iconlyboldplay}
          contentFit="cover"
          source={require("../assets/iconlyboldplay1.png")}
        />
        <View style={[styles.step01Wrapper, styles.volumeFlexBox]}>
          <Text style={[styles.step01, styles.stepTypo]}>Step 02</Text>
        </View>
        <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
      </View>
      <View
        style={[styles.iconlyboldplayContainer, styles.frameParentSpaceBlock]}
      >
        <Image
          style={styles.iconlyboldplay}
          contentFit="cover"
          source={require("../assets/iconlyboldplay1.png")}
        />
        <View style={[styles.step01Wrapper, styles.volumeFlexBox]}>
          <Text style={[styles.step01, styles.stepTypo]}>Step 03</Text>
        </View>
        <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
      </View>
      <View style={[styles.frameView, styles.frameParentSpaceBlock]}>
        <Image
          style={styles.iconlyboldplay}
          contentFit="cover"
          source={require("../assets/iconlyboldplay1.png")}
        />
        <View style={[styles.step01Wrapper, styles.volumeFlexBox]}>
          <Text style={[styles.step01, styles.stepTypo]}>Step 04</Text>
        </View>
        <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={styles.volumeFlexBox}>
          <Image
            style={styles.iconlyboldplay}
            contentFit="cover"
            source={require("../assets/iconlyboldlock.png")}
          />
          <Text style={[styles.step05, styles.stepTypo]}>Step 05</Text>
        </View>
        <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
      </View>
      <Pressable
        style={[styles.nextWrapper, styles.frameParentSpaceBlock]}
        onPress={() => navigation.navigate("WorkoutSummary")}
      >
        <Text style={styles.next}> End</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  caloriePosition: {
    paddingBottom: Padding.p_8xs,
    paddingRight: Padding.p_sm,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_8xs,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.main,
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  minClr: {
    color: Color.white,
    textAlign: "left",
  },
  minLayout: {
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
  },
  rectanglePosition: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  titlePosition: {
    left: "30.23%",
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  backChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  bottomLayout: {
    height: 120,
    position: "absolute",
  },
  volumeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  timePosition: {
    top: 60,
    position: "absolute",
  },
  barLayout: {
    height: 4,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    position: "absolute",
  },
  stepTypo: {
    color: Color.colorGray_500,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  workout6Child: {
    top: -7,
    left: -9,
    width: 420,
    height: 326,
    position: "absolute",
  },
  backgroundIcon: {
    height: "68.47%",
    top: "31.53%",
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
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
    height: "32.68%",
    width: "90.73%",
    top: "67.32%",
    color: Color.primary,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    left: "0%",
    position: "absolute",
  },
  title: {
    height: "50.97%",
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.globalBlack,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    height: "6.03%",
    width: "46.13%",
    top: "35.47%",
    right: "47.46%",
    bottom: "58.5%",
    left: "6.41%",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.border,
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  title1: {
    height: "47.37%",
    width: "47.26%",
    top: "13.16%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 18,
    fontWeight: "500",
  },
  imageIcon: {
    width: "25.07%",
    right: "74.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  downIcon: {
    top: 26,
    right: 16,
    position: "absolute",
  },
  title2: {
    width: "18.01%",
    top: "65.79%",
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
  },
  smallCard: {
    top: 430,
    left: 21,
    width: 347,
    height: 76,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.globalBlack,
    left: 0,
    top: 0,
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
    left: 25,
  },
  overlay: {
    right: 0,
    backgroundColor: Color.gradientBluePrimary,
    left: 0,
    top: 0,
  },
  expandIcon: {
    top: 61,
    right: 16,
    position: "absolute",
  },
  volume: {
    top: 53,
    right: 48,
    borderRadius: Border.br_21xl,
    padding: Padding.p_5xs,
    position: "absolute",
  },
  time: {
    left: 40,
    fontSize: FontSize.body1Medium_size,
    lineHeight: 24,
    fontFamily: FontFamily.adamina,
    textAlign: "left",
    color: Color.white,
  },
  barProgressed: {
    backgroundColor: Color.white,
    width: 73,
    left: 0,
    top: 0,
  },
  barChild: {
    top: -4,
    left: 67,
    width: 12,
    height: 12,
    position: "absolute",
  },
  bar: {
    top: 96,
    left: 16,
    backgroundColor: Color.colorGray_700,
    right: 16,
  },
  playpuseIcon: {
    left: 8,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  bottomChild: {
    top: -20,
    left: 168,
    width: 43,
    height: 40,
    position: "absolute",
  },
  bottom: {
    right: -2,
    bottom: 583,
    left: -1,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 352,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    top: 698,
    height: 39,
    alignItems: "center",
    position: "absolute",
  },
  iconlyboldplay: {
    width: 20,
    height: 20,
  },
  step01: {
    fontFamily: FontFamily.h3Regular,
  },
  step01Wrapper: {
    width: 252,
  },
  text1: {
    fontFamily: FontFamily.satoshiRegular,
    fontWeight: "500",
  },
  iconlyboldplayParent: {
    top: 526,
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    alignItems: "center",
  },
  iconlyboldplayGroup: {
    top: 569,
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    alignItems: "center",
  },
  iconlyboldplayContainer: {
    top: 610,
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    alignItems: "center",
  },
  frameView: {
    top: 651,
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    alignItems: "center",
  },
  step05: {
    marginLeft: 10,
    fontFamily: FontFamily.h3Regular,
  },
  frameParent: {
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    left: 22,
    alignItems: "center",
    top: 698,
  },
  next: {
    lineHeight: 22,
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.gray6,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textAlign: "left",
  },
  nextWrapper: {
    top: 766,
    left: 276,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    borderColor: Color.wrong,
    width: 102,
    paddingHorizontal: Padding.p_2xl,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.main,
  },
  workout6: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.dark1,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Workout6;
