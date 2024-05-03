import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DashboardDoc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardDoc}>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleLayout]}
          onPress={() => navigation.navigate("AppointmentDoc")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={styles.appointments}> Appointments</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.dashboard}>Dashboard</Text>
        </View>
      </View>
      <Text style={styles.helloDrrose}>Hello Dr.Rose !</Text>
      <Image
        style={[styles.image297Icon, styles.groupParentLayout]}
        contentFit="cover"
        source={require("../assets/image-297.png")}
      />
      <View style={styles.homeBar}>
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
      <Pressable
        style={[styles.backgroundParent, styles.backgroundLayout]}
        onPress={() => navigation.navigate("DocVerifyWO")}
      >
        <View style={styles.backgroundShadowBox} />
        <Text style={[styles.dec2, styles.decTypo]}>January, 19 2021</Text>
        <Text style={styles.title}>Personal training Program - Approval</Text>
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-3057.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.backgroundGroup, styles.backgroundLayout]}
        onPress={() => navigation.navigate("DocVerifyMP")}
      >
        <View style={styles.backgroundShadowBox} />
        <Text style={[styles.dec21, styles.decTypo]}>October, 20 2021</Text>
        <Text style={styles.title}>
          Food Diet and Nutrition Plan - Approval
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-30571.png")}
        />
      </Pressable>
      <View style={styles.tabBar}>
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
            source={require("../assets/iconoirshieldquestion.png")}
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
  groupParentLayout: {
    height: 30,
    position: "absolute",
  },
  rectangleLayout: {
    width: 183,
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1,
    borderColor: Color.wrong,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    width: 183,
    top: 0,
    height: 30,
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
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
  backgroundLayout: {
    width: "95.42%",
    height: "21.83%",
    position: "absolute",
  },
  decTypo: {
    color: Color.text03,
    lineHeight: 20,
    fontSize: FontSize.caption2Regular11_size,
    height: "9.89%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  groupPosition: {
    bottom: "42.58%",
    top: "4.95%",
    height: "52.47%",
    left: "6.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "center",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  groupChild: {
    backgroundColor: Color.white,
    borderColor: Color.wrong,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  appointments: {
    width: 106,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
    position: "absolute",
  },
  rectangleParent: {
    left: 193,
    top: 0,
  },
  groupItem: {
    backgroundColor: Color.wrong,
  },
  dashboard: {
    justifyContent: "center",
    textAlign: "center",
    width: 106,
    alignItems: "flex-end",
    display: "flex",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 42,
    top: 6,
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
  helloDrrose: {
    top: 199,
    left: 13,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 237,
    fontWeight: "700",
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  image297Icon: {
    top: 204,
    left: 250,
    width: 30,
  },
  patternIcon: {
    right: "0%",
    opacity: 0.2,
    width: "100%",
  },
  magnifyingglassIcon: {
    width: "10.89%",
    right: "89.11%",
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
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
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
    backgroundColor: Color.main,
    height: 181,
    top: 0,
    position: "absolute",
  },
  backgroundShadowBox: {
    borderWidth: 0.8,
    borderColor: Color.border,
    borderRadius: 9,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    shadowColor: "rgba(230, 234, 238, 0.6)",
    left: "-0.11%",
    bottom: "-0.22%",
    right: "-0.11%",
    top: "-0.22%",
    width: "100.21%",
    height: "100.43%",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  dec2: {
    width: "60.27%",
    top: "75.38%",
    left: "6.99%",
  },
  title: {
    height: "17.8%",
    width: "80.13%",
    top: "60.38%",
    lineHeight: 18,
    left: "6.85%",
    color: Color.text03,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    position: "absolute",
  },
  groupInner: {
    width: "88.88%",
    right: "4.27%",
  },
  backgroundParent: {
    top: "36.38%",
    right: "2.29%",
    bottom: "41.78%",
    left: "2.29%",
  },
  dec21: {
    width: "61.65%",
    top: "77.96%",
    left: "6.93%",
  },
  groupIcon: {
    width: "89.41%",
    right: "3.73%",
  },
  backgroundGroup: {
    top: "59.27%",
    right: "2.04%",
    bottom: "18.9%",
    left: "2.54%",
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
    top: 748,
    left: 22,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  dashboardDoc: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default DashboardDoc;
