import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Nutrition3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutrition5}>
      <View style={[styles.nutrition5Inner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
      <View style={[styles.buttons, styles.tabFlexBox]} />
      <View style={[styles.categories, styles.categoriesLayout]}>
        <View style={[styles.cardsImage, styles.cardsLayout]}>
          <Image
            style={[styles.imgBlurIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/imgblur1.png")}
          />
          <Image
            style={[styles.imgIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/img4.png")}
          />
          <View style={styles.text}>
            <Text style={[styles.title, styles.titleFlexBox]}>
              <Text style={styles.fudge}>{` Fudge `}</Text>
              <Text style={styles.brownies}>Brownies</Text>
            </Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Look for food you love !
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.categories, styles.categoriesLayout]}>
        <View style={[styles.cardsImage, styles.cardsLayout]}>
          <Image
            style={[styles.imgBlurIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/imgblur1.png")}
          />
          <Image
            style={[styles.imgIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/img4.png")}
          />
          <View style={styles.text}>
            <Text style={[styles.title, styles.titleFlexBox]}>
              <Text style={styles.fudge}>{` Fudge `}</Text>
              <Text style={styles.brownies}>Brownies</Text>
            </Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Look for food you love !
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.nutrition5Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={[styles.cardsImage2, styles.tabBarHomePosition]}>
        <Image
          style={[styles.imgBlurIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/imgblur1.png")}
        />
        <Image
          style={[styles.imgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/img5.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title2, styles.titleFlexBox]}>Pumpkin Pie</Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Look for food you love !
          </Text>
        </View>
      </View>
      <View style={[styles.cardsImage3, styles.cardsLayout]}>
        <Image
          style={[styles.imgBlurIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/imgblur1.png")}
        />
        <Image
          style={[styles.imgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/img6.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title2, styles.titleFlexBox]}>
            Roasted Tomato Soup
          </Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Look for food you love !
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.cardsImage4, styles.cardsPosition]}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={[styles.imgBlurIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/imgblur1.png")}
        />
        <Image
          style={[styles.imgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/img7.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title2, styles.titleFlexBox]}>
            Baked Banana Chip Encrusted French Toast
          </Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Look for food you love !
          </Text>
        </View>
      </Pressable>
      <View style={[styles.cardsImage5, styles.cardsImage5Position]}>
        <Image
          style={[styles.imgBlurIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/imgblur1.png")}
        />
        <Image
          style={[styles.imgIcon, styles.imgIconLayout]}
          contentFit="cover"
          source={require("../assets/img8.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.title2, styles.titleFlexBox]}>
            Strawberry Guacamole
          </Text>
          <Text style={[styles.subtitle, styles.titleFlexBox]}>
            Look for food you love !
          </Text>
        </View>
      </View>
      <Text
        style={[styles.pickYourRecipie, styles.justRelaxAndClr]}
      >{`Pick Your Recipie  `}</Text>
      <Text
        style={[styles.justRelaxAnd, styles.justRelaxAndClr]}
      >{`Just relax and not overthink what to eat ! 
This is in our side with our personalized meal plans just prepared and adapted to your needs and your required protein intake..`}</Text>
      <View style={[styles.categories2, styles.cardsImage5Position]}>
        <View style={[styles.cardsImage, styles.cardsLayout]}>
          <Image
            style={[styles.imgBlurIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/imgblur1.png")}
          />
          <Image
            style={[styles.imgIcon, styles.imgIconLayout]}
            contentFit="cover"
            source={require("../assets/img9.png")}
          />
          <View style={styles.text}>
            <Text style={[styles.title2, styles.titleFlexBox]}>
              Collard Burrito
            </Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>
              Look for food you love !
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("Nutrition2")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.tabBarHome, styles.tabBarHomePosition]}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 33,
    width: 87,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesLayout: {
    height: 192,
    width: 185,
    left: 8,
    position: "absolute",
  },
  cardsLayout: {
    borderRadius: Border.br_base,
    height: 192,
    width: 185,
  },
  imgIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  titleFlexBox: {
    textAlign: "left",
    color: Color.white,
    alignSelf: "stretch",
  },
  tabBarHomePosition: {
    left: 10,
    position: "absolute",
  },
  cardsPosition: {
    top: 738,
    borderRadius: Border.br_base,
  },
  cardsImage5Position: {
    left: 203,
    height: 192,
    width: 185,
    position: "absolute",
  },
  justRelaxAndClr: {
    color: Color.globalBlack,
    textAlign: "left",
    position: "absolute",
  },
  backLayout: {
    height: 39,
    width: 39,
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
    alignItems: "center",
    height: 33,
    width: 87,
    position: "absolute",
  },
  nutrition5Inner: {
    top: 493,
    left: 252,
  },
  buttons: {
    top: 502,
    left: 247,
    width: 101,
    height: 23,
    position: "absolute",
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
  fudge: {
    fontFamily: FontFamily.caption2Regular11,
  },
  brownies: {
    fontFamily: FontFamily.h3Regular,
  },
  title: {
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    color: Color.white,
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: FontSize.caption1Regular12_size,
    lineHeight: 16,
    display: "none",
    marginTop: 4,
    fontFamily: FontFamily.caption2Regular11,
    color: Color.white,
    alignSelf: "stretch",
  },
  text: {
    right: 12,
    bottom: 12,
    left: 12,
    position: "absolute",
  },
  cardsImage: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  categories: {
    top: 334,
  },
  nutrition5Child: {
    top: 46,
    left: 322,
    width: 46,
    height: 44,
    position: "absolute",
  },
  title2: {
    fontFamily: FontFamily.h3Regular,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    color: Color.white,
    alignSelf: "stretch",
  },
  cardsImage2: {
    top: 533,
    borderRadius: Border.br_base,
    height: 192,
    width: 185,
  },
  cardsImage3: {
    left: 205,
    top: 334,
    position: "absolute",
  },
  cardsImage4: {
    height: 192,
    width: 185,
    left: 8,
    position: "absolute",
  },
  cardsImage5: {
    top: 738,
    borderRadius: Border.br_base,
  },
  pickYourRecipie: {
    top: 140,
    left: 25,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 315,
    height: 34,
  },
  justRelaxAnd: {
    top: 202,
    left: 20,
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 21,
    width: 350,
    height: 116,
    fontFamily: FontFamily.h3Regular,
  },
  categories2: {
    top: 533,
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
    left: 29,
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
    flex: 1,
    justifyContent: "center",
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  tabBarHome: {
    top: 944,
    width: 393,
    height: 105,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    left: 10,
  },
  nutrition5: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    height: 1049,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default Nutrition3;
