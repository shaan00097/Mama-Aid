import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Nutrition2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutrition4}>
      <View style={styles.groupParent}>
        <View style={styles.groupParent}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
        </View>
        <View style={styles.icons8Sun1} />
      </View>
      <Text style={styles.pickYourDiet}>{`Pick Your Diet `}</Text>
      <Image
        style={styles.nutrition4Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("Nutrition6")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.categoriesParent, styles.tabBarHomePosition]}>
        <View style={[styles.categories, styles.categoriesLayout]}>
          <View style={[styles.cardsImage, styles.cardsLayout]}>
            <Image
              style={[styles.imgBlurIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/imgblur2.png")}
            />
            <Image
              style={[styles.imgIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/img10.png")}
            />
            <View style={styles.text}>
              <Text style={styles.title}>Dash Diet</Text>
              <Text style={styles.subtitle}>Look for foodyou love !</Text>
            </View>
          </View>
        </View>
        <View style={[styles.categories1, styles.categoriesLayout]}>
          <View style={[styles.cardsImage, styles.cardsLayout]}>
            <Image
              style={[styles.imgBlurIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/imgblur2.png")}
            />
            <Image
              style={[styles.imgIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/img11.png")}
            />
            <View style={styles.text}>
              <Text style={styles.title}>Vegan Diet</Text>
              <Text style={styles.subtitle}>Look for food you love !</Text>
            </View>
          </View>
        </View>
        <View style={[styles.categories2, styles.categories2Layout]}>
          <View style={[styles.cardsImage2, styles.categories2Layout]}>
            <Image
              style={[styles.imgBlurIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/imgblur3.png")}
            />
            <Image
              style={[styles.imgIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/img12.png")}
            />
            <View style={styles.text}>
              <Text style={styles.title}>Keto Diet</Text>
              <Text style={styles.subtitle}>Look for food you love !</Text>
            </View>
          </View>
        </View>
        <View style={[styles.categories3, styles.categoriesLayout]}>
          <View style={[styles.cardsImage, styles.cardsLayout]}>
            <Image
              style={[styles.imgBlurIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/imgblur2.png")}
            />
            <Image
              style={[styles.imgIcon, styles.imgIconLayout]}
              contentFit="cover"
              source={require("../assets/img13.png")}
            />
            <Pressable
              style={styles.text}
              onPress={() => navigation.navigate("Nutrition3")}
            >
              <Text style={styles.title}>Paleo Diet</Text>
              <Text style={styles.subtitle}>Look for food you love !</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.tabBarHome, styles.tabBarHomePosition]}>
        <View style={styles.tabBar}>
          <Pressable
            style={styles.tab}
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
            style={styles.tab}
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
            style={styles.tab}
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
            style={styles.tab}
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    borderRadius: Border.br_11xl,
    width: 393,
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  tabBarHomePosition: {
    left: 13,
    position: "absolute",
  },
  categoriesLayout: {
    height: 128,
    width: 352,
    position: "absolute",
  },
  cardsLayout: {
    borderRadius: Border.br_base,
    top: 0,
  },
  imgIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    height: "100%",
    overflow: "hidden",
    borderRadius: Border.br_base,
    position: "absolute",
    width: "100%",
  },
  categories2Layout: {
    height: 133,
    width: 357,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 7,
    textAlign: "center",
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    fontFamily: FontFamily.caption2Regular11,
  },
  groupChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    height: 860,
  },
  groupParent: {
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
    height: 860,
  },
  icons8Sun1: {
    top: 416,
    left: 25,
    width: 27,
    height: 16,
    position: "absolute",
  },
  pickYourDiet: {
    top: 136,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    width: 315,
    height: 34,
    textAlign: "left",
    left: 13,
    position: "absolute",
  },
  nutrition4Child: {
    top: 46,
    left: 328,
    width: 46,
    height: 44,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    left: 0,
    top: 0,
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
    top: 48,
    left: 36,
  },
  imgBlurIcon: {
    top: "10%",
    bottom: "-10%",
    opacity: 0.24,
  },
  imgIcon: {
    top: "0%",
    bottom: "0%",
  },
  title: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
    color: Color.white,
    alignSelf: "stretch",
    textAlign: "left",
  },
  subtitle: {
    fontSize: FontSize.caption1Regular12_size,
    lineHeight: 16,
    display: "none",
    marginTop: 4,
    fontFamily: FontFamily.caption2Regular11,
    color: Color.white,
    alignSelf: "stretch",
    textAlign: "left",
  },
  text: {
    right: 12,
    bottom: 12,
    left: 12,
    position: "absolute",
  },
  cardsImage: {
    height: 128,
    width: 352,
    position: "absolute",
    left: 0,
  },
  categories: {
    top: 284,
    left: 5,
    height: 128,
    width: 352,
  },
  categories1: {
    top: 143,
    left: 5,
    height: 128,
    width: 352,
  },
  cardsImage2: {
    borderRadius: Border.br_base,
    top: 0,
  },
  categories2: {
    top: 427,
  },
  categories3: {
    left: 6,
    top: 0,
  },
  categoriesParent: {
    top: 197,
    height: 560,
    width: 360,
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.white,
  },
  tabBarHome: {
    top: 755,
    height: 105,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    width: 393,
  },
  nutrition4: {
    height: 860,
    width: "100%",
    flex: 1,
  },
});

export default Nutrition2;
