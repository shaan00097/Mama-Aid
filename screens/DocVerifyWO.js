import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const DocVerifyWO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.docVerifyWo1}>
      <Image
        style={styles.docVerifyWo1Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("DashboardDoc")}
      >
        <View style={styles.backChild} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.carddoctorInfo, styles.carddoctorLayout]}
        onPress={() => navigation.navigate("DocVerifyWO1")}
      >
        <View style={styles.backgroundShadowBox} />
        <View style={styles.divider} />
        <Text style={styles.blakeGordon}>John Terry</Text>
        <Text style={styles.leadVisualDesigner}>+44 75 1314 8036</Text>
        <Text style={styles.leadVisualDesigner1}>Kegel Exercise Approval</Text>
        <View style={styles.leadVisualDesignerParent}>
          <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
            1000+ Patients
          </Text>
          <Image
            style={[styles.groupChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/group-31421.png")}
          />
        </View>
        <View
          style={[
            styles.leadVisualDesignerGroup,
            styles.carddoctorInfoChildPosition,
          ]}
        >
          <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>4.5</Text>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <Image
              style={[styles.starIcon, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/star1.png")}
            />
          </View>
        </View>
        <Image
          style={[
            styles.carddoctorInfoChild,
            styles.carddoctorInfoChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-20812.png")}
        />
        <Image
          style={[styles.carddoctorInfoItem, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7531.png")}
        />
      </Pressable>
      <View style={[styles.carddoctorInfo1, styles.carddoctorLayout]}>
        <View style={styles.backgroundShadowBox} />
        <View style={styles.divider} />
        <Text style={styles.blakeGordon}>John Terry</Text>
        <Text style={styles.leadVisualDesigner}>+44 75 1314 8036</Text>
        <Text style={styles.leadVisualDesigner1}>Yoga Exercise Approval</Text>
        <View style={styles.leadVisualDesignerParent}>
          <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
            1000+ Patients
          </Text>
          <Image
            style={[styles.groupChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/group-31421.png")}
          />
        </View>
        <View
          style={[
            styles.leadVisualDesignerGroup,
            styles.carddoctorInfoChildPosition,
          ]}
        >
          <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>4.5</Text>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <Image
              style={[styles.starIcon, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/star1.png")}
            />
          </View>
        </View>
        <Image
          style={[
            styles.carddoctorInfoChild,
            styles.carddoctorInfoChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-20812.png")}
        />
        <Image
          style={[styles.carddoctorInfoItem, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7531.png")}
        />
      </View>
      <View style={[styles.carddoctorInfo2, styles.carddoctorLayout]}>
        <View style={styles.backgroundShadowBox} />
        <View style={styles.divider} />
        <Text style={styles.blakeGordon}>John Terry</Text>
        <Text style={styles.leadVisualDesigner}>+44 75 1314 8036</Text>
        <Text style={styles.leadVisualDesigner1}> Medication Approval</Text>
        <View style={styles.leadVisualDesignerParent}>
          <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
            1000+ Patients
          </Text>
          <Image
            style={[styles.groupChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/group-31421.png")}
          />
        </View>
        <View
          style={[
            styles.leadVisualDesignerGroup,
            styles.carddoctorInfoChildPosition,
          ]}
        >
          <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>4.5</Text>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <Image
              style={[styles.starIcon, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/star1.png")}
            />
          </View>
        </View>
        <Image
          style={[
            styles.carddoctorInfoChild,
            styles.carddoctorInfoChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-20812.png")}
        />
        <Image
          style={[styles.carddoctorInfoItem, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7531.png")}
        />
      </View>
      <Text style={styles.patientProfiles}>Patient Profiles</Text>
      <Text
        style={[styles.description, styles.descriptionLayout]}
      >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
      <Text
        style={[styles.description1, styles.descriptionLayout]}
      >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
      <Text
        style={[styles.description2, styles.descriptionLayout]}
      >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
      <View style={styles.tabBar}>
        <Pressable
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("DashboardDoc")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home2.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <View style={[styles.tab1, styles.tabFlexBox]}>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>
            PPD Screening
          </Text>
        </View>
        <Pressable
          style={[styles.tab1, styles.tabFlexBox]}
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
          style={styles.tabFlexBox}
          onPress={() => navigation.navigate("ProfileDoc")}
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
  carddoctorLayout: {
    width: "96.69%",
    height: "20.19%",
    position: "absolute",
  },
  leadTypo: {
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.size_smi_3,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.text01,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carddoctorInfoChildPosition: {
    left: "5.45%",
    position: "absolute",
  },
  groupItemPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  descriptionLayout: {
    lineHeight: 21,
    fontSize: FontSize.bodyMedium_size,
    width: "88.55%",
    height: "7.98%",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    position: "absolute",
  },
  homeTypo: {
    marginTop: 7,
    textAlign: "center",
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.caption2Regular11_size,
  },
  tabFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  docVerifyWo1Child: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    height: 39,
    width: 39,
    position: "absolute",
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
    top: 49,
    left: 20,
    height: 39,
    width: 39,
    position: "absolute",
  },
  backgroundShadowBox: {
    borderWidth: 0.8,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    shadowColor: "rgba(230, 234, 238, 0.6)",
    left: "-0.11%",
    bottom: "-0.23%",
    right: "-0.11%",
    top: "-0.23%",
    width: "100.21%",
    height: "100.47%",
    borderRadius: 9,
    borderColor: Color.border,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  divider: {
    height: "0.64%",
    top: "62.38%",
    bottom: "36.98%",
    backgroundColor: Color.state02,
    opacity: 0.15,
    display: "none",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  blakeGordon: {
    height: "19.01%",
    width: "30.76%",
    top: "4.3%",
    fontSize: FontSize.size_lg,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "left",
    color: Color.text01,
    fontFamily: FontFamily.textCaptionSemiBold,
    left: "35.26%",
    position: "absolute",
  },
  leadVisualDesigner: {
    width: "41.03%",
    top: "23.31%",
    color: Color.state02,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    textAlign: "left",
    left: "35.26%",
    position: "absolute",
  },
  leadVisualDesigner1: {
    width: "28.84%",
    top: "39.88%",
    left: "40.05%",
    color: Color.main,
    fontWeight: "700",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    textAlign: "left",
    position: "absolute",
  },
  leadVisualDesigner2: {
    top: "0%",
    height: "100%",
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.size_smi_3,
    left: "0%",
    width: "100%",
  },
  groupChild: {
    height: "122.62%",
    width: "32.72%",
    top: "-13.1%",
    right: "110.39%",
    bottom: "-9.52%",
    left: "-43.11%",
    display: "none",
    position: "absolute",
  },
  leadVisualDesignerParent: {
    height: "14.65%",
    width: "28.63%",
    top: "73.9%",
    right: "23.71%",
    bottom: "11.45%",
    left: "47.66%",
    display: "none",
    position: "absolute",
  },
  leadVisualDesigner3: {
    height: "81.55%",
    width: "65.73%",
    top: "10.68%",
    left: "131.74%",
    display: "none",
  },
  groupItem: {
    backgroundColor: Color.colorOrange,
    borderRadius: 9,
  },
  starIcon: {
    height: "44.66%",
    width: "47.19%",
    top: "27.83%",
    right: "26.97%",
    bottom: "27.51%",
    left: "25.84%",
    borderRadius: 9,
    position: "absolute",
  },
  leadVisualDesignerGroup: {
    height: "17.97%",
    width: "9.37%",
    top: "71.98%",
    right: "85.18%",
    bottom: "10.06%",
    display: "none",
  },
  carddoctorInfoChild: {
    height: "42.97%",
    width: "22.45%",
    top: "6.74%",
    right: "72.11%",
    bottom: "50.29%",
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carddoctorInfoItem: {
    height: "6.16%",
    width: "3.21%",
    top: "41.74%",
    right: "61.53%",
    bottom: "52.09%",
    left: "35.26%",
    maxWidth: "100%",
    position: "absolute",
  },
  carddoctorInfo: {
    top: "22.54%",
    right: "1.78%",
    bottom: "57.28%",
    left: "1.53%",
  },
  carddoctorInfo1: {
    top: "43.9%",
    right: "1.27%",
    bottom: "35.92%",
    left: "2.04%",
  },
  carddoctorInfo2: {
    top: "65.26%",
    right: "1.53%",
    bottom: "14.55%",
    left: "1.78%",
  },
  patientProfiles: {
    top: 134,
    left: 25,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 341,
    color: Color.globalBlack,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    position: "absolute",
  },
  description: {
    top: "36.74%",
    left: "6.87%",
  },
  description1: {
    top: "57.28%",
    left: "5.85%",
  },
  description2: {
    top: "78.99%",
    left: "5.09%",
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.main,
  },
  ppdScreening: {
    color: Color.grayGray1,
  },
  tab1: {
    display: "none",
  },
  tabBar: {
    top: 748,
    left: 21,
    width: 360,
    flexDirection: "row",
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  docVerifyWo1: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default DocVerifyWO;
