import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.workout8Parent}>
        <View style={[styles.workout8, styles.workout8Layout]}>
          <Image
            style={[styles.workout8Child, styles.bottomPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-161.png")}
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
            style={styles.back}
            onPress={() => navigation.navigate("Workout3")}
          >
            <View style={styles.backChild} />
            <Image
              style={styles.iconChevronleft}
              contentFit="cover"
              source={require("../assets/icon--chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.bottom, styles.bottomPosition]}>
            <LinearGradient
              style={[styles.overlay, styles.overlayPosition]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
            />
            <Image
              style={[styles.expandIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/expand1.png")}
            />
            <View style={[styles.volume, styles.volumeFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/sound1.png")}
              />
            </View>
            <Text style={[styles.time, styles.timePosition]}>0:10 / 0:41</Text>
            <View style={[styles.bar, styles.barLayout]}>
              <View style={[styles.barProgressed, styles.barLayout]} />
              <Image
                style={styles.barChild}
                contentFit="cover"
                source={require("../assets/ellipse-11.png")}
              />
            </View>
            <Image
              style={[styles.playpuseIcon, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/playpuse1.png")}
            />
            <Image
              style={styles.bottomChild}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
          <View style={styles.view} />
          <View style={[styles.iconlyboldplayParent, styles.frameParentLayout]}>
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
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <View style={styles.volumeFlexBox}>
              <Image
                style={styles.iconlyboldplay}
                contentFit="cover"
                source={require("../assets/iconlyboldlock.png")}
              />
              <Text style={[styles.step03, styles.stepTypo]}>Step 03</Text>
            </View>
            <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameParentLayout]}>
            <View style={styles.volumeFlexBox}>
              <Image
                style={styles.iconlyboldplay}
                contentFit="cover"
                source={require("../assets/iconlyboldlock.png")}
              />
              <Text style={[styles.step03, styles.stepTypo]}>Step 04</Text>
            </View>
            <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
          </View>
          <View style={[styles.frameContainer, styles.frameParentLayout]}>
            <View style={styles.volumeFlexBox}>
              <Image
                style={styles.iconlyboldplay}
                contentFit="cover"
                source={require("../assets/iconlyboldlock.png")}
              />
              <Text style={[styles.step03, styles.stepTypo]}>Step 05</Text>
            </View>
            <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
          </View>
          <View style={[styles.frameView, styles.frameParentLayout]}>
            <View style={styles.volumeFlexBox}>
              <Image
                style={styles.iconlyboldplay}
                contentFit="cover"
                source={require("../assets/iconlyboldlock.png")}
              />
              <Text style={[styles.step03, styles.stepTypo]}>Step 02</Text>
            </View>
            <Text style={[styles.text1, styles.stepTypo]}>21:39</Text>
          </View>
          <View style={[styles.nextWrapper, styles.nextShadowBox]}>
            <Text style={styles.next}> Next</Text>
          </View>
          <Image
            style={[styles.backgroundIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/background1.png")}
          />
        </View>
        <View style={styles.workout8Parent}>
          <LinearGradient
            style={[styles.pmBooking, styles.overlayPosition]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.42)", "rgba(0, 0, 0, 0)"]}
          >
            <Text style={[styles.yourRequestHas, styles.yourRequestHasFlexBox]}>
              Your request has been sent
            </Text>
            <Text style={[styles.youWillReceive, styles.yourRequestHasFlexBox]}>
              You will receive a notification upon the confirmation of the
              practitioner
            </Text>
            <Image
              style={styles.checked13}
              contentFit="cover"
              source={require("../assets/checked-1-1.png")}
            />
            <Pressable
              style={[styles.nextContainer, styles.nextShadowBox]}
              onPress={() => navigation.navigate("Workout3")}
            >
              <Text style={styles.next}> Done</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workout8Layout: {
    overflow: "hidden",
    borderRadius: Border.br_11xl,
    width: 393,
    height: 852,
  },
  bottomPosition: {
    left: -1,
    position: "absolute",
  },
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
    backgroundColor: Color.main,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
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
  overlayPosition: {
    backgroundColor: Color.gradientBluePrimary,
    left: 0,
    top: 0,
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
  frameParentLayout: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_3xs,
    height: 34,
    width: 348,
    left: 22,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  stepTypo: {
    color: Color.colorGray_500,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  nextShadowBox: {
    paddingHorizontal: Padding.p_2xl,
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
    paddingVertical: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.main,
    position: "absolute",
  },
  yourRequestHasFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  workout8Child: {
    top: -7,
    width: 420,
    height: 311,
  },
  backgroundIcon: {
    top: "31.53%",
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    height: "68.47%",
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
    borderWidth: 1,
    borderStyle: "solid",
    height: 39,
    width: 39,
    left: 0,
    top: 0,
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
    height: 39,
    width: 39,
    position: "absolute",
  },
  overlay: {
    right: 0,
    height: 120,
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
    height: 120,
  },
  view: {
    left: 23,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 352,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    top: 526,
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
    left: 22,
  },
  step03: {
    marginLeft: 10,
    fontFamily: FontFamily.h3Regular,
  },
  frameParent: {
    top: 612,
  },
  frameGroup: {
    top: 658,
  },
  frameContainer: {
    top: 698,
  },
  frameView: {
    top: 572,
  },
  next: {
    lineHeight: 22,
    color: Color.gray6,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textAlign: "left",
  },
  nextWrapper: {
    top: 766,
    left: 276,
    width: 102,
  },
  backgroundIcon1: {
    top: "31.57%",
    right: "-1.02%",
    bottom: "-0.05%",
    left: "1.02%",
    height: "68.47%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  workout8: {
    backgroundColor: Color.dark1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  yourRequestHas: {
    top: 525,
    left: 29,
    fontSize: FontSize.size_11xl,
    lineHeight: 39,
    fontWeight: "700",
    width: 336,
    fontFamily: FontFamily.textCaptionSemiBold,
    letterSpacing: -0.3,
    textAlign: "center",
    color: Color.globalBlack,
  },
  youWillReceive: {
    top: 650,
    left: 68,
    lineHeight: 20,
    color: Color.baseShade70,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 257,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.h3Regular,
  },
  checked13: {
    top: 424,
    left: 157,
    width: 80,
    height: 79,
    position: "absolute",
  },
  nextContainer: {
    top: 757,
    left: 250,
    width: 115,
  },
  pmBooking: {
    overflow: "hidden",
    borderRadius: Border.br_11xl,
    width: 393,
    height: 852,
  },
  workout8Parent: {
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  groupParent: {
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default Frame5;
