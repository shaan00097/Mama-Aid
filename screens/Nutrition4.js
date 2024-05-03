import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Nutrition4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutrition8}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.groupBg]} />
          <LinearGradient
            style={[styles.edgarCastrejon1spu0ktEjgUn, styles.groupItemBg]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0)", "#000"]}
          />
          <Image
            style={[
              styles.edgarCastrejon1spu0ktEjgUnIcon,
              styles.rectangleParentPosition,
            ]}
            contentFit="cover"
            source={require("../assets/edgarcastrejon1spu0ktejgunsplash-91.png")}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupPosition]}
            locations={[0, 1]}
            colors={["#000", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Image
            style={[styles.rectangleIcon, styles.icons8Position]}
            contentFit="cover"
            source={require("../assets/rectangle-116.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-25.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-261.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-271.png")}
          />
          <Image
            style={[styles.groupChild6, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-291.png")}
          />
          <Text style={[styles.instructions, styles.finishCookTypo]}>
            Instructions
          </Text>
          <Text style={[styles.whiskTogetherThe, styles.dipEachSliceLayout]}>
            Whisk together the egg, coconut milk, vanilla, cinnamon, and salt in
            another shallow bowl.
          </Text>
          <Text style={[styles.dipEachSlice, styles.dipEachSliceLayout]}>
            Dip each slice of banana bread into the egg mixture, coat on both
            sides, then do the same in the crushed banana chips, making sure
            each slice is covered with banana chips. Place on the prepared
            baking sheet and repeat with the rest of the slices.
          </Text>
          <Text style={[styles.text, styles.textClr]}>3:21</Text>
          <View style={styles.lineView} />
          <Text style={[styles.finishCook, styles.textClr]}>Finish cook</Text>
          <Image
            style={[styles.icons8Enlarge2, styles.icons8Position]}
            contentFit="cover"
            source={require("../assets/icons8enlarge-21.png")}
          />
          <Image
            style={[styles.icons8PauseButton2, styles.icons8Position]}
            contentFit="cover"
            source={require("../assets/icons8pause-button-2.png")}
          />
          <View style={[styles.rectangleView, styles.groupChildPosition]} />
          <View style={[styles.groupChild7, styles.groupChildPosition]} />
          <Text style={[styles.text1, styles.textLayout]}>1</Text>
          <Text style={[styles.text2, styles.textLayout]}>2</Text>
          <Text style={[styles.text3, styles.textLayout]}>3</Text>
          <Text style={[styles.text4, styles.textLayout]}>4</Text>
          <Text style={[styles.text5, styles.textLayout]}>5</Text>
          <Text style={[styles.text6, styles.textLayout]}>6</Text>
          <Text style={[styles.text7, styles.textLayout]}>7</Text>
          <View style={styles.lineView} />
          <Image
            style={[styles.icons8Enlarge2, styles.icons8Position]}
            contentFit="cover"
            source={require("../assets/icons8enlarge-21.png")}
          />
          <Image
            style={[styles.icons8PauseButton2, styles.icons8Position]}
            contentFit="cover"
            source={require("../assets/icons8pause-button-2.png")}
          />
          <View style={[styles.groupChild9, styles.groupChildPosition]} />
          <View style={[styles.groupChild7, styles.groupChildPosition]} />
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-29.png")}
        />
      </View>
      <View style={styles.back}>
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={[styles.iconChevronleft, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft3.png")}
        />
      </View>
      <View style={styles.back}>
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={[styles.iconChevronleft, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft3.png")}
        />
      </View>
      <Pressable
        style={[styles.back2, styles.backLayout]}
        onPress={() => navigation.navigate("Nutrition3")}
      >
        <View style={[styles.backInner, styles.backLayout]} />
        <Image
          style={[styles.iconChevronleft2, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={styles.view}>
        <Pressable
          style={[styles.nextWrapper, styles.nextShadowBox]}
          onPress={() => navigation.navigate("Nutrition8")}
        >
          <Text style={[styles.next, styles.nextTypo]}>Previous</Text>
        </Pressable>
        <View style={[styles.nextContainer, styles.nextShadowBox]}>
          <Pressable onPress={() => navigation.navigate("Nutrition3")}>
            <Text style={[styles.finish, styles.nextTypo]}>Finish</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    left: 0,
    width: 398,
    top: 0,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.white,
    left: 5,
  },
  groupItemBg: {
    backgroundColor: Color.gradientBluePrimary,
    width: 390,
    left: 8,
  },
  groupPosition: {
    top: 381,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  icons8Position: {
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChildLayout1: {
    height: 30,
    width: 32,
    top: 450,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupChildLayout: {
    top: 451,
    height: 30,
    width: 32,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  finishCookTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  dipEachSliceLayout: {
    height: 98,
    width: 336,
    color: Color.colorGray_400,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChildPosition: {
    height: 3,
    left: 68,
    top: 354,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  textLayout: {
    height: 15,
    width: 15,
    lineHeight: 12,
    fontSize: FontSize.textCaptionSemiBold_size,
    top: 458,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iconPosition: {
    width: 9,
    right: 14,
    top: "50%",
    height: 15,
    position: "absolute",
  },
  nextShadowBox: {
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
  nextTypo: {
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_base,
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
    left: 8,
  },
  groupInner: {
    width: 392,
    height: 487,
    backgroundColor: Color.white,
    left: 5,
  },
  rectangleIcon: {
    top: 785,
    left: 201,
    width: 172,
    height: 46,
  },
  ellipseIcon: {
    left: 93,
  },
  groupChild1: {
    left: 44,
  },
  groupChild2: {
    left: 146,
  },
  groupChild3: {
    left: 197,
  },
  groupChild4: {
    left: 246,
  },
  groupChild5: {
    left: 298,
  },
  groupChild6: {
    left: 348,
  },
  instructions: {
    top: 409,
    left: 74,
    width: 262,
    height: 31,
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  whiskTogetherThe: {
    top: 548,
    left: 40,
  },
  dipEachSlice: {
    top: 625,
    left: 37,
  },
  text: {
    top: 347,
    left: 328,
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 19,
    width: 48,
    height: 18,
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
    fontFamily: FontFamily.h3Regular,
  },
  lineView: {
    top: 532,
    left: 34,
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 0.5,
    width: 339,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  finishCook: {
    top: 798,
    left: 218,
    fontSize: FontSize.size_3xs_8,
    lineHeight: 11,
    fontFamily: FontFamily.sFProDisplayBold,
    width: 104,
    height: 21,
    textAlign: "center",
    fontWeight: "700",
    color: Color.white,
    letterSpacing: 0,
  },
  icons8Enlarge2: {
    top: 107,
    left: 352,
    width: 28,
    height: 29,
  },
  icons8PauseButton2: {
    top: 341,
    left: 30,
    width: 27,
    height: 27,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkgray_100,
    width: 253,
    height: 3,
    left: 68,
    top: 354,
  },
  groupChild7: {
    width: 199,
    height: 3,
    left: 68,
    top: 354,
    backgroundColor: Color.white,
  },
  text1: {
    left: 52,
  },
  text2: {
    left: 102,
  },
  text3: {
    left: 156,
  },
  text4: {
    left: 207,
  },
  text5: {
    left: 256,
  },
  text6: {
    left: 307,
  },
  text7: {
    left: 356,
  },
  groupChild9: {
    backgroundColor: Color.colorSilver_100,
    width: 253,
    height: 3,
    left: 68,
    top: 354,
  },
  rectangleParent: {
    height: 903,
  },
  vectorIcon: {
    left: 336,
    width: 20,
    height: 14,
    top: 801,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  groupParent: {
    left: -5,
    width: 398,
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
    left: 32,
    top: 50,
    position: "absolute",
  },
  backInner: {
    borderColor: Color.globalBlack,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    height: 39,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  iconChevronleft2: {
    marginTop: -7.5,
  },
  back2: {
    height: 39,
    left: 32,
    top: 50,
  },
  next: {
    color: Color.globalBlack,
  },
  nextWrapper: {
    backgroundColor: Color.colorGray_100,
  },
  finish: {
    color: Color.gray6,
  },
  nextContainer: {
    backgroundColor: Color.main,
    width: 102,
  },
  view: {
    left: 29,
    width: 326,
    justifyContent: "space-between",
    flexDirection: "row",
    top: 801,
    position: "absolute",
  },
  nutrition8: {
    flex: 1,
    width: "100%",
    height: 903,
    borderRadius: Border.br_11xl,
  },
});

export default Nutrition4;
