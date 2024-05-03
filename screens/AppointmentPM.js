import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const AppointmentPM = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appointmentPm}>
      <View style={styles.containerParent}>
        <View style={[styles.container, styles.containerPosition1]} />
        <View style={styles.containerGroup}>
          <View style={styles.container1} />
          <View style={styles.groupWrapper}>
            <View style={styles.rectangleCopy8Position}>
              <Text style={styles.availability0800am}>
                Availability - 08:00am - 10:00am
              </Text>
              <Image
                style={[styles.timeSquareIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/time-square2.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.johnTerry, styles.johnTerryTypo]}>John Terry</Text>
        <Text
          style={styles.yearsDietitics}
        >{`32 Years | Dietitics / Nutrition. `}</Text>
        <ImageBackground
          style={styles.imagepatientIconPosition}
          resizeMode="cover"
          source={require("../assets/imagepatient1.png")}
        >
          <View
            style={[styles.rectangleCopy8, styles.rectangleCopy8Position]}
          />
          <Image
            style={[styles.image295Icon, styles.image295IconPosition]}
            contentFit="cover"
            source={require("../assets/image-2951.png")}
          />
        </ImageBackground>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupBorder]} />
          <Text style={styles.appointments}> Appointments</Text>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
          onPress={() => navigation.navigate("DashboardPM")}
        >
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={styles.dashboard}>Dashboard</Text>
        </Pressable>
      </View>
      <Text style={[styles.helloRose, styles.johnTerryTypo]}>Hello Rose !</Text>
      <Image
        style={[styles.image297Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/image-297.png")}
      />
      <View style={styles.homeBar}>
        <Image
          style={[styles.patternIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pattern1.png")}
        />
        <View style={styles.homeBarInner}>
          <View style={[styles.textFieldParent, styles.textPosition]}>
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
              <Text style={[styles.foodies, styles.foodiesTypo]}>Foodies</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.containerContainer, styles.containerPosition]}
        onPress={() => navigation.navigate("PMDocProfile")}
      >
        <View style={[styles.container, styles.containerPosition1]} />
        <View style={styles.containerGroup}>
          <View style={styles.container1} />
          <View style={styles.groupWrapper}>
            <View style={styles.rectangleCopy8Position}>
              <Text style={styles.availability0800am}>
                Availability - 08:00am - 10:00am
              </Text>
              <Image
                style={[styles.timeSquareIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/time-square2.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.johnTerry, styles.johnTerryTypo]}>John Terry</Text>
        <Text
          style={styles.yearsDietitics}
        >{`32 Years | Dietitics / Nutrition. `}</Text>
        <ImageBackground
          style={styles.imagepatientIconPosition}
          resizeMode="cover"
          source={require("../assets/imagepatient1.png")}
        >
          <View
            style={[styles.rectangleCopy8, styles.rectangleCopy8Position]}
          />
          <Image
            style={[styles.image295Icon1, styles.image295IconPosition]}
            contentFit="cover"
            source={require("../assets/image-2951.png")}
          />
        </ImageBackground>
      </Pressable>
      <View style={[styles.containerParent1, styles.containerPosition]}>
        <View style={[styles.container4, styles.containerPosition1]} />
        <View style={styles.containerGroup}>
          <View style={styles.container1} />
          <View style={styles.groupWrapper}>
            <View style={styles.rectangleCopy8Position}>
              <Text style={styles.availability0800am}>
                Availability - 08:00am - 10:00am
              </Text>
              <Image
                style={[styles.timeSquareIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/time-square2.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.johnTerry, styles.johnTerryTypo]}>John Terry</Text>
        <Text
          style={styles.yearsDietitics}
        >{`32 Years | Dietitics / Nutrition. `}</Text>
        <ImageBackground
          style={styles.imagepatientIconPosition}
          resizeMode="cover"
          source={require("../assets/imagepatient1.png")}
        >
          <View
            style={[styles.rectangleCopy8, styles.rectangleCopy8Position]}
          />
          <Image
            style={[styles.image295Icon2, styles.image295IconPosition]}
            contentFit="cover"
            source={require("../assets/image-2951.png")}
          />
        </ImageBackground>
      </View>
      <Text style={styles.bookAnAppointment}>
        Book an appointment with the practitioner you want !
      </Text>
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
  containerPosition1: {
    borderRadius: 19,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  johnTerryTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  rectangleCopy8Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  image295IconPosition: {
    left: "10%",
    bottom: "7.48%",
    right: "7.46%",
    top: "10.03%",
    width: "82.54%",
    height: "82.48%",
    display: "none",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  groupBorder: {
    borderColor: Color.wrong,
    left: 0,
    width: 183,
    top: 0,
    height: 30,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 0,
    top: 0,
  },
  textPosition: {
    right: 0,
    height: 40,
    left: 0,
    top: 0,
  },
  tabSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
  },
  foodiesTypo: {
    fontFamily: FontFamily.caption2Regular11,
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    textAlign: "left",
    position: "absolute",
  },
  foodiesLayout: {
    height: 36,
    position: "absolute",
  },
  containerPosition: {
    left: "4.58%",
    right: "5.85%",
    width: "89.57%",
    height: "15.97%",
    position: "absolute",
  },
  tabBarFlexBox: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "center",
  },
  container: {
    backgroundColor: Color.wrong,
  },
  container1: {
    height: "102.31%",
    width: "100.32%",
    right: "-0.32%",
    bottom: "-2.31%",
    borderRadius: Border.br_xs,
    borderColor: Color.main,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  availability0800am: {
    width: "87.66%",
    left: "12.3%",
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  timeSquareIcon: {
    height: "80.09%",
    width: "7.07%",
    top: "10.19%",
    right: "92.93%",
    bottom: "9.72%",
  },
  groupWrapper: {
    height: "49.88%",
    width: "81.07%",
    top: "25.17%",
    right: "12.5%",
    bottom: "24.94%",
    left: "6.43%",
    position: "absolute",
  },
  containerGroup: {
    height: "29.42%",
    width: "89.74%",
    top: "60.26%",
    right: "5.11%",
    bottom: "10.33%",
    left: "5.14%",
    position: "absolute",
  },
  johnTerry: {
    width: "28.84%",
    top: "11.82%",
    fontSize: FontSize.size_base_8,
    fontWeight: "600",
    fontFamily: FontFamily.textCaptionSemiBold,
    lineHeight: 22,
    left: "26.93%",
    height: "16.92%",
  },
  yearsDietitics: {
    width: "60.26%",
    top: "32.34%",
    fontSize: FontSize.size_sm_1,
    fontWeight: "500",
    lineHeight: 22,
    left: "26.93%",
    height: "16.92%",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: Border.br_8xs,
  },
  image295Icon: {
    display: "none",
  },
  imagepatientIconPosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: "21.88%",
    bottom: "50%",
    right: "61.36%",
    top: "7.34%",
    width: "16.76%",
    height: "42.66%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  containerParent: {
    top: "76.03%",
    right: "5.09%",
    bottom: "8%",
    left: "5.34%",
    width: "89.57%",
    height: "15.97%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.wrong,
  },
  appointments: {
    width: 106,
    alignItems: "flex-end",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  rectangleParent: {
    left: 193,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.colorGray_100,
  },
  dashboard: {
    justifyContent: "center",
    textAlign: "center",
    width: 106,
    alignItems: "flex-end",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
    fontWeight: "600",
    display: "flex",
    color: Color.globalBlack,
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
    fontWeight: "700",
    width: 199,
  },
  image297Icon: {
    top: 204,
    left: 197,
    width: 30,
  },
  patternIcon: {
    opacity: 0.2,
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  magnifyingglassIcon: {
    width: "10.89%",
    right: "89.11%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
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
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
    right: 0,
    height: 40,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_5xl,
    borderWidth: 1,
    borderStyle: "solid",
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
    backgroundColor: Color.main,
    height: 181,
    top: 0,
    position: "absolute",
  },
  image295Icon1: {
    display: "none",
  },
  containerContainer: {
    top: "40.24%",
    bottom: "43.8%",
  },
  container4: {
    backgroundColor: Color.border,
  },
  image295Icon2: {
    display: "none",
  },
  containerParent1: {
    top: "58.13%",
    bottom: "25.9%",
  },
  bookAnAppointment: {
    top: 311,
    left: 18,
    letterSpacing: 1,
    lineHeight: 24,
    width: 352,
    fontSize: FontSize.subtitleMedium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
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
    paddingHorizontal: Padding.p_5xl,
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    top: 817,
    left: 20,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    overflow: "hidden",
  },
  appointmentPm: {
    borderRadius: Border.br_11xl,
    height: 922,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default AppointmentPM;
