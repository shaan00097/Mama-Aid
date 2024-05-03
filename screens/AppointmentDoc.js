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
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AppointmentDoc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointmentDoc}>
      <View style={styles.carddailyStatistics}>
        <View
          style={[styles.carddailyStatisticsChild, styles.backgroundShadowBox]}
        />
        <Image
          style={[styles.carddailyStatisticsItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-3064.png")}
        />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.homeBarBg]} />
          <Text style={[styles.appointments, styles.patientsClr]}>
            Appointments
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.patients, styles.patientsClr]}>Patients</Text>
        </View>
        <View style={[styles.number, styles.numberFlexBox]}>
          <Text style={[styles.inProgress, styles.patientsClr]}>
            Daily tasks
          </Text>
        </View>
        <Text style={[styles.your14Patients, styles.patientsLayout]}>
          Your 14 patients are Aligned for next week,
        </Text>
        <Image
          style={[styles.carddailyStatisticsInner, styles.container1Position]}
          contentFit="cover"
          source={require("../assets/group-3086.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleContainer, styles.groupPressableLayout]}>
          <View style={[styles.groupInner, styles.boundsBorder]} />
          <Text style={styles.appointments1}> Appointments</Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupPressablePosition]}
          onPress={() => navigation.navigate("DashboardDoc")}
        >
          <View style={[styles.rectangleView, styles.boundsBorder]} />
          <Text style={styles.dashboard}>Dashboard</Text>
        </Pressable>
      </View>
      <Text style={[styles.helloDrrose, styles.patientsClr]}>
        Hello Dr.Rose !
      </Text>
      <Image
        style={[styles.image297Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/image-297.png")}
      />
      <View style={[styles.homeBar, styles.homeBarBg]}>
        <Image
          style={[styles.patternIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pattern1.png")}
        />
        <View style={styles.homeBarInner}>
          <View style={styles.textFieldParent}>
            <View style={styles.textField}>
              <View style={styles.magnifyingglassParent}>
                <Image
                  style={[styles.magnifyingglassIcon, styles.iconPosition]}
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
              <Text style={[styles.foodies, styles.foodiesTypo]}>Foodies</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerParent}>
        <View style={[styles.container, styles.iconPosition]} />
        <View style={styles.containerGroup}>
          <View style={[styles.container1, styles.boundsBorder]} />
          <View style={styles.groupWrapper}>
            <View
              style={[styles.appointmentSun190830AmParent, styles.iconPosition]}
            >
              <Text style={[styles.appointmentSun190830, styles.metricFlexBox]}>
                {" "}
                Appointment - Sun,19,08.30 am
              </Text>
              <Image
                style={[styles.timeSquareIcon, styles.container1Position]}
                contentFit="cover"
                source={require("../assets/time-square1.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.johnTerry, styles.yearsPosition]}>John Terry</Text>
        <Text style={[styles.years, styles.yearsPosition]}>{`32 Years `}</Text>
        <ImageBackground
          style={[styles.imagepatientIcon, styles.iconTransform]}
          resizeMode="cover"
          source={require("../assets/imagepatient.png")}
        >
          <View style={[styles.rectangleCopy8, styles.iconPosition]} />
          <Image
            style={[styles.image295Icon, styles.iconTransform]}
            contentFit="cover"
            source={require("../assets/image-295.png")}
          />
        </ImageBackground>
      </View>
      <Pressable
        style={[styles.panelpatientsCount, styles.boundsParentLayout]}
        onPress={() => navigation.navigate("DocPatientProfiles")}
      >
        <View style={[styles.background, styles.backgroundShadowBox]} />
        <Text style={[styles.unityGaming, styles.unityGamingLayout]}>
          Patients
        </Text>
        <Text style={[styles.codedTemplate, styles.unityGamingLayout]}>
          16 New Patients
        </Text>
        <Image
          style={[styles.userIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/3-user.png")}
        />
      </Pressable>
      <View style={[styles.boundsParent, styles.boundsParentLayout]}>
        <View style={[styles.bounds, styles.iconPosition]} />
        <View style={styles.smallGraph}>
          <Text style={[styles.metric, styles.metricPosition]}>86%</Text>
          <View style={styles.title}>
            <Text style={styles.primaryTitle}>{`Current Engagement `}</Text>
          </View>
          <Image
            style={[styles.graphIcon, styles.metricPosition]}
            contentFit="cover"
            source={require("../assets/graph.png")}
          />
        </View>
      </View>
      <View style={[styles.tabBar, styles.numberFlexBox]}>
        <Pressable
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("DashboardDoc")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home2.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <View style={[styles.tab1, styles.tabFlexBox]}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion3.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>
            PPD Screening
          </Text>
        </View>
        <Pressable
          style={[styles.tab1, styles.tabFlexBox]}
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
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("ProfileDoc")}
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
  backgroundShadowBox: {
    borderWidth: 0.8,
    borderColor: Color.border,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 51.1,
    shadowRadius: 51.1,
    shadowOffset: {
      width: 0,
      height: 7.935482978820801,
    },
    shadowColor: "rgba(230, 234, 238, 0.6)",
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "24.17%",
    top: "65.96%",
    height: "9.87%",
    position: "absolute",
  },
  homeBarBg: {
    backgroundColor: Color.main,
    position: "absolute",
  },
  patientsClr: {
    color: Color.globalBlack,
    textAlign: "left",
  },
  groupPosition: {
    borderRadius: 51,
    bottom: "10.31%",
    top: "14.8%",
    height: "74.89%",
    left: "0%",
  },
  numberFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  patientsLayout: {
    lineHeight: 20,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
  },
  container1Position: {
    left: "0%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 30,
    position: "absolute",
  },
  groupPressableLayout: {
    width: 183,
    height: 30,
    position: "absolute",
  },
  boundsBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupPressablePosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  foodiesTypo: {
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    textAlign: "left",
    position: "absolute",
  },
  foodiesLayout: {
    height: 36,
    position: "absolute",
  },
  metricFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  yearsPosition: {
    left: "26.92%",
    height: "16.91%",
    lineHeight: 22,
    textAlign: "left",
    color: Color.globalBlack,
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
  boundsParentLayout: {
    width: "42.49%",
    position: "absolute",
  },
  unityGamingLayout: {
    lineHeight: 23,
    height: "16.9%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  metricPosition: {
    left: "4.78%",
    position: "absolute",
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular11_size,
    letterSpacing: 0,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "center",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  carddailyStatisticsChild: {
    height: "98.98%",
    width: "99.33%",
    top: "1.2%",
    right: "-0.11%",
    bottom: "-0.18%",
    left: "0.78%",
  },
  carddailyStatisticsItem: {
    height: "16.73%",
    width: "10.78%",
    top: "24.57%",
    right: "73.42%",
    bottom: "58.7%",
    left: "15.81%",
    position: "absolute",
  },
  groupChild: {
    width: "13.79%",
    right: "86.21%",
    borderRadius: 51,
    bottom: "10.31%",
    top: "14.8%",
    height: "74.89%",
    left: "0%",
  },
  appointments: {
    width: "78.91%",
    left: "21.09%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  rectangleParent: {
    width: "34.64%",
    right: "58.11%",
    left: "7.25%",
  },
  groupItem: {
    width: "20.6%",
    right: "79.4%",
    backgroundColor: "#bec0c6",
    position: "absolute",
  },
  patients: {
    width: "68.5%",
    left: "31.5%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  rectangleGroup: {
    width: "23.19%",
    right: "26.36%",
    left: "50.44%",
  },
  inProgress: {
    fontSize: FontSize.textCaptionSemiBold_size,
    letterSpacing: 1,
    lineHeight: 16,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  number: {
    height: "7.08%",
    width: "23.89%",
    top: "16.07%",
    right: "27.14%",
    bottom: "76.85%",
    left: "48.97%",
    borderRadius: 100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    backgroundColor: Color.wrong,
  },
  your14Patients: {
    height: "19.74%",
    width: "43.83%",
    top: "27%",
    left: "47.28%",
    color: Color.text01,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  carddailyStatisticsInner: {
    height: "65.96%",
    width: "42.5%",
    right: "57.5%",
    bottom: "34.04%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carddailyStatistics: {
    height: "23%",
    width: "91.6%",
    top: "64.66%",
    right: "4.33%",
    bottom: "12.33%",
    left: "4.07%",
    position: "absolute",
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
    backgroundColor: Color.wrong,
  },
  appointments1: {
    width: 106,
    alignItems: "flex-end",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
    display: "flex",
    fontWeight: "600",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleContainer: {
    left: 193,
    top: 0,
  },
  rectangleView: {
    backgroundColor: Color.colorGray_100,
    borderColor: Color.wrong,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 183,
    top: 0,
    height: 30,
    position: "absolute",
  },
  dashboard: {
    justifyContent: "center",
    textAlign: "center",
    width: 106,
    alignItems: "flex-end",
    display: "flex",
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  groupPressable: {
    width: 183,
    height: 30,
    position: "absolute",
  },
  groupParent: {
    top: 257,
    left: 9,
    width: 376,
  },
  helloDrrose: {
    top: 199,
    left: 13,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 237,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  image297Icon: {
    top: 204,
    left: 250,
    width: 30,
  },
  patternIcon: {
    opacity: 0.2,
    right: "0%",
    bottom: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  magnifyingglassIcon: {
    width: "10.89%",
    right: "89.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  writeTextHere: {
    left: 30,
    color: Color.grayGray2,
    width: 172,
    top: 0,
  },
  magnifyingglassParent: {
    width: 202,
    height: 22,
  },
  textField: {
    borderColor: Color.grayGray6,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    right: 0,
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  foodiesWhiteIcon: {
    width: 36,
    left: 0,
    top: 0,
  },
  foodies: {
    top: 7,
    left: 48,
    color: Color.white,
  },
  foodiesWhiteParent: {
    top: -59,
    left: 101,
    width: 109,
    display: "none",
  },
  textFieldParent: {
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
    top: 0,
  },
  container: {
    borderRadius: 19,
    right: "0%",
    bottom: "0%",
    width: "100%",
    backgroundColor: Color.wrong,
  },
  container1: {
    height: "102.28%",
    width: "100.3%",
    right: "-0.3%",
    bottom: "-2.28%",
    borderColor: Color.main,
    top: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_xs,
    borderWidth: 1,
  },
  appointmentSun190830: {
    width: "87.66%",
    left: "12.34%",
    lineHeight: 20,
    fontSize: FontSize.footnoteRegular_size,
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  timeSquareIcon: {
    height: "79.91%",
    width: "7.04%",
    top: "10.05%",
    right: "92.96%",
    bottom: "10.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  appointmentSun190830AmParent: {
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupWrapper: {
    height: "50%",
    width: "81.09%",
    top: "25.11%",
    right: "12.49%",
    bottom: "24.89%",
    left: "6.42%",
    position: "absolute",
  },
  containerGroup: {
    height: "29.4%",
    width: "89.73%",
    top: "60.34%",
    right: "5.15%",
    bottom: "10.27%",
    left: "5.12%",
    position: "absolute",
  },
  johnTerry: {
    width: "28.85%",
    top: "11.81%",
    fontSize: FontSize.size_base_8,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  years: {
    width: "60.27%",
    top: "32.35%",
    fontSize: FontSize.size_sm_1,
    fontWeight: "500",
    fontFamily: FontFamily.h3Regular,
  },
  rectangleCopy8: {
    borderRadius: Border.br_8xs,
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  image295Icon: {
    height: "82.39%",
    width: "82.56%",
    top: "10.06%",
    right: "7.36%",
    bottom: "7.55%",
    left: "10.08%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  imagepatientIcon: {
    height: "42.68%",
    width: "16.76%",
    top: "7.38%",
    right: "61.37%",
    bottom: "49.93%",
    left: "21.88%",
    borderRadius: Border.br_3xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  containerParent: {
    height: "15.17%",
    width: "94.91%",
    top: "30.65%",
    right: "2.8%",
    bottom: "54.18%",
    left: "2.29%",
    position: "absolute",
  },
  background: {
    height: "100.45%",
    width: "100.48%",
    top: "-0.26%",
    right: "-0.24%",
    bottom: "-0.19%",
    left: "-0.24%",
  },
  unityGaming: {
    width: "41.2%",
    top: "51.21%",
    fontSize: 15,
    color: Color.text02,
    left: "13.53%",
    fontWeight: "600",
  },
  codedTemplate: {
    width: "64.85%",
    top: "68.11%",
    left: "13.59%",
    fontSize: 12,
    color: Color.state02,
    fontWeight: "500",
  },
  userIcon: {
    height: "27.93%",
    width: "25.69%",
    top: "14.73%",
    right: "60.78%",
    bottom: "57.33%",
    left: "13.53%",
    position: "absolute",
  },
  panelpatientsCount: {
    height: "15.97%",
    top: "47.25%",
    right: "52.93%",
    bottom: "36.78%",
    left: "4.58%",
  },
  bounds: {
    borderRadius: Border.br_xl,
    borderColor: Color.colorGhostwhite_100,
    right: "0%",
    bottom: "0%",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  metric: {
    height: "25.91%",
    width: "44.71%",
    top: "33.27%",
    fontSize: FontSize.h3Regular_size,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    fontWeight: "700",
  },
  primaryTitle: {
    color: Color.baseShade70,
    letterSpacing: 0,
    fontWeight: "500",
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  title: {
    height: "15.45%",
    top: "-5.09%",
    bottom: "89.64%",
    left: 7,
    flexDirection: "row",
    position: "absolute",
  },
  graphIcon: {
    height: "31.36%",
    width: "97.25%",
    top: "69.45%",
    right: "-2.03%",
    bottom: "-0.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  smallGraph: {
    top: 24,
    left: 10,
    width: 138,
    height: 110,
    position: "absolute",
  },
  boundsParent: {
    height: "15.48%",
    top: "47.15%",
    right: "6.62%",
    bottom: "37.37%",
    left: "50.89%",
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.main,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tab1: {
    display: "none",
  },
  tabBar: {
    top: 874,
    left: 22,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  appointmentDoc: {
    borderRadius: Border.br_11xl,
    height: 982,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default AppointmentDoc;
