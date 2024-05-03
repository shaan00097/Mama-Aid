import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Nutrition7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutrition8}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupBg1]} />
          <LinearGradient
            style={[styles.edgarCastrejon1spu0ktEjgUn, styles.groupItemLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0)", "#000"]}
          />
          <Image
            style={[
              styles.edgarCastrejon1spu0ktEjgUnIcon,
              styles.rectangleParentPosition,
            ]}
            contentFit="cover"
            source={require("../assets/edgarcastrejon1spu0ktejgunsplash-9.png")}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupPosition1]}
            locations={[0, 1]}
            colors={["#000", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.groupInner, styles.groupPosition1]} />
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-116.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout3]}
            contentFit="cover"
            source={require("../assets/ellipse-25.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/ellipse-26.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/ellipse-27.png")}
          />
          <Image
            style={[styles.groupChild6, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/ellipse-291.png")}
          />
          <Text style={[styles.instructions, styles.instructionsTypo]}>
            Instructions
          </Text>
          <Text style={[styles.preheatTheOven, styles.theLayout1]}>
            Preheat the oven to 350°F (175°C). Line a rimmed baking sheet with
            parchment paper
          </Text>
          <Text style={[styles.placeTheBanana, styles.theLayout1]}>
            Place the banana chips in a food processor and pulse until you have
            a banana chip bits (you should not have a powder). Then place
            crushed chips in a shallow bowl or plate.
          </Text>
          <Text style={styles.text}>3:21</Text>
          <View style={styles.lineView} />
          <Text style={styles.finishCook}>Finish cook</Text>
          <Image
            style={styles.icons8Enlarge2}
            contentFit="cover"
            source={require("../assets/icons8enlarge-2.png")}
          />
          <Image
            style={styles.icons8PauseButton2}
            contentFit="cover"
            source={require("../assets/icons8pause-button-2.png")}
          />
          <View style={[styles.rectangleView, styles.groupChildPosition2]} />
          <View style={[styles.groupChild7, styles.groupChildPosition2]} />
          <Text style={[styles.text1, styles.textLayout1]}>1</Text>
          <Text style={[styles.text2, styles.textLayout1]}>2</Text>
          <Text style={[styles.text3, styles.text3Position]}>3</Text>
          <Text style={[styles.text4, styles.textLayout1]}>4</Text>
          <Text style={[styles.text5, styles.textLayout1]}>5</Text>
          <Text style={[styles.text6, styles.textLayout1]}>6</Text>
          <Text style={[styles.text7, styles.textLayout1]}>7</Text>
          <View style={styles.lineView} />
          <Image
            style={styles.icons8Enlarge2}
            contentFit="cover"
            source={require("../assets/icons8enlarge-2.png")}
          />
          <Image
            style={styles.icons8PauseButton2}
            contentFit="cover"
            source={require("../assets/icons8pause-button-2.png")}
          />
          <View style={[styles.groupChild9, styles.groupChildPosition2]} />
          <View style={[styles.groupChild7, styles.groupChildPosition2]} />
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-29.png")}
        />
      </View>
      <View style={styles.back}>
        <View style={[styles.backChild, styles.backLayout3]} />
        <Image
          style={[styles.iconChevronleft, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft3.png")}
        />
      </View>
      <Pressable
        style={[styles.back1, styles.backLayout3]}
        onPress={() => navigation.navigate("Nutrition3")}
      >
        <View style={[styles.backItem, styles.backLayout3]} />
        <Image
          style={[styles.iconChevronleft1, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={styles.view}>
        <View style={styles.nextWrapper}>
          <Text style={[styles.next, styles.nextTypo1]}>15:00 Min</Text>
        </View>
        <View style={[styles.nextContainer, styles.nextShadowBox1]}>
          <Text style={[styles.next1, styles.nextTypo1]}> Next</Text>
        </View>
      </View>
      <Image
        style={[styles.backgroundIcon, styles.pmBookingPosition]}
        contentFit="cover"
        source={require("../assets/background2.png")}
      />
      <LinearGradient
        style={[styles.pmBooking, styles.pmBookingPosition]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0.42)", "rgba(0, 0, 0, 0)"]}
      >
        <Text style={styles.yourRequestHas}>Your request has been sent</Text>
        <Text style={[styles.youWillReceive, styles.instructionsTypo]}>
          You will receive a notification upon the confirmation of the
          practitioner
        </Text>
        <Image
          style={[styles.checked13, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/checked-1-1.png")}
        />
        <Pressable
          style={[styles.nextFrame, styles.nextShadowBox1]}
          onPress={() => navigation.navigate("Nutrition3")}
        >
          <Text style={[styles.next1, styles.nextTypo1]}> Done</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    left: 0,
    width: 399,
    top: 0,
    position: "absolute",
  },
  groupBg1: {
    backgroundColor: Color.white,
    left: 6,
  },
  groupItemLayout: {
    width: 390,
    left: 9,
    backgroundColor: Color.gradientBluePrimary,
  },
  groupPosition1: {
    top: 381,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChildLayout3: {
    height: 30,
    width: 32,
    top: 450,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChildLayout2: {
    top: 451,
    height: 30,
    width: 32,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  instructionsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  theLayout1: {
    height: 98,
    textAlign: "left",
    color: Color.colorGray_400,
    fontSize: FontSize.body1Medium_size,
    width: 336,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    position: "absolute",
  },
  groupChildPosition2: {
    height: 3,
    left: 69,
    top: 354,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textLayout1: {
    height: 15,
    width: 15,
    lineHeight: 12,
    fontSize: FontSize.textCaptionSemiBold_size,
    top: 458,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  text3Position: {
    left: 157,
    position: "absolute",
  },
  backLayout3: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iconPosition2: {
    width: 9,
    right: 14,
    top: "50%",
    height: 15,
    position: "absolute",
  },
  nextTypo1: {
    fontWeight: "600",
    lineHeight: 22,
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  nextShadowBox1: {
    backgroundColor: Color.main,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  pmBookingPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    width: 393,
    height: 853,
    top: 50,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  edgarCastrejon1spu0ktEjgUn: {
    height: 305,
    opacity: 0.2,
    backgroundColor: Color.gradientBluePrimary,
    top: 50,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  edgarCastrejon1spu0ktEjgUnIcon: {
    height: 402,
    borderRadius: Border.br_11xl,
  },
  groupItem: {
    height: 59,
    opacity: 0.6,
    backgroundColor: Color.gradientBluePrimary,
    width: 390,
    left: 9,
  },
  groupInner: {
    width: 392,
    height: 487,
    backgroundColor: Color.white,
    left: 6,
  },
  rectangleIcon: {
    top: 785,
    left: 202,
    width: 172,
    height: 46,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  ellipseIcon: {
    left: 94,
  },
  groupChild1: {
    left: 45,
  },
  groupChild2: {
    left: 147,
  },
  groupChild3: {
    left: 198,
  },
  groupChild4: {
    left: 247,
  },
  groupChild5: {
    left: 299,
  },
  groupChild6: {
    left: 349,
  },
  instructions: {
    top: 409,
    left: 75,
    width: 262,
    height: 31,
    color: Color.globalBlack,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  preheatTheOven: {
    top: 548,
    left: 41,
  },
  placeTheBanana: {
    top: 625,
    left: 38,
  },
  text: {
    top: 347,
    left: 329,
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 19,
    width: 48,
    height: 18,
    color: Color.white,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  lineView: {
    top: 532,
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 0.5,
    width: 339,
    height: 1,
    borderStyle: "solid",
    left: 35,
    position: "absolute",
  },
  finishCook: {
    left: 219,
    fontSize: FontSize.size_3xs_8,
    lineHeight: 11,
    fontFamily: FontFamily.sFProDisplayBold,
    width: 104,
    height: 21,
    top: 798,
    color: Color.white,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  icons8Enlarge2: {
    top: 107,
    left: 353,
    width: 28,
    height: 29,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  icons8PauseButton2: {
    top: 341,
    left: 31,
    width: 27,
    height: 27,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkgray_100,
    width: 253,
    height: 3,
    left: 69,
    top: 354,
  },
  groupChild7: {
    width: 199,
    height: 3,
    left: 69,
    top: 354,
    backgroundColor: Color.white,
  },
  text1: {
    left: 53,
    position: "absolute",
  },
  text2: {
    left: 103,
    position: "absolute",
  },
  text3: {
    height: 15,
    width: 15,
    lineHeight: 12,
    fontSize: FontSize.textCaptionSemiBold_size,
    top: 458,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  text4: {
    left: 208,
    position: "absolute",
  },
  text5: {
    left: 257,
    position: "absolute",
  },
  text6: {
    left: 308,
    position: "absolute",
  },
  text7: {
    left: 357,
    position: "absolute",
  },
  groupChild9: {
    backgroundColor: Color.colorSilver_100,
    width: 253,
    height: 3,
    left: 69,
    top: 354,
  },
  rectangleParent: {
    height: 903,
  },
  vectorIcon: {
    top: 801,
    left: 337,
    width: 20,
    height: 14,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupParent: {
    left: -6,
    width: 399,
    top: 0,
    position: "absolute",
    height: 903,
  },
  backChild: {
    borderColor: Color.border,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    height: 39,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  iconChevronleft: {
    marginTop: 105,
  },
  back: {
    height: 240,
    width: 39,
    left: 24,
    top: 50,
    position: "absolute",
  },
  backItem: {
    borderColor: Color.globalBlack,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    height: 39,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  iconChevronleft1: {
    marginTop: -7.5,
  },
  back1: {
    height: 39,
    left: 24,
    top: 50,
  },
  next: {
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
  },
  nextWrapper: {
    backgroundColor: Color.colorGray_100,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
  next1: {
    color: Color.gray6,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  nextContainer: {
    width: 102,
  },
  view: {
    width: 326,
    justifyContent: "space-between",
    flexDirection: "row",
    top: 798,
    left: 35,
    position: "absolute",
  },
  backgroundIcon: {
    height: "64.61%",
    width: "102.29%",
    top: "35.44%",
    right: "-0.76%",
    bottom: "-0.04%",
    left: "-1.53%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  yourRequestHas: {
    top: 525,
    left: 29,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 336,
    textAlign: "center",
    color: Color.globalBlack,
    fontWeight: "700",
    position: "absolute",
  },
  youWillReceive: {
    top: 650,
    left: 68,
    color: Color.baseShade70,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 257,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  checked13: {
    top: 424,
    width: 80,
    height: 79,
  },
  nextFrame: {
    top: 808,
    left: 256,
    width: 115,
    position: "absolute",
  },
  pmBooking: {
    left: -7,
    width: 402,
    backgroundColor: Color.gradientBluePrimary,
    top: 0,
    overflow: "hidden",
    height: 903,
    borderRadius: Border.br_11xl,
  },
  nutrition8: {
    flex: 1,
    width: "100%",
    height: 903,
    borderRadius: Border.br_11xl,
  },
});

export default Nutrition7;
