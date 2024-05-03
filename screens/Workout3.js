import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Workout3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout3}>
      <View style={styles.titleDescription}>
        <View>
          <Text style={styles.workoutCourses}>{`10 Workout Courses
`}</Text>
          <Text style={styles.letsStartToday}>Let’s Start Today !</Text>
        </View>
      </View>
      <View style={styles.list}>
        <View style={styles.mediaBorder}>
          <View style={styles.media1}>
            <Image
              style={styles.iconlylightheart}
              contentFit="cover"
              source={require("../assets/iconlylightheart.png")}
            />
            <LinearGradient
              style={[styles.wrapper, styles.wrapperPosition]}
              locations={[0, 0.99]}
              colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0)"]}
            >
              <ImageBackground
                style={[styles.icon, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/frame51881.png")}
              >
                <View style={[styles.time, styles.timeLayout]}>
                  <Text style={styles.text}>10:00</Text>
                  <Image
                    style={[
                      styles.iconlylightOutlinetimeCirc,
                      styles.timeLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlylightoutlinetime-circle.png")}
                  />
                </View>
              </ImageBackground>
            </LinearGradient>
            <Text style={styles.beingOpenTo}>{`Meditation `}</Text>
            <Pressable
              style={[styles.practices, styles.tabFlexBox]}
              onPress={() => navigation.navigate("Workout4")}
            >
              <Text style={styles.read}>Preview</Text>
            </Pressable>
            <Image
              style={[styles.iconlylightdownload, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightdownload.png")}
            />
          </View>
        </View>
        <View style={[styles.media2, styles.mediaBorder]}>
          <View style={styles.media1}>
            <Image
              style={styles.iconlylightheart}
              contentFit="cover"
              source={require("../assets/iconlylightheart1.png")}
            />
            <LinearGradient
              style={[styles.wrapper, styles.wrapperPosition]}
              locations={[0, 0.99]}
              colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0)"]}
            >
              <ImageBackground
                style={[styles.icon, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/frame518811.png")}
              >
                <View style={[styles.time1, styles.timeLayout]}>
                  <Text style={styles.text1}>15:30</Text>
                  <Image
                    style={[
                      styles.iconlylightOutlinetimeCirc,
                      styles.timeLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlylightoutlinetime-circle1.png")}
                  />
                </View>
              </ImageBackground>
            </LinearGradient>
            <Text style={styles.beingOpenTo}>Kegel Workout</Text>
            <View style={[styles.practices, styles.tabFlexBox]}>
              <Text style={styles.read}>Preview</Text>
            </View>
            <Image
              style={[styles.iconlylightdownload, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightdownload1.png")}
            />
          </View>
        </View>
        <View style={[styles.media2, styles.mediaBorder]}>
          <View style={styles.media1}>
            <Image
              style={styles.iconlylightheart}
              contentFit="cover"
              source={require("../assets/iconlylightheart2.png")}
            />
            <LinearGradient
              style={[styles.wrapper, styles.wrapperPosition]}
              locations={[0, 0.99]}
              colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0)"]}
            >
              <ImageBackground
                style={[styles.icon, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/frame518812.png")}
              >
                <View style={[styles.time, styles.timeLayout]}>
                  <Text style={styles.text1}>10:00</Text>
                  <Image
                    style={[
                      styles.iconlylightOutlinetimeCirc,
                      styles.timeLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconlylightoutlinetime-circle2.png")}
                  />
                </View>
              </ImageBackground>
            </LinearGradient>
            <Text style={styles.beingOpenTo}>Yoga Training</Text>
            <View style={[styles.practices, styles.tabFlexBox]}>
              <Text style={styles.read}>Preview</Text>
            </View>
            <Image
              style={[styles.iconlylightdownload, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconlylightdownload2.png")}
            />
          </View>
        </View>
      </View>
      <Text
        style={[styles.pickYourWorkout, styles.goPremiumToTypo]}
      >{`Pick Your Workout `}</Text>
      <Image
        style={styles.workout3Child}
        contentFit="cover"
        source={require("../assets/star-10.png")}
      />
      <View style={styles.banner}>
        <View style={[styles.bg, styles.childPosition]}>
          <View style={[styles.bgChild, styles.childPosition]} />
        </View>
        <View style={styles.leftSection}>
          <View style={[styles.text3, styles.childPosition]}>
            <Text style={[styles.goPremium, styles.goPremiumTypo]}>
              Go Premium !!
            </Text>
            <Text
              style={[styles.goPremiumTo, styles.goPremiumToTypo]}
            >{`Go premium  to have unlimited 
access`}</Text>
          </View>
          <Pressable
            style={styles.bannerButton}
            onPress={() => navigation.navigate("ChooseYourPlan")}
          >
            <View style={[styles.bg, styles.childPosition]}>
              <View style={[styles.btnViewMoreChild, styles.childPosition]} />
              <Text style={[styles.learnMore, styles.goPremiumTypo]}>
                Learn More
              </Text>
            </View>
          </Pressable>
        </View>
        <Image
          style={[styles.image298Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-298.png")}
        />
      </View>
      <View style={styles.tabBar}>
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
          <Text style={[styles.ppdScreening, styles.homeTypo]}>Profile</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Workout")}
      >
        <View style={[styles.backChild, styles.childPosition]} />
        <Image
          style={[styles.iconChevronleft, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    top: 0,
    left: 0,
  },
  childLayout: {
    height: "100%",
    width: "100%",
  },
  timeLayout: {
    height: 29,
    position: "absolute",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mediaBorder: {
    paddingBottom: 19,
    borderBottomWidth: 1.2,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
  },
  goPremiumToTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    top: "0%",
    left: "0%",
  },
  goPremiumTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    textAlign: "center",
  },
  workoutCourses: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    color: Color.main,
    fontWeight: "700",
  },
  letsStartToday: {
    marginTop: 9.6,
    color: Color.text,
    lineHeight: 19,
    fontSize: FontSize.size_lgi_1,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  titleDescription: {
    top: 171,
    width: 391,
    left: 14,
    position: "absolute",
  },
  iconlylightheart: {
    left: "92.65%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "69.98%",
    width: "7.35%",
    height: "30.02%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    color: Color.globalBlack,
    fontFamily: FontFamily.fixelDisplayRegular,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base_7,
    left: 38,
    top: 6,
    textAlign: "left",
    position: "absolute",
  },
  iconlylightOutlinetimeCirc: {
    width: 29,
    top: 0,
    left: 0,
  },
  time: {
    width: 80,
    top: 14,
    height: 29,
    display: "none",
    left: 14,
  },
  icon: {
    borderRadius: 14,
    backgroundColor: Color.gradientBluePrimary,
    overflow: "hidden",
  },
  wrapper: {
    width: 143,
    height: 96,
    position: "absolute",
  },
  beingOpenTo: {
    width: 228,
    left: 163,
    top: 0,
    color: Color.text,
    lineHeight: 19,
    fontSize: FontSize.size_lgi_1,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  read: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_base_7,
    color: Color.text,
    fontFamily: FontFamily.h3Regular,
  },
  practices: {
    top: 60,
    borderRadius: Border.br_458xl_9,
    backgroundColor: Color.colorDarkslateblue_300,
    width: 119,
    paddingHorizontal: 19,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    left: 163,
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightdownload: {
    right: "12.23%",
    left: "80.42%",
    bottom: "0%",
    top: "69.98%",
    width: "7.35%",
    height: "30.02%",
    maxWidth: "100%",
  },
  media1: {
    height: 96,
    width: 391,
  },
  text1: {
    color: Color.white,
    fontFamily: FontFamily.fixelDisplayRegular,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base_7,
    left: 38,
    top: 6,
    textAlign: "left",
    position: "absolute",
  },
  time1: {
    width: 78,
    top: 14,
    height: 29,
    display: "none",
    left: 14,
  },
  media2: {
    marginTop: 19.1,
  },
  list: {
    top: 261,
    width: 374,
    left: 19,
    position: "absolute",
  },
  pickYourWorkout: {
    top: 119,
    left: 11,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 315,
    height: 34,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  workout3Child: {
    top: 40,
    left: 326,
    width: 46,
    height: 44,
    position: "absolute",
  },
  bgChild: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.main,
    opacity: 0.2,
    left: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  bg: {
    left: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  goPremium: {
    height: "27.64%",
    width: "51.76%",
    fontSize: FontSize.body1Medium_size,
    lineHeight: 18,
    color: Color.colorDarkslateblue_100,
    left: "0%",
    top: "0%",
  },
  goPremiumTo: {
    height: "64.56%",
    top: "35.44%",
    fontSize: FontSize.caption1Regular12_size,
    lineHeight: 21,
    left: "0%",
    width: "100%",
  },
  text3: {
    height: "57.34%",
    bottom: "42.66%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  btnViewMoreChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslateblue_100,
    left: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  learnMore: {
    height: "42.76%",
    width: "60.02%",
    top: "28.62%",
    left: "20.04%",
    fontSize: FontSize.textCaptionSemiBold_size,
    lineHeight: 15,
    color: Color.white,
  },
  bannerButton: {
    height: "30.85%",
    width: "48.24%",
    top: "69.15%",
    right: "2.98%",
    left: "48.78%",
    bottom: "0%",
    position: "absolute",
  },
  leftSection: {
    height: "81.03%",
    width: "62.54%",
    top: "12.07%",
    right: "31.24%",
    bottom: "6.9%",
    left: "6.21%",
    position: "absolute",
  },
  image298Icon: {
    height: "50.26%",
    width: "17.8%",
    top: "17.84%",
    right: "7.91%",
    bottom: "31.9%",
    left: "74.29%",
  },
  banner: {
    top: 649,
    left: 18,
    width: 354,
    height: 116,
    position: "absolute",
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.main,
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
  },
  tab: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    top: 775,
    width: 360,
    height: 104,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    flexDirection: "row",
    left: 19,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  backChild: {
    borderRadius: Border.br_3xs,
    borderColor: Color.border,
    borderWidth: 1,
    left: "0%",
    height: "100%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    borderStyle: "solid",
  },
  iconChevronleft: {
    height: "38.46%",
    width: "23.08%",
    top: "30.77%",
    right: "35.9%",
    bottom: "30.77%",
    left: "41.03%",
  },
  back: {
    height: "4.44%",
    width: "9.92%",
    top: "4.55%",
    right: "85.24%",
    bottom: "91.01%",
    left: "4.83%",
    position: "absolute",
  },
  workout3: {
    shadowColor: "rgba(28, 27, 118, 0.07)",
    shadowOffset: {
      width: 0,
      height: 6.800000190734863,
    },
    shadowRadius: 90.67,
    elevation: 90.67,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    height: 879,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Workout3;
