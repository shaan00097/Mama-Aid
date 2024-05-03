import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const DashboardPM = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardPm}>
      <View style={[styles.carddietProgram, styles.carddietProgramPosition]}>
        <Pressable
          style={[styles.backgroundParent, styles.goPremiumPosition]}
          onPress={() => navigation.navigate("Workout")}
        >
          <View style={styles.backgroundShadowBox} />
          <Text style={[styles.dec2, styles.decFlexBox]}>
            View My Workout Plan
          </Text>
          <Text style={[styles.title, styles.titleTypo]}>
            Personal training Program
          </Text>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-30572.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.backgroundGroup, styles.textPosition1]}
          onPress={() => navigation.navigate("Nutrition")}
        >
          <View style={styles.backgroundShadowBox} />
          <Text style={[styles.dec21, styles.decFlexBox]}>
            View My Meal Plans
          </Text>
          <Text style={[styles.title, styles.titleTypo]}>
            Food Diet and Nutrition Plan
          </Text>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-30573.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleLayout]}
          onPress={() => navigation.navigate("AppointmentPM")}
        >
          <View style={[styles.groupInner, styles.boundsBorder]} />
          <Text style={styles.appointments}> Appointments</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.rectangleView, styles.containerBg]} />
          <Text style={styles.dashboard}>Dashboard</Text>
        </View>
      </View>
      <Text style={[styles.helloRose, styles.helloRoseTypo]}>Hello Rose !</Text>
      <Image
        style={[styles.image297Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/image-297.png")}
      />
      <View style={styles.homeBar}>
        <Image
          style={[styles.patternIcon, styles.bgChildPosition]}
          contentFit="cover"
          source={require("../assets/pattern1.png")}
        />
        <View style={styles.homeBarInner}>
          <View style={styles.textPosition}>
            <View style={[styles.textField, styles.tabSpaceBlock]}>
              <View style={styles.magnifyingglassParent}>
                <Image
                  style={[styles.magnifyingglassIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/magnifyingglass2.png")}
                />
                <Text style={[styles.writeTextHere, styles.foodiesTypo]}>
                  Search...
                </Text>
              </View>
            </View>
            <View style={[styles.foodiesWhiteParent, styles.foodiesLayout]}>
              <Image
                style={[styles.foodiesWhiteIcon, styles.foodiesLayout]}
                contentFit="cover"
                source={require("../assets/foodies-white.png")}
              />
              <Text style={[styles.foodies, styles.foodiesClr]}>Foodies</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.containerParent, styles.carddietProgramPosition]}>
        <View style={[styles.container, styles.containerBg]} />
        <View style={styles.containerGroup}>
          <View style={[styles.container1, styles.boundsBorder]} />
          <View style={styles.groupWrapper}>
            <View
              style={[
                styles.appointmentSun190830AmParent,
                styles.textPosition1,
              ]}
            >
              <Text style={[styles.appointmentSun190830, styles.tabBarFlexBox]}>
                {" "}
                Appointment - Sun,19,08.30 am
              </Text>
              <Image
                style={[styles.timeSquareIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/time-square3.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.johnTerry}>John Terry</Text>
        <Text
          style={styles.yearsDietitics}
        >{`32 Years | Dietitics / Nutrition. `}</Text>
        <ImageBackground
          style={[styles.imagepatientIcon, styles.iconTransform]}
          resizeMode="cover"
          source={require("../assets/imagepatient2.png")}
        >
          <View style={[styles.rectangleCopy8, styles.textPosition1]} />
          <Image
            style={[styles.image295Icon, styles.iconTransform]}
            contentFit="cover"
            source={require("../assets/image-2952.png")}
          />
        </ImageBackground>
      </View>
      <Pressable
        style={styles.banner}
        onPress={() => navigation.navigate("ChooseYourPlan")}
      >
        <View
          style={[styles.appointmentSun190830AmParent, styles.textPosition1]}
        >
          <View style={[styles.bgChild, styles.bgChildPosition]} />
        </View>
        <View style={styles.leftSection}>
          <View style={[styles.text, styles.textPosition1]}>
            <Text style={[styles.goPremium, styles.goPremiumTypo]}>
              Go Premium !!
            </Text>
            <Text
              style={[styles.goPremiumTo, styles.helloRoseTypo]}
            >{`Go premium  to have unlimited 
access`}</Text>
          </View>
          <Pressable
            style={styles.bannerButton}
            onPress={() => navigation.navigate("ChooseYourPlan")}
          >
            <View
              style={[
                styles.appointmentSun190830AmParent,
                styles.textPosition1,
              ]}
            >
              <View style={[styles.btnViewMoreChild, styles.textPosition1]} />
              <Text style={[styles.learnMore, styles.foodiesClr]}>
                Learn More
              </Text>
            </View>
          </Pressable>
        </View>
        <Image
          style={[styles.image298Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-2982.png")}
        />
      </Pressable>
      <View style={[styles.boundsParent, styles.boundsPosition]}>
        <View style={[styles.bounds, styles.boundsBorder]} />
        <View style={[styles.smallGraph, styles.smallPosition]}>
          <Text style={[styles.metric, styles.metricTypo]}>86%</Text>
          <View style={[styles.title2, styles.titlePosition]}>
            <Text style={styles.primaryTitle}>{`Current Engagement `}</Text>
          </View>
          <Image
            style={[styles.graphIcon, styles.graphIconLayout]}
            contentFit="cover"
            source={require("../assets/graph1.png")}
          />
        </View>
      </View>
      <View style={[styles.boundsGroup, styles.boundsPosition]}>
        <View style={[styles.bounds, styles.boundsBorder]} />
        <View style={[styles.smallGraph1, styles.smallPosition]}>
          <Text style={[styles.metric1, styles.metricTypo]}>+34%</Text>
          <View style={[styles.title3, styles.titlePosition]}>
            <Text style={styles.primaryTitle}>Knowledge Gain</Text>
          </View>
          <Image
            style={[styles.graphIcon1, styles.graphIconLayout]}
            contentFit="cover"
            source={require("../assets/graph2.png")}
          />
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarFlexBox]}>
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
            source={require("../assets/iconoirshieldquestion.png")}
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
  carddietProgramPosition: {
    left: "3.82%",
    position: "absolute",
  },
  goPremiumPosition: {
    top: "0%",
    left: "0%",
  },
  decFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textPosition1: {
    right: "0%",
    top: "0%",
  },
  groupParentLayout: {
    height: 30,
    position: "absolute",
  },
  rectangleLayout: {
    width: 183,
    height: 30,
    position: "absolute",
  },
  boundsBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectangleGroupPosition: {
    left: 0,
    top: 0,
  },
  containerBg: {
    backgroundColor: Color.wrong,
    position: "absolute",
  },
  helloRoseTypo: {
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  bgChildPosition: {
    opacity: 0.2,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  tabSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
  },
  foodiesTypo: {
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
  },
  foodiesLayout: {
    height: 36,
    position: "absolute",
  },
  foodiesClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  tabBarFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iconTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  goPremiumTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  boundsPosition: {
    top: "77.11%",
    position: "absolute",
  },
  smallPosition: {
    top: 23,
    position: "absolute",
  },
  metricTypo: {
    fontSize: FontSize.h3Regular_size,
    top: "33.3%",
    alignItems: "center",
    display: "flex",
    color: Color.globalBlack,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  titlePosition: {
    left: 7,
    flexDirection: "row",
    position: "absolute",
  },
  graphIconLayout: {
    bottom: "-0.75%",
    width: "97.24%",
    height: "31.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    letterSpacing: 0,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "center",
    fontSize: FontSize.caption2Regular11_size,
  },
  backgroundShadowBox: {
    borderWidth: 0.8,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: 9,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    shadowColor: "rgba(230, 234, 238, 0.6)",
    left: "-0.24%",
    bottom: "-0.14%",
    right: "-0.18%",
    top: "-0.14%",
    width: "100.42%",
    height: "100.29%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  dec2: {
    width: "60.24%",
    color: Color.text03,
    fontFamily: FontFamily.h3Regular,
    left: "6.82%",
    lineHeight: 20,
    fontSize: FontSize.caption2Regular11_size,
    top: "85.65%",
    height: "9.89%",
    textAlign: "left",
  },
  title: {
    height: "17.83%",
    width: "80.12%",
    top: "60.4%",
    fontWeight: "700",
    color: Color.text03,
    fontFamily: FontFamily.h3Regular,
    left: "6.82%",
  },
  groupChild: {
    height: "52.46%",
    width: "86.29%",
    top: "4.96%",
    right: "6.88%",
    bottom: "42.57%",
    left: "6.82%",
    maxWidth: "100%",
    position: "absolute",
  },
  backgroundParent: {
    right: "53.19%",
    left: "0%",
    bottom: "0%",
    width: "46.81%",
    height: "100%",
    position: "absolute",
  },
  dec21: {
    width: "61.6%",
    color: Color.text03,
    fontFamily: FontFamily.h3Regular,
    left: "6.82%",
    lineHeight: 20,
    fontSize: FontSize.caption2Regular11_size,
    top: "85.65%",
    height: "9.89%",
    textAlign: "left",
  },
  backgroundGroup: {
    left: "53.19%",
    bottom: "0%",
    width: "46.81%",
    height: "100%",
    position: "absolute",
  },
  carddietProgram: {
    height: "23.49%",
    width: "91.6%",
    top: "26.38%",
    right: "4.58%",
    bottom: "50.13%",
  },
  groupInner: {
    borderColor: Color.wrong,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 183,
    top: 0,
    height: 30,
    position: "absolute",
    backgroundColor: Color.white,
  },
  appointments: {
    width: 106,
    alignItems: "flex-end",
    lineHeight: 18,
    left: 42,
    top: 6,
    display: "flex",
    color: Color.globalBlack,
    fontWeight: "600",
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleParent: {
    left: 193,
    top: 0,
  },
  rectangleView: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.wrong,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 183,
    top: 0,
    height: 30,
  },
  dashboard: {
    justifyContent: "center",
    textAlign: "center",
    width: 106,
    alignItems: "flex-end",
    display: "flex",
    color: Color.globalBlack,
    fontWeight: "600",
    lineHeight: 18,
    left: 42,
    top: 6,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleGroup: {
    width: 183,
    height: 30,
    position: "absolute",
  },
  groupParent: {
    top: 257,
    left: 9,
    width: 376,
  },
  helloRose: {
    top: 199,
    left: 13,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 199,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
  },
  image297Icon: {
    top: 204,
    left: 197,
    width: 30,
  },
  patternIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  magnifyingglassIcon: {
    width: "10.89%",
    right: "89.11%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  writeTextHere: {
    left: 30,
    color: Color.grayGray2,
    width: 172,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  magnifyingglassParent: {
    width: 202,
    height: 22,
  },
  textField: {
    borderColor: Color.grayGray6,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.white,
    right: 0,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  foodiesWhiteIcon: {
    width: 36,
    left: 0,
    top: 0,
  },
  foodies: {
    top: 7,
    left: 48,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
  },
  foodiesWhiteParent: {
    top: -59,
    left: 101,
    width: 109,
    display: "none",
  },
  textPosition: {
    right: 0,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeBarInner: {
    top: 85,
    right: 24,
    left: 23,
    height: 40,
    position: "absolute",
  },
  homeBar: {
    right: -15,
    left: -5,
    height: 181,
    backgroundColor: Color.main,
    top: 0,
    position: "absolute",
  },
  container: {
    borderRadius: 19,
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  container1: {
    height: "102.3%",
    width: "100.3%",
    right: "-0.3%",
    bottom: "-2.3%",
    borderRadius: Border.br_xs,
    borderColor: Color.main,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  appointmentSun190830: {
    width: "87.66%",
    left: "12.34%",
    fontSize: FontSize.footnoteRegular_size,
    display: "flex",
    alignItems: "center",
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    top: "0%",
    height: "100%",
  },
  timeSquareIcon: {
    height: "80.18%",
    width: "7.04%",
    top: "10.14%",
    right: "92.96%",
    bottom: "9.68%",
    left: "0%",
    position: "absolute",
  },
  appointmentSun190830AmParent: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: "49.89%",
    width: "81.09%",
    top: "25.06%",
    right: "12.49%",
    bottom: "25.06%",
    left: "6.42%",
    position: "absolute",
  },
  containerGroup: {
    height: "29.43%",
    width: "89.73%",
    top: "60.28%",
    right: "5.15%",
    bottom: "10.28%",
    left: "5.12%",
    position: "absolute",
  },
  johnTerry: {
    width: "28.85%",
    top: "11.77%",
    fontSize: FontSize.size_base_8,
    left: "26.92%",
    height: "16.91%",
    lineHeight: 22,
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  yearsDietitics: {
    width: "60.27%",
    top: "32.34%",
    fontSize: FontSize.size_sm_1,
    fontWeight: "500",
    left: "26.92%",
    height: "16.91%",
    lineHeight: 22,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  image295Icon: {
    height: "82.54%",
    width: "82.56%",
    top: "10%",
    right: "7.36%",
    bottom: "7.46%",
    left: "10.08%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  imagepatientIcon: {
    height: "42.63%",
    width: "16.76%",
    top: "7.37%",
    right: "61.37%",
    bottom: "50%",
    left: "21.88%",
    borderRadius: Border.br_3xs,
  },
  containerParent: {
    height: "12.58%",
    width: "94.91%",
    top: "63.49%",
    right: "1.27%",
    bottom: "23.93%",
  },
  bgChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.main,
  },
  goPremium: {
    height: "27.65%",
    width: "51.77%",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.textCaptionSemiBold,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  goPremiumTo: {
    height: "64.63%",
    top: "35.37%",
    fontSize: FontSize.caption1Regular12_size,
    lineHeight: 21,
    fontFamily: FontFamily.textCaptionSemiBold,
    left: "0%",
    width: "100%",
  },
  text: {
    height: "57.27%",
    bottom: "42.73%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  btnViewMoreChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_100,
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  learnMore: {
    height: "42.99%",
    width: "60.04%",
    top: "28.36%",
    left: "19.98%",
    fontSize: FontSize.textCaptionSemiBold_size,
    lineHeight: 15,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  bannerButton: {
    height: "30.85%",
    width: "48.23%",
    top: "69.15%",
    right: "2.99%",
    left: "48.78%",
    bottom: "0%",
    position: "absolute",
  },
  leftSection: {
    height: "81.04%",
    width: "62.53%",
    top: "12.09%",
    right: "31.25%",
    bottom: "6.87%",
    left: "6.21%",
    position: "absolute",
  },
  image298Icon: {
    height: "50.22%",
    width: "17.81%",
    top: "17.84%",
    right: "7.89%",
    bottom: "31.94%",
    left: "74.29%",
    position: "absolute",
  },
  banner: {
    top: 604,
    width: 375,
    height: 134,
    left: 10,
    position: "absolute",
  },
  bounds: {
    borderRadius: Border.br_xl,
    borderColor: Color.colorGhostwhite_100,
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  metric: {
    height: "25.87%",
    width: "44.7%",
    left: "4.79%",
  },
  primaryTitle: {
    color: Color.baseShade70,
    letterSpacing: 0,
    fontWeight: "500",
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  title2: {
    height: "15.99%",
    top: "-5.36%",
    bottom: "89.37%",
  },
  graphIcon: {
    top: "69.43%",
    right: "-2.03%",
    left: "4.79%",
  },
  smallGraph: {
    width: 138,
    height: 106,
    left: 10,
  },
  boundsParent: {
    height: "12.94%",
    width: "42.49%",
    right: "53.44%",
    bottom: "9.96%",
    left: "4.07%",
  },
  metric1: {
    height: "25.89%",
    width: "55.68%",
    left: "4.77%",
  },
  title3: {
    height: "15.95%",
    top: "-5.35%",
    bottom: "89.4%",
  },
  graphIcon1: {
    top: "69.42%",
    right: "-1.34%",
    left: "4.1%",
  },
  smallGraph1: {
    left: 12,
    width: 149,
    height: 107,
  },
  boundsGroup: {
    height: "12.97%",
    width: "45.85%",
    right: "2.75%",
    bottom: "9.92%",
    left: "51.4%",
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
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    top: 1066,
    left: 22,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    flexDirection: "row",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  dashboardPm: {
    borderRadius: Border.br_11xl,
    height: 1175,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default DashboardPM;
