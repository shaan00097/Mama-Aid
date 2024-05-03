import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const WorkoutSummary1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workoutSummary}>
      <View style={styles.datePicker}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <Image
          style={[styles.circleRightIcon, styles.circleIconLayout]}
          contentFit="cover"
          source={require("../assets/circle-right.png")}
        />
        <Image
          style={[styles.circleLeftIcon, styles.circleIconLayout]}
          contentFit="cover"
          source={require("../assets/circle-left.png")}
        />
        <View style={styles.days}>
          <View style={[styles.day, styles.dayLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>M</Text>
            <Text style={[styles.number, styles.numberTypo]}>16</Text>
          </View>
          <View style={[styles.day2, styles.dayLayout]}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <Text style={styles.day1}>T</Text>
            <Text style={[styles.number1, styles.numberTypo]}>17</Text>
          </View>
          <Pressable
            style={[styles.day4, styles.dayLayout]}
            onPress={() => navigation.navigate("WorkoutSummary")}
          >
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>W</Text>
            <Text style={[styles.number, styles.numberTypo]}>18</Text>
          </Pressable>
          <View style={[styles.day6, styles.dayLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>T</Text>
            <Text style={[styles.number, styles.numberTypo]}>19</Text>
          </View>
          <View style={[styles.day8, styles.dayLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>F</Text>
            <Text style={[styles.number4, styles.numberTypo]}>20</Text>
          </View>
          <View style={[styles.day10, styles.dayLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>S</Text>
            <Text style={[styles.number1, styles.numberTypo]}>21</Text>
          </View>
          <View style={[styles.day12, styles.dayLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={styles.day1}>S</Text>
            <Text style={[styles.number4, styles.numberTypo]}>22</Text>
          </View>
        </View>
        <Text style={[styles.date, styles.minFlexBox]}>October 2021</Text>
      </View>
      <View style={styles.graphics}>
        <View style={[styles.activeCalories, styles.timeChildPosition]}>
          <Image
            style={[styles.activeCalories, styles.timeChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-29.png")}
          />
          <Image
            style={[styles.activeCalories, styles.timeChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-30.png")}
          />
          <Text style={[styles.text, styles.calLayout]}>600</Text>
          <Text style={[styles.cal, styles.calLayout]}>Cal</Text>
          <Text style={[styles.subtitle, styles.minFlexBox]}>
            Active Calories
          </Text>
        </View>
        <View style={[styles.time, styles.timeLayout]}>
          <Image
            style={[styles.timeChild, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-32.png")}
          />
          <Image
            style={styles.timeItem}
            contentFit="cover"
            source={require("../assets/ellipse-35.png")}
          />
          <View style={styles.minWrapper}>
            <Text style={[styles.min, styles.minFlexBox]}>50 Min</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.subtitle1, styles.subtitleTypo]}>Time Spent</Text>
      <View style={[styles.time1, styles.timeLayout]}>
        <Image
          style={[styles.timeChild, styles.timeLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-32.png")}
        />
        <Image
          style={styles.timeItem}
          contentFit="cover"
          source={require("../assets/ellipse-35.png")}
        />
        <View style={styles.workoutsWrapper}>
          <Text style={[styles.min, styles.minFlexBox]}>3 Workouts</Text>
        </View>
      </View>
      <Text style={[styles.subtitle2, styles.subtitleTypo]}>{`Completed
`}</Text>
      <Text style={[styles.yourWorkoutSummery, styles.minFlexBox]}>
        Your Workout Summery
      </Text>
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
      <Image
        style={styles.workoutSummaryChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={[styles.textField, styles.tabSpaceBlock]}>
        <View style={styles.content}>
          <Text
            style={[styles.label, styles.labelFlexBox]}
          >{`Workout Summery `}</Text>
          <Text
            style={[styles.writeTextHere, styles.labelFlexBox]}
          >{`This workout helped you on developing  your balance and flexibility `}</Text>
        </View>
      </View>
      <View style={styles.tabBar}>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("DashboardPM")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home2.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("PPDTest")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion1.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>
            PPD Screening
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("InformationPage")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/micircleinformation.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>
            Information
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("ProfilePM")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirprofilecircle.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleIconLayout: {
    height: 27,
    width: 26,
    top: 62,
    position: "absolute",
  },
  dayLayout: {
    width: 40,
    top: 0,
    height: 66,
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_5xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  numberTypo: {
    top: "50.08%",
    fontWeight: "600",
    fontSize: FontSize.subtitleMedium_size,
    textAlign: "center",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  minFlexBox: {
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  timeChildPosition: {
    top: 0,
    left: 0,
  },
  calLayout: {
    lineHeight: 43,
    height: "26.87%",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  timeLayout: {
    height: 113,
    position: "absolute",
  },
  subtitleTypo: {
    fontSize: FontSize.bodyMedium_size,
    width: "25.19%",
    height: "4.81%",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    position: "absolute",
  },
  tabSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
  },
  labelFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    textAlign: "center",
  },
  rectangleIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  circleRightIcon: {
    right: 24,
  },
  circleLeftIcon: {
    right: 325,
  },
  rectangle: {
    backgroundColor: Color.border,
  },
  day1: {
    height: "28.59%",
    width: "33.25%",
    top: "17.85%",
    left: "32.5%",
    textAlign: "center",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
  },
  number: {
    left: "22.5%",
    fontWeight: "600",
    fontSize: FontSize.subtitleMedium_size,
  },
  day: {
    left: 0,
  },
  rectangle1: {
    backgroundColor: Color.purple1,
  },
  number1: {
    left: "25%",
    fontWeight: "600",
    fontSize: FontSize.subtitleMedium_size,
  },
  day2: {
    left: 54,
  },
  day4: {
    left: 108,
  },
  day6: {
    left: 162,
  },
  number4: {
    left: "20%",
    fontWeight: "600",
    fontSize: FontSize.subtitleMedium_size,
  },
  day8: {
    left: 216,
  },
  day10: {
    left: 270,
  },
  day12: {
    left: 324,
  },
  days: {
    top: 119,
    left: 24,
    width: 364,
    height: 66,
    position: "absolute",
  },
  date: {
    height: "10.36%",
    width: "29.59%",
    top: "31.05%",
    left: "35.19%",
    fontWeight: "500",
    fontSize: FontSize.subtitleMedium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  datePicker: {
    height: "25.82%",
    top: "63.73%",
    bottom: "10.45%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  activeCalories: {
    width: 175,
    height: 171,
    left: 0,
    position: "absolute",
  },
  text: {
    width: "41.2%",
    top: "39.95%",
    left: "21.66%",
    fontSize: FontSize.h1Semibold_size,
    fontWeight: "600",
  },
  cal: {
    width: "23.09%",
    top: "43.05%",
    left: "66.57%",
    fontSize: FontSize.h3Regular_size,
  },
  subtitle: {
    height: "9.99%",
    width: "57.37%",
    top: "63.67%",
    left: "24.17%",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.footnoteRegular_size,
  },
  timeChild: {
    width: 116,
    height: 113,
    left: 0,
    top: 0,
  },
  timeItem: {
    left: 58,
    width: 58,
    height: 104,
    top: 0,
    position: "absolute",
  },
  min: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  minWrapper: {
    height: "16.18%",
    width: "57.7%",
    top: "26.17%",
    right: "16.18%",
    bottom: "57.65%",
    left: "26.12%",
    position: "absolute",
  },
  time: {
    top: 194,
    left: 141,
    width: 116,
    height: 113,
  },
  graphics: {
    top: 266,
    left: 107,
    width: 257,
    height: 307,
    position: "absolute",
  },
  subtitle1: {
    top: "60.8%",
    left: "67.94%",
  },
  workoutsWrapper: {
    height: "15.92%",
    width: "87.3%",
    top: "30.06%",
    bottom: "54.02%",
    left: "12.7%",
    right: "0%",
    position: "absolute",
  },
  time1: {
    top: 455,
    left: 29,
    width: 126,
  },
  subtitle2: {
    top: "60.68%",
    left: "13.49%",
  },
  yourWorkoutSummery: {
    top: 118,
    left: 13,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 394,
    height: 34,
  },
  backChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.border,
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
    left: 16,
    height: 39,
    width: 39,
    top: 44,
    position: "absolute",
  },
  workoutSummaryChild: {
    left: 331,
    width: 46,
    height: 44,
    top: 44,
    position: "absolute",
  },
  label: {
    color: Color.main,
    fontSize: FontSize.size_base,
    lineHeight: 16,
  },
  writeTextHere: {
    lineHeight: 22,
    marginTop: 4,
    fontSize: FontSize.subtitleMedium_size,
    color: Color.globalBlack,
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
  },
  textField: {
    top: 167,
    left: 12,
    borderRadius: Border.br_base,
    borderColor: Color.grayGray6,
    width: 381,
    height: 83,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.main,
  },
  tab: {
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    top: 751,
    left: 23,
    backgroundColor: Color.white,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    flexDirection: "row",
    height: 104,
    position: "absolute",
    overflow: "hidden",
  },
  workoutSummary: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
    flex: 1,
  },
});

export default WorkoutSummary1;
