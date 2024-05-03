import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Nutrition6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.nutrition3, styles.imgLayout1]}>
      <View style={[styles.img, styles.imgLayout]}>
        <View style={styles.sauces} />
        <View style={[styles.pizza, styles.pizzaShadowBox]} />
        <View style={styles.shrimp} />
        <View style={[styles.rice, styles.ricePosition]} />
        <View style={styles.juice} />
        <View style={styles.juice1} />
        <View style={[styles.logo, styles.tabFlexBox]} />
        <View style={styles.myProteinIntakeParent}>
          <Text style={[styles.myProteinIntake, styles.goPremiumToTypo]}>
            My Protein Intake
          </Text>
          <Text style={[styles.givenBelowIs, styles.givenBelowIsTypo]}>
            Given below is the protein intake recommended for your health for
            today
          </Text>
          <View style={[styles.inputField, styles.backChildBorder]}>
            <Text style={[styles.yourProteinIntake, styles.givenBelowIsTypo]}>
              Your Protein Intake | grams/day
            </Text>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("Nutrition2")}
        >
          <Text style={styles.button}>Meal Plans</Text>
        </Pressable>
        <Image
          style={styles.imgChild}
          contentFit="cover"
          source={require("../assets/star-11.png")}
        />
        <View style={[styles.tabBarHome, styles.imgLayout]}>
          <View style={[styles.tabBar, styles.tabBarFlexBox]}>
            <Pressable
              style={[styles.tab, styles.tabFlexBox]}
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
              style={[styles.tab, styles.tabFlexBox]}
              onPress={() => navigation.navigate("PPDTest")}
            >
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/iconoirshieldquestion2.png")}
              />
              <Text style={[styles.ppdScreening, styles.homeTypo]}>
                PPD Screening
              </Text>
            </Pressable>
            <Pressable
              style={[styles.tab, styles.tabFlexBox]}
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
              style={[styles.tab, styles.tabFlexBox]}
              onPress={() => navigation.navigate("ProfilePM")}
            >
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/iconoirprofilecircle.png")}
              />
              <Text style={[styles.ppdScreening, styles.homeTypo]}>
                Profile
              </Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          style={[styles.back, styles.backLayout6]}
          onPress={() => navigation.navigate("Nutrition")}
        >
          <View style={[styles.backChild, styles.backLayout6]} />
          <Image
            style={styles.iconChevronleft}
            contentFit="cover"
            source={require("../assets/icon--chevronleft.png")}
          />
        </Pressable>
      </View>
      <View style={styles.nutrition3Child} />
      <Pressable
        style={styles.banner}
        onPress={() => navigation.navigate("ChooseYourPlan")}
      >
        <View style={[styles.bg, styles.childPosition]}>
          <View style={[styles.bgChild, styles.childPosition]} />
        </View>
        <View style={styles.leftSection}>
          <View style={[styles.text, styles.childPosition]}>
            <Text style={[styles.goPremium, styles.childPosition]}>
              Go Premium !!
            </Text>
            <Text
              style={[styles.goPremiumTo, styles.childPosition]}
            >{`Go premium  to have unlimited 
access`}</Text>
          </View>
          <View style={styles.bannerButton}>
            <View style={[styles.bg, styles.childPosition]}>
              <View style={[styles.btnViewMoreChild, styles.childPosition]} />
              <Text style={styles.learnMore}>Learn More</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.image298Icon}
          contentFit="cover"
          source={require("../assets/image-2981.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imgLayout1: {
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  imgLayout: {
    width: 393,
    position: "absolute",
  },
  pizzaShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  ricePosition: {
    left: "50%",
    position: "absolute",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  goPremiumToTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
  },
  givenBelowIsTypo: {
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  backChildBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  tabBarFlexBox: {
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    textAlign: "center",
  },
  backLayout6: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    position: "absolute",
  },
  sauces: {
    marginTop: 43,
    right: 0,
    width: 106,
    height: 87,
    top: "50%",
    position: "absolute",
  },
  pizza: {
    marginTop: -115,
    right: -56,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    width: 132,
    height: 132,
    top: "50%",
    position: "absolute",
  },
  shrimp: {
    marginTop: -134,
    left: -30,
    width: 119,
    height: 122,
    top: "50%",
    position: "absolute",
  },
  rice: {
    marginLeft: -58.5,
    top: -23,
    width: 111,
    height: 112,
  },
  juice: {
    marginTop: 52,
    left: -12,
    width: 101,
    height: 69,
    top: "50%",
    position: "absolute",
  },
  juice1: {
    marginTop: 70,
    left: 43,
    width: 82,
    height: 65,
    top: "50%",
    position: "absolute",
  },
  logo: {
    marginTop: -21,
    marginLeft: -32.5,
    width: 64,
    height: 64,
    alignItems: "center",
    left: "50%",
    position: "absolute",
    top: "50%",
    overflow: "hidden",
  },
  myProteinIntake: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    width: 315,
    height: 34,
  },
  givenBelowIs: {
    fontSize: FontSize.subtitleMedium_size,
    letterSpacing: 1,
    lineHeight: 24,
    width: 344,
    marginTop: 31,
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  yourProteinIntake: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_800,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 10,
    overflow: "hidden",
  },
  inputField: {
    width: 329,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    marginTop: 31,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  myProteinIntakeParent: {
    top: 178,
    left: 15,
    width: 391,
    height: 202,
    paddingBottom: Padding.p_20xl,
    alignItems: "center",
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
  },
  buttonPrimary: {
    top: 424,
    left: 27,
    width: 353,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    backgroundColor: Color.main,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  imgChild: {
    left: 330,
    width: 46,
    height: 44,
    top: 40,
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  tabBarHome: {
    top: 747,
    left: 7,
    height: 105,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  backChild: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iconChevronleft: {
    marginTop: -7.5,
    right: 14,
    width: 9,
    height: 15,
    top: "50%",
    position: "absolute",
  },
  back: {
    left: 34,
    top: 40,
  },
  img: {
    left: 0,
    top: 0,
    overflow: "hidden",
    height: 852,
    backgroundColor: Color.white,
  },
  nutrition3Child: {
    top: 668,
    left: 217,
    width: 44,
    height: 21,
    position: "absolute",
  },
  bgChild: {
    borderRadius: Border.br_3xl,
    opacity: 0.2,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: Color.main,
  },
  bg: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  goPremium: {
    height: "27.66%",
    width: "51.8%",
    fontSize: FontSize.body1Medium_size,
    lineHeight: 18,
    color: Color.colorDarkslateblue_100,
    top: "0%",
    left: "0%",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  goPremiumTo: {
    height: "64.63%",
    top: "35.5%",
    fontSize: FontSize.caption1Regular12_size,
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    width: "100%",
  },
  text: {
    height: "57.29%",
    bottom: "42.71%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  btnViewMoreChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  learnMore: {
    height: "42.95%",
    width: "59.94%",
    top: "28.41%",
    left: "19.98%",
    fontSize: FontSize.textCaptionSemiBold_size,
    lineHeight: 15,
    color: Color.white,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    position: "absolute",
  },
  bannerButton: {
    height: "30.86%",
    width: "48.25%",
    top: "69.14%",
    right: "2.98%",
    left: "48.78%",
    bottom: "0%",
    position: "absolute",
  },
  leftSection: {
    height: "81.02%",
    width: "62.53%",
    top: "12.05%",
    right: "31.25%",
    bottom: "6.93%",
    left: "6.22%",
    position: "absolute",
  },
  image298Icon: {
    height: "50.23%",
    width: "17.81%",
    top: "17.84%",
    right: "7.92%",
    bottom: "31.93%",
    left: "74.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  banner: {
    top: 556,
    left: 17,
    height: 176,
    width: 360,
    position: "absolute",
  },
  nutrition3: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 60,
    elevation: 60,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default Nutrition6;
