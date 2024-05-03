import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PPDTestResources = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ppdTestResources}>
      <View style={[styles.instanceParent, styles.instanceParentPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-9.png")}
        />
        <Text style={styles.searchResources}>Search Resources</Text>
      </View>
      <View
        style={[
          styles.epdsPostpartumDepressionTWrapper,
          styles.backChildBorder1,
        ]}
      >
        <Text style={styles.epdsPostpartum}>{`EPDS : Postpartum Depression Test 
- Resource`}</Text>
      </View>
      <View style={[styles.ppdTestResourcesInner, styles.cardInnerLayout]}>
        <View style={[styles.cardDisabledParent, styles.cardInnerLayout]}>
          <View style={[styles.cardDisabled, styles.cardInnerLayout]}>
            <View style={[styles.card1bgParent, styles.card1bgPosition]}>
              <LinearGradient
                style={[styles.card1bg, styles.card1bgPosition]}
                locations={[0.76, 0.95]}
                colors={["rgba(104, 47, 124, 0.4)", "rgba(0, 0, 0, 0.5)"]}
              />
              <Image
                style={[styles.card1Mask, styles.card1MaskLayout]}
                contentFit="cover"
                source={require("../assets/card-1-mask.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>
                Back-End Development
              </Text>
            </View>
            <Text style={[styles.currentBalance, styles.textPosition]}>
              October 24, 2020
            </Text>
            <View style={styles.group}>
              <View style={styles.group1}>
                <Text style={[styles.project2, styles.textTypo2]}>
                  Project 2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.cardDisabledChild, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/group-36.png")}
            />
          </View>
          <View style={[styles.contactNumberParent, styles.groupChildLayout4]}>
            <Text style={[styles.contactNumber, styles.groupInnerLayout]}>
              Contact Number :
            </Text>
            <Text style={styles.website}>Website :</Text>
            <Text style={[styles.text1, styles.textTypo1]}>0112 675 4490</Text>
            <Text
              style={[
                styles.httpwwwhealthgovuk,
                styles.httpwwwhealthgovukPosition,
              ]}
            >
              http://www.health.gov.uk/
            </Text>
            <Text style={styles.hospitalLayout}>
              <Text style={styles.hospital11}>Hospital 1</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/vector-5.png")}
            />
            <View style={[styles.groupItem, styles.groupItemLayout1]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-10.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.ppdTestResourcesChild, styles.cardInnerLayout]}>
        <View style={[styles.cardDisabledParent, styles.cardInnerLayout]}>
          <View style={[styles.cardDisabled, styles.cardInnerLayout]}>
            <View style={[styles.card1bgParent, styles.card1bgPosition]}>
              <LinearGradient
                style={[styles.card1bg, styles.card1bgPosition]}
                locations={[0.76, 0.95]}
                colors={["rgba(104, 47, 124, 0.4)", "rgba(0, 0, 0, 0.5)"]}
              />
              <Image
                style={[styles.card1Mask, styles.card1MaskLayout]}
                contentFit="cover"
                source={require("../assets/card-1-mask1.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>
                Back-End Development
              </Text>
            </View>
            <Text style={[styles.currentBalance, styles.textPosition]}>
              October 24, 2020
            </Text>
            <View style={styles.group}>
              <View style={styles.group1}>
                <Text style={[styles.project2, styles.textTypo2]}>
                  Project 2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.cardDisabledChild, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/group-361.png")}
            />
          </View>
          <View style={[styles.contactNumberParent, styles.groupChildLayout4]}>
            <Text style={[styles.contactNumber, styles.groupInnerLayout]}>
              Contact Number :
            </Text>
            <Text style={styles.website}>Website :</Text>
            <Text style={[styles.text1, styles.textTypo1]}>0115 430 0000</Text>
            <Text
              style={[
                styles.httpwwwhealthgovuk1,
                styles.httpwwwhealthgovukPosition,
              ]}
            >
              http://www.health.gov.uk/
            </Text>
            <Text style={[styles.hospital3, styles.hospitalLayout]}>
              Hospital 3
            </Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/vector-51.png")}
            />
            <View style={[styles.rectangleView, styles.groupItemLayout1]} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-101.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.cardInnerLayout]}>
        <View style={[styles.cardDisabledParent, styles.cardInnerLayout]}>
          <View style={[styles.cardDisabled, styles.cardInnerLayout]}>
            <View style={[styles.card1bgParent, styles.card1bgPosition]}>
              <LinearGradient
                style={[styles.card1bg, styles.card1bgPosition]}
                locations={[0.76, 0.95]}
                colors={["rgba(104, 47, 124, 0.4)", "rgba(0, 0, 0, 0.5)"]}
              />
              <Image
                style={[styles.card1Mask, styles.card1MaskLayout]}
                contentFit="cover"
                source={require("../assets/card-1-mask.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>
                Back-End Development
              </Text>
            </View>
            <Text style={[styles.currentBalance, styles.textPosition]}>
              October 24, 2020
            </Text>
            <View style={styles.group}>
              <View style={styles.group1}>
                <Text style={[styles.project2, styles.textTypo2]}>
                  Project 2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.cardDisabledChild, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/group-36.png")}
            />
          </View>
          <View style={[styles.contactNumberParent, styles.groupChildLayout4]}>
            <Text style={[styles.contactNumber, styles.groupInnerLayout]}>
              Contact Number :
            </Text>
            <Text style={styles.website}>Website :</Text>
            <Text style={[styles.text1, styles.textTypo1]}>0115 430 0000</Text>
            <Text
              style={[
                styles.httpwwwhealthgovuk1,
                styles.httpwwwhealthgovukPosition,
              ]}
            >
              http://www.health.gov.uk/
            </Text>
            <Text
              style={[styles.hospital3, styles.hospitalLayout]}
            >{`Hospital 4 `}</Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/vector-5.png")}
            />
            <View style={[styles.groupItem, styles.groupItemLayout1]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-10.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.ppdTestResourcesInner1, styles.cardInnerLayout]}>
        <View style={[styles.cardDisabledParent, styles.cardInnerLayout]}>
          <View style={[styles.cardDisabled, styles.cardInnerLayout]}>
            <View style={[styles.card1bgParent, styles.card1bgPosition]}>
              <LinearGradient
                style={[styles.card1bg, styles.card1bgPosition]}
                locations={[0.76, 0.95]}
                colors={["rgba(104, 47, 124, 0.4)", "rgba(0, 0, 0, 0.5)"]}
              />
              <Image
                style={[styles.card1Mask, styles.card1MaskLayout]}
                contentFit="cover"
                source={require("../assets/card-1-mask2.png")}
              />
              <Text style={[styles.text, styles.textPosition]}>
                Back-End Development
              </Text>
            </View>
            <Text style={[styles.currentBalance, styles.textPosition]}>
              October 24, 2020
            </Text>
            <View style={styles.group}>
              <View style={styles.group1}>
                <Text style={[styles.project2, styles.textTypo2]}>
                  Project 2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.cardDisabledChild, styles.textPosition]}
              contentFit="cover"
              source={require("../assets/group-362.png")}
            />
          </View>
          <View style={[styles.contactNumberParent, styles.groupChildLayout4]}>
            <Text style={[styles.contactNumber, styles.groupInnerLayout]}>
              Contact Number :
            </Text>
            <Text style={styles.website}>Website :</Text>
            <Text style={[styles.text1, styles.textTypo1]}>0114 520 9990</Text>
            <Text
              style={[
                styles.httpwwwhealthgovuk3,
                styles.httpwwwhealthgovukPosition,
              ]}
            >
              http://www.health.gov.uk/
            </Text>
            <Text style={[styles.hospital3, styles.hospitalLayout]}>
              Hospital 2
            </Text>
            <Image
              style={[styles.groupChild, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/vector-52.png")}
            />
            <View style={[styles.rectangleView, styles.groupItemLayout1]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-10.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.ppdTestResourcesItem}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <View style={[styles.wrapper, styles.textLayout2]}>
          <Text style={[styles.text9, styles.textLayout2]}>1</Text>
        </View>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.text10, styles.textLayout2]}>2</Text>
      </View>
      <View style={[styles.ellipseContainer, styles.ellipseLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.text10, styles.textLayout2]}>3</Text>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout8]}
        onPress={() => navigation.navigate("PPDTest")}
      >
        <View style={[styles.backChild, styles.backLayout8]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  instanceParentPosition: {
    overflow: "hidden",
    left: 24,
    position: "absolute",
  },
  backChildBorder1: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  cardInnerLayout: {
    height: 105,
    width: 326,
    position: "absolute",
  },
  card1bgPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  card1MaskLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  textPosition: {
    display: "none",
    left: "10.86%",
    position: "absolute",
  },
  textTypo2: {
    color: Color.white,
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
  },
  groupChildLayout4: {
    width: 303,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 13,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
  },
  httpwwwhealthgovukPosition: {
    left: 74,
    top: 62,
    height: 13,
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  groupItemLayout1: {
    width: 15,
    borderColor: Color.globalBlack,
    borderRadius: Border.br_9xs,
    left: 286,
    height: 16,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "95.32%",
    right: "1.91%",
    width: "2.77%",
    height: "8.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  hospitalLayout: {
    height: 16,
    width: 199,
    lineHeight: 14,
    fontSize: FontSize.body1Medium_size,
    left: 2,
    top: 0,
    color: Color.globalBlack,
    textAlign: "left",
    position: "absolute",
  },
  ellipseLayout: {
    height: 30,
    width: 32,
    position: "absolute",
  },
  textLayout2: {
    width: 8,
    height: 11,
    position: "absolute",
  },
  backLayout8: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  frameChild: {
    top: 8,
    left: 16,
    width: 24,
    height: 24,
    position: "absolute",
  },
  searchResources: {
    top: 12,
    left: 48,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    color: Color.gray3,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  instanceParent: {
    top: 193,
    backgroundColor: Color.white,
    width: 345,
    height: 40,
    borderRadius: Border.br_xl,
  },
  epdsPostpartum: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
    textAlign: "left",
  },
  epdsPostpartumDepressionTWrapper: {
    top: 103,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    width: 353,
    height: 66,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    overflow: "hidden",
    left: 24,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  card1bg: {
    height: "99.81%",
    bottom: "0.19%",
    backgroundColor: Color.gradientBluePrimary,
    right: "0%",
    left: "0%",
    top: "0%",
    borderRadius: Border.br_xl,
  },
  card1Mask: {
    height: "99.91%",
    bottom: "0.09%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    right: "0%",
  },
  text: {
    width: "79.75%",
    top: "37.16%",
    fontSize: FontSize.size_14xl,
    lineHeight: 43,
    color: Color.white,
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    fontWeight: "600",
  },
  card1bgParent: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  currentBalance: {
    top: "80.19%",
    fontSize: FontSize.h5Semibold_size,
    fontWeight: "300",
    color: Color.white,
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
  },
  project2: {
    fontSize: FontSize.size_3xl_4,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    color: Color.white,
    height: "100%",
  },
  group1: {
    width: 194,
    height: 11,
    display: "none",
    position: "absolute",
  },
  group: {
    top: "13.84%",
    left: "31.07%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  cardDisabledChild: {
    height: "15.07%",
    width: "14.94%",
    top: "10.9%",
    right: "74.2%",
    bottom: "74.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardDisabled: {
    opacity: 0.5,
    left: 0,
    top: 0,
  },
  contactNumber: {
    width: 110,
    left: 2,
    height: 13,
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    top: 36,
    color: Color.globalBlack,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
  },
  website: {
    top: 62,
    height: 13,
    width: 110,
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    left: 2,
    color: Color.globalBlack,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  text1: {
    left: 117,
    width: 124,
    height: 14,
    top: 36,
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    position: "absolute",
  },
  httpwwwhealthgovuk: {
    width: 176,
  },
  hospital11: {
    fontFamily: FontFamily.h3Regular,
    fontWeight: "700",
  },
  text2: {
    fontWeight: "600",
    fontFamily: FontFamily.nunito,
  },
  groupChild: {
    top: 24,
    maxHeight: "100%",
    left: 0,
  },
  groupItem: {
    top: 1,
  },
  vectorIcon: {
    top: "6.8%",
    bottom: "84.4%",
  },
  groupInner: {
    left: 288,
    width: 13,
    top: 1,
  },
  contactNumberParent: {
    top: 10,
    height: 75,
    left: 12,
    width: 303,
  },
  cardDisabledParent: {
    left: 0,
    top: 0,
  },
  ppdTestResourcesInner: {
    top: 273,
    left: 51,
    width: 326,
  },
  httpwwwhealthgovuk1: {
    width: 215,
  },
  hospital3: {
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
  },
  rectangleView: {
    top: 0,
  },
  vectorIcon1: {
    top: "6.67%",
    bottom: "84.53%",
  },
  ppdTestResourcesChild: {
    top: 531,
    left: 51,
    width: 326,
  },
  groupView: {
    top: 660,
    left: 51,
    width: 326,
  },
  httpwwwhealthgovuk3: {
    width: 212,
  },
  ppdTestResourcesInner1: {
    top: 401,
    left: 51,
    width: 326,
  },
  ppdTestResourcesItem: {
    top: 257,
    width: 3,
    height: 508,
    left: 24,
    position: "absolute",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
  },
  text9: {
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    left: 0,
    top: 0,
    fontWeight: "700",
  },
  wrapper: {
    top: 9,
    width: 8,
    left: 12,
  },
  ellipseParent: {
    top: 312,
    left: 7,
    width: 32,
  },
  text10: {
    top: 9,
    width: 8,
    left: 12,
    lineHeight: 12,
    fontSize: FontSize.caption1Regular12_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
  },
  ellipseGroup: {
    top: 443,
    left: 7,
    width: 32,
  },
  ellipseContainer: {
    top: 568,
    left: 7,
    width: 32,
  },
  backChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
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
    top: 40,
    left: 27,
  },
  ppdTestResources: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default PPDTestResources;
