import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.checkoutShadowBox]}>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.spacer}>
          <View style={styles.spacer1} />
        </View>
        <View style={[styles.instructions, styles.instructionsSpaceBlock]}>
          <View style={styles.title}>
            <Text style={[styles.monthlySubscription, styles.text2Typo]}>
              Monthly Subscription
            </Text>
            <Text
              style={styles.thisSubscriptionWill}
            >{`This subscription will let you access all the application features for free
Personalized Meal Plans
Personalized Workout Courses
Practitioner Channeling`}</Text>
          </View>
        </View>
        <View style={styles.spacer}>
          <View style={styles.spacer1} />
        </View>
        <View style={styles.spacer}>
          <View style={styles.spacer1} />
        </View>
      </View>
      <View style={[styles.paymentMethod, styles.instructionsSpaceBlock]}>
        <View style={styles.top}>
          <View style={styles.title1}>
            <Text style={[styles.monthlySubscription, styles.text2Typo]}>
              Payment Method
            </Text>
            <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
          </View>
          <Image
            style={styles.plusIcon}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
        </View>
        <View style={styles.creditCards}>
          <LinearGradient
            style={styles.cardsCardLayout1}
            locations={[0, 1]}
            colors={["#ffcc00", "#7b61ff"]}
          >
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.cardsCreditCardChild, styles.cardsCardLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-562.png")}
            />
            <Image
              style={[styles.cardsCreditCardItem, styles.cardsCardLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-563.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={styles.chipIcon}
              contentFit="cover"
              source={require("../assets/chip.png")}
            />
            <Image
              style={styles.mastercardIcon}
              contentFit="cover"
              source={require("../assets/mastercard.png")}
            />
            <Text style={[styles.johnDoe, styles.textTypo]}>John Doe</Text>
            <Text style={[styles.text, styles.textTypo]}>•••• 4871</Text>
          </LinearGradient>
          <LinearGradient
            style={[styles.cardsCreditCard1, styles.cardsCardLayout1]}
            locations={[0, 1]}
            colors={["#3364e1", "#ffcc00"]}
          >
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.cardsCreditCardChild, styles.cardsCardLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-562.png")}
            />
            <Image
              style={[styles.cardsCreditCardItem, styles.cardsCardLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-563.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={styles.chipIcon}
              contentFit="cover"
              source={require("../assets/chip.png")}
            />
            <Image
              style={styles.mastercardIcon}
              contentFit="cover"
              source={require("../assets/visa.png")}
            />
            <Text style={[styles.johnDoe, styles.textTypo]}>John Doe</Text>
            <Text style={[styles.text, styles.textTypo]}>•••• 2459</Text>
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.back, styles.backLayout]}>
        <View style={[styles.backChild, styles.backChildBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft5.png")}
        />
      </View>
      <View style={styles.cartBottomBar}>
        <Text style={[styles.text2, styles.text2Typo]}>$29,99 / mo</Text>
        <View style={[styles.button, styles.tabFlexBox]}>
          <Text style={styles.button1}>Pay Now</Text>
        </View>
      </View>
      <View style={[styles.nextWrapper, styles.backChildBorder]}>
        <Pressable onPress={() => navigation.navigate("Payment")}>
          <Text style={styles.payNow}>Pay Now</Text>
        </Pressable>
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
            source={require("../assets/iconoirshieldquestion.png")}
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
  );
};

const styles = StyleSheet.create({
  checkoutShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  contentLayout: {
    width: 393,
    position: "absolute",
  },
  instructionsSpaceBlock: {
    paddingRight: Padding.p_4xl,
    paddingLeft: Padding.p_5xl,
  },
  text2Typo: {
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    fontWeight: "700",
    textAlign: "left",
  },
  vectorIconPosition: {
    opacity: 0.1,
    position: "absolute",
  },
  cardsCardLayout: {
    height: 58,
    width: 186,
    left: 130,
    opacity: 0.1,
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    lineHeight: 28,
    fontSize: FontSize.title2Bold22_size,
    fontFamily: FontFamily.caption2Regular11,
    fontWeight: "700",
    position: "absolute",
  },
  cardsCardLayout1: {
    backgroundColor: Color.gradientBluePrimary,
    height: 200,
    width: 328,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  backLayout: {
    height: 39,
    width: 39,
  },
  backChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  tabFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
    textAlign: "center",
    fontFamily: FontFamily.caption2Regular11,
  },
  spacer1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.grayGray6,
    position: "absolute",
    width: "100%",
  },
  spacer: {
    height: 8,
    alignSelf: "stretch",
  },
  monthlySubscription: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 24,
    textAlign: "left",
    alignSelf: "stretch",
  },
  thisSubscriptionWill: {
    marginTop: 8,
    color: Color.grayGray1,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    alignSelf: "stretch",
  },
  title: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  instructions: {
    paddingTop: 27,
    paddingBottom: 28,
    alignSelf: "stretch",
  },
  content: {
    top: 88,
    paddingTop: Padding.p_mini,
    left: 0,
  },
  loremIpsum: {
    color: Color.grayGray2,
    marginTop: 4,
    display: "none",
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  title1: {
    alignItems: "center",
    flex: 1,
  },
  plusIcon: {
    width: 22,
    height: 22,
    marginLeft: 24,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  vectorIcon: {
    top: -17,
    left: 192,
    width: 140,
    height: 240,
  },
  cardsCreditCardChild: {
    top: -26,
  },
  cardsCreditCardItem: {
    top: 226,
  },
  vectorIcon1: {
    top: -9,
    left: -18,
    width: 118,
    height: 118,
  },
  chipIcon: {
    top: 40,
    width: 42,
    height: 30,
    left: 32,
    position: "absolute",
  },
  mastercardIcon: {
    bottom: 24,
    width: 56,
    height: 56,
    right: 40,
    position: "absolute",
  },
  johnDoe: {
    bottom: 38,
    left: 32,
    textAlign: "left",
  },
  text: {
    top: 41,
    textAlign: "right",
    right: 40,
  },
  cardsCreditCard1: {
    marginLeft: 16,
  },
  creditCards: {
    width: 664,
    flexDirection: "row",
    marginTop: 8,
  },
  paymentMethod: {
    top: 331,
    left: -9,
    height: 294,
    paddingTop: Padding.p_5xl,
    paddingBottom: 189,
    width: 393,
    position: "absolute",
  },
  backChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    borderColor: Color.border,
    height: 39,
    width: 39,
    left: 0,
  },
  iconChevronleft: {
    marginTop: -7.5,
    top: "50%",
    right: 15,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 38,
    left: 24,
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.h3Regular_size,
    textAlign: "left",
    flex: 1,
  },
  button1: {
    textAlign: "center",
    color: Color.white,
    display: "none",
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    fontSize: FontSize.subtitleMedium_size,
    fontWeight: "700",
  },
  button: {
    backgroundColor: Color.globalPrimary,
    width: 133,
    height: 54,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_base,
    flexDirection: "row",
    display: "none",
  },
  cartBottomBar: {
    marginLeft: -184.5,
    bottom: 176,
    left: "50%",
    backgroundColor: Color.colorGray_900,
    width: 195,
    paddingTop: Padding.p_base,
    paddingBottom: 34,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Padding.p_4xl,
    paddingLeft: Padding.p_5xl,
    position: "absolute",
    overflow: "hidden",
  },
  payNow: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.gray6,
    textAlign: "left",
  },
  nextWrapper: {
    top: 605,
    left: 270,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 12,
    elevation: 12,
    backgroundColor: Color.main,
    borderColor: Color.wrong,
    width: 112,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_base,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
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
    flex: 1,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tabBar: {
    top: 748,
    left: 22,
    backgroundColor: Color.colorGray_100,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  checkout: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 60,
    elevation: 60,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Checkout;
