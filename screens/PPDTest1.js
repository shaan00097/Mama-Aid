import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PPDTest1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ppdTest2}>
      <View style={[styles.image2, styles.imageLayout]} />
      <View style={styles.ppdTest2Inner}>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <View style={styles.frameGroup}>
            <View>
              <View style={styles.qParent}>
                <Text style={styles.q}>Q.</Text>
                <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
                <Text style={[styles.text1, styles.textTypo]}>/</Text>
                <Text style={[styles.text2, styles.textTypo]}>30</Text>
              </View>
              <View style={styles.iHaveBeenAbleToLaughAndWrapper}>
                <Text style={[styles.iHaveBeen, styles.iHaveBeenTypo]}>
                  I have been able to laugh and see the funny side of things
                </Text>
              </View>
            </View>
            <View style={styles.answer2Parent}>
              <View style={styles.answerLayout}>
                <Text style={[styles.a, styles.aTypo]}>A.</Text>
                <Text style={[styles.intersectAtOne, styles.text5Typo]}>
                  As much as I always could
                </Text>
              </View>
              <View style={[styles.answer21, styles.answerLayout]}>
                <Text style={[styles.a, styles.aTypo]}>B.</Text>
                <Text style={[styles.intersectAtOne, styles.text5Typo]}>
                  Not quite so much now
                </Text>
              </View>
              <View style={[styles.answer21, styles.answerLayout]}>
                <Text style={[styles.a, styles.aTypo]}>C.</Text>
                <Text style={[styles.intersectAtOne, styles.text5Typo]}>
                  Definitely not so much now
                </Text>
              </View>
              <View style={[styles.answer21, styles.answerLayout]}>
                <Text style={[styles.a, styles.aTypo]}>D.</Text>
                <Text style={[styles.intersectAtOne, styles.text5Typo]}>
                  Not at all
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.instanceParent}>
            <View style={[styles.nextWrapper, styles.nextShadowBox]}>
              <Text style={[styles.next, styles.nextTypo]}>15:00 Min</Text>
            </View>
            <Pressable
              style={[styles.nextContainer, styles.nextShadowBox]}
              onPress={() => navigation.navigate("PPDTest2")}
            >
              <Text style={[styles.next1, styles.nextTypo]}> Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.image3, styles.imageLayout]} />
      <Text style={styles.quiz}> Quiz</Text>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("PPDTest")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft7.png")}
        />
      </Pressable>
      <View style={styles.cancelWrapper}>
        <Pressable onPress={() => navigation.navigate("PPDTest")}>
          <Text style={styles.text3Typo}>Cancel</Text>
        </Pressable>
      </View>
      <View style={[styles.ppdTest2Child, styles.frameParentSpaceBlock]}>
        <View style={styles.frameView}>
          <View style={styles.frameParent1}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-18.png")}
            />
            <Text style={[styles.text3, styles.text3Typo]}>07:28</Text>
          </View>
          <View style={styles.lineParent}>
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.text4}>
          <Text style={[styles.epdsPostpartum, styles.aTypo]}>
            EPDS : Postpartum Depression Test
          </Text>
          <Text style={[styles.text5, styles.text5Typo]} />
        </View>
        <View style={styles.ratings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: 962,
    width: 1282,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    paddingHorizontal: Padding.p_13xl,
    width: 390,
  },
  textSpaceBlock: {
    marginLeft: 2,
    textAlign: "left",
  },
  textTypo: {
    fontSize: FontSize.body1Medium_size,
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  iHaveBeenTypo: {
    fontFamily: FontFamily.h3Regular,
    lineHeight: 22,
    color: Color.globalBlack,
  },
  aTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  text5Typo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  answerLayout: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    height: 56,
    borderRadius: Border.br_3xs,
    width: 326,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
  },
  nextShadowBox: {
    paddingHorizontal: Padding.p_2xl,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  nextTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  text3Typo: {
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  frameLayout: {
    borderTopWidth: 8,
    height: 8,
    borderStyle: "solid",
  },
  image2: {
    top: -59,
    left: -652,
  },
  q: {
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    fontSize: FontSize.h5Semibold_size,
  },
  text: {
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    marginLeft: 2,
    fontSize: FontSize.h5Semibold_size,
  },
  text1: {
    display: "flex",
    alignItems: "flex-end",
    width: 7,
    height: 22,
    marginLeft: 2,
    textAlign: "left",
  },
  text2: {
    marginLeft: 2,
    textAlign: "left",
  },
  qParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  iHaveBeen: {
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.h3Regular,
    flex: 1,
  },
  iHaveBeenAbleToLaughAndWrapper: {
    marginTop: 12,
    width: 326,
    flexDirection: "row",
  },
  a: {
    width: 15,
    fontSize: FontSize.body1Medium_size,
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  intersectAtOne: {
    marginLeft: 12,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 22,
    color: Color.globalBlack,
  },
  answer21: {
    marginTop: 20,
  },
  answer2Parent: {
    width: 363,
    marginTop: 24,
  },
  frameGroup: {
    width: 385,
  },
  next: {
    color: Color.globalBlack,
  },
  nextWrapper: {
    backgroundColor: Color.colorGray_100,
  },
  next1: {
    color: Color.gray6,
  },
  nextContainer: {
    backgroundColor: Color.main,
    width: 102,
  },
  instanceParent: {
    justifyContent: "space-between",
    marginTop: 47,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameParent: {
    borderRadius: Border.br_21xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: Padding.p_13xl,
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  ppdTest2Inner: {
    bottom: 0,
    height: 582,
    justifyContent: "flex-end",
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  image3: {
    top: -67,
    left: -641,
  },
  quiz: {
    marginLeft: -113.1,
    top: 50,
    left: "50%",
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
    fontSize: FontSize.h5Semibold_size,
    position: "absolute",
  },
  backChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    height: 39,
    width: 39,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
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
    top: 44,
    left: 27,
  },
  cancelWrapper: {
    top: 39,
    left: 282,
    width: 84,
    height: 48,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
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
  frameChild: {
    borderRadius: Border.br_5xs,
    width: 22,
    height: 22,
  },
  text3: {
    marginLeft: 6,
  },
  frameParent1: {
    width: 92,
    height: 32,
    flexDirection: "row",
  },
  frameItem: {
    borderColor: Color.colorGray_600,
    width: 334,
  },
  frameInner: {
    width: 200,
    borderColor: Color.wrong,
  },
  lineParent: {
    height: 8,
    justifyContent: "flex-end",
  },
  frameView: {
    height: 8,
  },
  ppdTest2Child: {
    top: 172,
    height: 63,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_13xl,
    left: 0,
    position: "absolute",
  },
  epdsPostpartum: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    fontWeight: "700",
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  text5: {
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.caption2Regular11,
    color: Color.grayGray1,
    marginTop: 4,
    alignSelf: "stretch",
  },
  text4: {
    flex: 1,
  },
  ratings: {
    width: 41,
    height: 18,
    display: "none",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    top: 137,
    left: 42,
    width: 328,
    flexDirection: "row",
    position: "absolute",
  },
  ppdTest2: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default PPDTest1;
