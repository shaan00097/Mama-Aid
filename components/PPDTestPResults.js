import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const PPDTestPResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ppdTestPresults}>
      <View style={styles.frameParent}>
        <View style={styles.epdsPostpartumDepressionTWrapper}>
          <Text style={[styles.epdsPostpartum, styles.textTypo5]}>
            EPDS : Postpartum Depression Test
          </Text>
        </View>
        <Pressable
          style={styles.groupParentShadowBox}
          onPress={() => navigation.navigate("PPDTestResults")}
        >
          <View style={styles.groupLayout}>
            <View style={[styles.groupWrapper, styles.textFlexBox]}>
              <View style={styles.groupContainer}>
                <View style={[styles.parent, styles.textPosition1]}>
                  <Text style={[styles.text, styles.textLayout3]}>11</Text>
                  <Text style={[styles.text1, styles.textTypo3]}>/</Text>
                  <Text style={[styles.text2, styles.textTypo3]}>30</Text>
                </View>
                <Text style={[styles.yourScore, styles.textTypo3]}>
                  Your Score
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <Text style={styles.yourResultSuggestContainer}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`2024 - 04 - 24 `}</Text>
            </Text>
            <Text style={styles.yourResultSuggestYouMayBe}>
              <Text style={styles.text3}>{` 
Your result suggest you may be suffering from `}</Text>
              <Text style={styles.moderatePostpartumDepression}>
                moderate postpartum depression
              </Text>
            </Text>
          </Text>
        </Pressable>
        <View style={styles.groupParentShadowBox}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupWrapper, styles.textFlexBox]}>
              <View style={styles.groupContainer}>
                <View style={[styles.parent, styles.textPosition1]}>
                  <Text style={[styles.text, styles.textLayout3]}>11</Text>
                  <Text style={[styles.text1, styles.textTypo3]}>/</Text>
                  <Text style={[styles.text2, styles.textTypo3]}>30</Text>
                </View>
                <Text style={[styles.yourScore, styles.textTypo3]}>
                  Your Score
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <Text style={styles.yourResultSuggestContainer}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`2024 - 04 - 01 `}</Text>
            </Text>
            <Text style={styles.yourResultSuggestYouMayBe}>
              <Text style={styles.text3}>{` 
Your result suggest you may be suffering from `}</Text>
              <Text style={styles.moderatePostpartumDepression}>
                moderate postpartum depression
              </Text>
            </Text>
          </Text>
        </View>
        <View style={styles.groupParentShadowBox}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupWrapper, styles.textFlexBox]}>
              <View style={styles.groupContainer}>
                <View style={[styles.parent, styles.textPosition1]}>
                  <Text style={[styles.text, styles.textLayout3]}>9</Text>
                  <Text style={[styles.text1, styles.textTypo3]}>/</Text>
                  <Text style={[styles.text2, styles.textTypo3]}>30</Text>
                </View>
                <Text style={[styles.yourScore, styles.textTypo3]}>
                  Your Score
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildPosition4]}
              contentFit="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <Text style={styles.yourResultSuggestContainer}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`2024 - 03 - 24 `}</Text>
            </Text>
            <Text style={styles.yourResultSuggestYouMayBe}>
              <Text style={styles.text3}>{` 
Your result suggest you may be suffering from `}</Text>
              <Text style={styles.moderatePostpartumDepression}>
                {" "}
                Slight postpartum depression
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.image4, styles.imageLayout]} />
      <View style={[styles.image5, styles.imageLayout]} />
      <Text style={[styles.quiz, styles.quizTypo]}> Quiz</Text>
      <Pressable
        style={[styles.back, styles.backLayout9]}
        onPress={() => navigation.navigate("PPDTest")}
      >
        <View style={[styles.backChild, styles.backLayout9]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={styles.doneWrapper}>
        <Pressable onPress={() => navigation.navigate("PPDTest")}>
          <Text style={[styles.done1, styles.quizTypo]}> Done</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.toKnowMoreContainer}
        onPress={() => navigation.navigate("InformationPage1")}
      >
        <Text style={styles.text15}>
          <Text
            style={styles.yourResultSuggestYouMayBe}
          >{`To know more about PPD -  `}</Text>
          <Text style={styles.clickHere}>Click Here</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo5: {
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
  },
  textFlexBox: {
    justifyContent: "center",
    left: 0,
  },
  textPosition1: {
    height: 26,
    top: 0,
    position: "absolute",
  },
  textLayout3: {
    width: 20,
    display: "flex",
    alignItems: "center",
  },
  textTypo3: {
    opacity: 0.75,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    position: "absolute",
  },
  groupChildPosition4: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  imageLayout: {
    height: 962,
    width: 1282,
    position: "absolute",
  },
  quizTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  backLayout9: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  epdsPostpartum: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    textAlign: "left",
    color: Color.globalBlack,
    fontWeight: "700",
  },
  epdsPostpartumDepressionTWrapper: {
    height: 57,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    width: 342,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  text: {
    fontSize: FontSize.size_8xl,
    textAlign: "center",
    fontWeight: "600",
    height: 26,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    left: 0,
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  text1: {
    top: 5,
    left: 21,
    fontSize: FontSize.footnoteRegular_size,
    opacity: 0.75,
  },
  text2: {
    top: 12,
    height: 11,
    fontSize: FontSize.footnoteRegular_size,
    opacity: 0.75,
    width: 20,
    display: "flex",
    alignItems: "center",
    left: 29,
  },
  parent: {
    left: 12,
    width: 49,
  },
  yourScore: {
    top: 27,
    fontSize: FontSize.caption1Regular12_size,
    textTransform: "lowercase",
    opacity: 0.75,
    left: 0,
  },
  groupContainer: {
    width: 63,
    height: 45,
  },
  groupWrapper: {
    borderRadius: Border.br_121xl,
    padding: Padding.p_31xl,
    top: 0,
    justifyContent: "center",
    height: 110,
    width: 110,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  groupChild: {
    opacity: 0.2,
    height: 110,
    width: 110,
    position: "absolute",
  },
  groupItem: {
    height: 110,
    width: 110,
    position: "absolute",
  },
  groupLayout: {
    height: 110,
    width: 110,
  },
  text4: {
    fontFamily: FontFamily.h3Regular,
    fontWeight: "700",
  },
  text3: {
    color: Color.globalBlack,
  },
  moderatePostpartumDepression: {
    color: Color.colorDarkslateblue_200,
  },
  yourResultSuggestYouMayBe: {
    fontFamily: FontFamily.h3Regular,
  },
  yourResultSuggestContainer: {
    letterSpacing: 0,
    lineHeight: 20,
    width: 189,
    marginLeft: 23,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  groupParentShadowBox: {
    marginTop: 29,
    padding: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    width: 342,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  frameParent: {
    top: 111,
    left: 29,
    position: "absolute",
  },
  image4: {
    top: -68,
    left: -647,
  },
  image5: {
    top: -76,
    left: -636,
  },
  quiz: {
    marginLeft: -105.6,
    top: 41,
    left: "50%",
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    height: 39,
    width: 39,
  },
  iconChevronleft: {
    marginTop: -7.3,
    top: "50%",
    right: 11,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 35,
    left: 33,
  },
  done1: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  doneWrapper: {
    top: 31,
    left: 287,
    borderColor: Color.wrong,
    width: 84,
    height: 48,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  clickHere: {
    textDecoration: "underline",
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
  },
  text15: {
    fontSize: FontSize.body1Medium_size,
    lineHeight: 18,
    textAlign: "left",
    color: Color.globalBlack,
  },
  toKnowMoreContainer: {
    left: 74,
    top: 777,
    position: "absolute",
  },
  ppdTestPresults: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default PPDTestPResults;
