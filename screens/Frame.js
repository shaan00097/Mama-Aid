import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.nutrition6Child, styles.nutrition6Layout]} />
            <View style={[styles.nutrition6Item, styles.nutrition6Layout]} />
            <Image
              style={[
                styles.edgarCastrejon1spu0ktEjgUnIcon,
                styles.icons8Star2Layout,
              ]}
              contentFit="cover"
              source={require("../assets/edgarcastrejon1spu0ktejgunsplash-7.png")}
            />
            <View style={[styles.nutrition6Inner, styles.frameWrapperLayout]} />
            <View style={[styles.rectangleView, styles.nutrition6Layout]} />
            <Text style={[styles.bakedBananaChip, styles.ingredientsLayout]}>
              Baked Banana Chip Encrusted French Toast
            </Text>
            <Image
              style={[styles.icons8Star2, styles.icons8Star2Layout]}
              contentFit="cover"
              source={require("../assets/icons8star-2.png")}
            />
            <Text style={styles.dessert15}>Dessert / 15 mins</Text>
            <View style={[styles.fatParent, styles.parentLayout]}>
              <Text style={[styles.fat, styles.fatPosition]}>{`Fat `}</Text>
              <Text style={[styles.g, styles.gTypo]}>42.55 g</Text>
            </View>
            <View style={[styles.carbsParent, styles.parentLayout]}>
              <Text style={[styles.carbs, styles.fatPosition]}>{`Carbs `}</Text>
              <Text style={[styles.g, styles.gTypo]}>203.11g</Text>
            </View>
            <View style={[styles.proteinParent, styles.parentLayout]}>
              <Text style={[styles.protein, styles.fatPosition]}>Protein</Text>
              <Text style={[styles.g, styles.gTypo]}>21.23 g</Text>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.to8Inch2CmThick}>
                6 to 8 (¾-inch/2-cm-thick) slices leftover banana bread
              </Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField1, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>
                1 cup (65 grams) banana chips, crushed
              </Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField2, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>1 large egg</Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField3, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>
                2 tablespoons BPA-free coconut milk
              </Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField4, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>
                1 teaspoon vanilla extract
              </Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField5, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>
                ⅛ teaspoon ground cinnamon
              </Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <View style={[styles.inputField6, styles.inputBorder]}>
              <Text style={styles.to8Inch2CmThick}>pinch of salt</Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
            </View>
            <Text style={[styles.ingredients, styles.gTypo]}>Ingredients</Text>
            <View style={styles.back}>
              <View style={[styles.backChild, styles.backLayout]} />
              <Image
                style={[styles.iconChevronleft, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon--chevronleft3.png")}
              />
            </View>
            <Pressable
              style={[styles.buttonPrimary, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Nutrition7")}
            >
              <Text
                style={[styles.button, styles.buttonTypo]}
              >{`Request for verification `}</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonPrimary1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Frame1")}
            >
              <Pressable onPress={() => navigation.navigate("Nutrition8")}>
                <Text style={[styles.startCooking, styles.buttonTypo]}>
                  Start Cooking
                </Text>
              </Pressable>
            </Pressable>
            <Pressable
              style={[styles.back1, styles.backLayout]}
              onPress={() => navigation.navigate("Nutrition2")}
            >
              <View style={[styles.backChild, styles.backLayout]} />
              <Image
                style={[styles.iconChevronleft1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon--chevronleft.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperLayout: {
    width: 393,
    left: 0,
  },
  nutrition6Layout: {
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    width: 393,
    left: 0,
    position: "absolute",
  },
  icons8Star2Layout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  ingredientsLayout: {
    height: 31,
    color: Color.globalBlack,
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  parentLayout: {
    height: 49,
    width: 90,
    top: 443,
    position: "absolute",
  },
  fatPosition: {
    color: Color.grayGray1,
    lineHeight: 13,
    left: "50%",
    top: "50%",
    marginTop: 11.5,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  gTypo: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  inputBorder: {
    left: 25,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
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
  buttonFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_133xl,
    justifyContent: "center",
    height: 60,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  buttonTypo: {
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
  },
  nutrition6Child: {
    height: 852,
    top: 0,
  },
  nutrition6Item: {
    top: 0,
    height: 1247,
  },
  edgarCastrejon1spu0ktEjgUnIcon: {
    height: 384,
    width: 393,
    left: 0,
    top: 0,
  },
  nutrition6Inner: {
    top: 434,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 75,
    position: "absolute",
    left: 0,
  },
  rectangleView: {
    top: 334,
    height: 50,
  },
  bakedBananaChip: {
    top: 343,
    left: 88,
    width: 218,
    textAlign: "center",
    height: 31,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  icons8Star2: {
    top: 349,
    left: 353,
    width: 25,
    height: 25,
  },
  dessert15: {
    top: 396,
    left: 120,
    lineHeight: 19,
    color: Color.colorDimgray_100,
    width: 154,
    height: 15,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  fat: {
    marginLeft: -8,
  },
  g: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.colorGray_300,
    fontSize: FontSize.h5Semibold_size,
    fontWeight: "700",
    width: 90,
    left: 0,
    top: 0,
  },
  fatParent: {
    left: 276,
  },
  carbs: {
    marginLeft: -18,
  },
  carbsParent: {
    left: 160,
  },
  protein: {
    marginLeft: -22,
  },
  proteinParent: {
    left: 43,
  },
  to8Inch2CmThick: {
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
    display: "none",
    marginLeft: 10,
  },
  inputField: {
    top: 550,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    left: 28,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    position: "absolute",
  },
  inputField1: {
    top: 635,
  },
  inputField2: {
    top: 702,
  },
  inputField3: {
    top: 769,
  },
  inputField4: {
    top: 836,
  },
  inputField5: {
    top: 903,
  },
  inputField6: {
    top: 970,
  },
  ingredients: {
    top: 519,
    left: -65,
    width: 262,
    height: 31,
    color: Color.globalBlack,
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  backChild: {
    height: 39,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iconChevronleft: {
    marginTop: 25,
  },
  back: {
    height: 80,
    width: 39,
    top: 44,
    left: 28,
    position: "absolute",
  },
  button: {
    color: Color.globalBlack,
  },
  buttonPrimary: {
    top: 1067,
    backgroundColor: Color.border,
  },
  startCooking: {
    color: Color.white,
  },
  buttonPrimary1: {
    top: 1154,
    backgroundColor: Color.main,
  },
  iconChevronleft1: {
    marginTop: -7.5,
  },
  back1: {
    left: 29,
    top: 44,
    height: 39,
  },
  frameWrapper: {
    top: 0,
    position: "absolute",
    left: 0,
    height: 1247,
  },
  groupParent: {
    width: "100%",
    height: 1247,
    flex: 1,
  },
});

export default Frame;
