import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GroupComponent1 from "../components/GroupComponent1";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const InformationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.informationPage}>
      <Image
        style={[styles.headphonesIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/headphones.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={styles.informationPageChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Text style={styles.postpartumArticles}>Postpartum Articles</Text>
      <GroupComponent1
        rectangle9={require("../assets/rectangle-9.png")}
        bMIScalingInPostpartum="BMI Scaling in Postpartum "
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("InformationPage1")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Text style={[styles.postpartumDepression, styles.adamSherPosition]}>
          Postpartum Depression
        </Text>
        <Text style={[styles.adamSher, styles.adamSherPosition]}>
          Adam sher
        </Text>
      </Pressable>
      <GroupComponent1
        rectangle9={require("../assets/rectangle-92.png")}
        bMIScalingInPostpartum="Tips in Postpartum "
        propTop={459}
        propLeft={15}
        propHeight={110}
      />
      <GroupComponent1
        rectangle9={require("../assets/rectangle-93.png")}
        bMIScalingInPostpartum="Postpartum Nutriton "
        propTop={596}
        propLeft={13}
        propHeight={115}
      />
      <View style={styles.tabBar}>
        <Pressable
          style={[styles.tab, styles.tabFlexBox]}
          onPress={() => navigation.navigate("DashboardPM")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
          <Text style={styles.home}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("PPDTest")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion.png")}
          />
          <Text style={styles.home}>PPD Screening</Text>
        </Pressable>
        <Pressable
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("InformationPage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/micircleinformation1.png")}
          />
          <Text style={styles.home}>Information</Text>
        </Pressable>
        <Pressable
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("ProfilePM")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconoirprofilecircle.png")}
          />
          <Text style={styles.home}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  adamSherPosition: {
    left: 127,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headphonesIcon: {
    left: 90,
    top: 797,
    width: 24,
    position: "absolute",
  },
  settingsIcon: {
    left: 280,
    top: 797,
    width: 24,
    position: "absolute",
  },
  informationPageChild: {
    top: 35,
    left: 313,
    width: 46,
    height: 44,
    position: "absolute",
  },
  postpartumArticles: {
    top: 120,
    left: 32,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 341,
    textAlign: "left",
    color: Color.globalBlack,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    width: 116,
    height: 115,
    position: "absolute",
  },
  postpartumDepression: {
    top: 31,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    width: 217,
    height: 61,
    fontWeight: "700",
    left: 127,
  },
  adamSher: {
    top: 75,
    fontSize: FontSize.caption1Regular12_size,
    width: 237,
    height: 50,
    fontFamily: FontFamily.caption2Regular11,
  },
  rectangleParent: {
    top: 322,
    left: 13,
    width: 364,
    height: 125,
    position: "absolute",
  },
  home: {
    fontSize: FontSize.caption2Regular11_size,
    letterSpacing: 0,
    lineHeight: 13,
    color: Color.grayGray1,
    textAlign: "center",
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
  },
  tab: {
    backgroundColor: Color.colorGray_100,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
  },
  tabBar: {
    top: 748,
    left: 19,
    width: 360,
    flexDirection: "row",
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  informationPage: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default InformationPage;
