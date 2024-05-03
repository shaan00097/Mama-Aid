import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PMDocProfile1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pmDocProfile}
      onPress={() => navigation.navigate("AppointmentPM")}
    >
      <Image
        style={styles.pmDocProfileChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={[styles.buttonPrimary, styles.inputFieldFlexBox]}
        onPress={() => navigation.navigate("PMCalander")}
      >
        <Text style={styles.button}>{`Request for Appointment `}</Text>
      </Pressable>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("AppointmentPM")}
      >
        <View style={[styles.backChild, styles.backChildBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft1.png")}
        />
      </Pressable>
      <View style={[styles.carddoctorInfo, styles.dividerPosition]}>
        <View style={[styles.background, styles.iconLayout]} />
        <View style={[styles.divider, styles.backgroundPosition]} />
        <Text style={styles.blakeGordon}>John Terry</Text>
        <Text style={styles.leadVisualDesigner}>+44 75 1314 8036</Text>
        <Text style={styles.leadVisualDesigner1}>Available today</Text>
        <View style={[styles.leadVisualDesignerParent, styles.leadPosition]}>
          <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
            1000+ Patients
          </Text>
          <Image
            style={[styles.groupChild, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-3142.png")}
          />
        </View>
        <View
          style={[
            styles.leadVisualDesignerGroup,
            styles.carddoctorInfoChildPosition,
          ]}
        >
          <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>4.5</Text>
          <View style={[styles.rectangleParent, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.iconLayout]} />
            <Image
              style={[styles.starIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/star.png")}
            />
          </View>
        </View>
        <Image
          style={[
            styles.carddoctorInfoChild,
            styles.carddoctorInfoChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-2081.png")}
        />
        <Image
          style={[styles.carddoctorInfoItem, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-753.png")}
        />
      </View>
      <Text style={[styles.practitionerProfile, styles.dietiticsnutritionClr]}>
        Practitioner Profile
      </Text>
      <Text style={[styles.experience, styles.locationTypo]}>Experience</Text>
      <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      <View style={[styles.inputField, styles.backChildBorder]}>
        <Text style={styles.dietiticsnutritionPostGradContainer}>
          <Text
            style={[styles.dietiticsnutrition, styles.dietiticsnutritionClr]}
          >
            Dietitics/Nutrition 
          </Text>
          <Text style={styles.postGraduateDiploma}>{` 
Post Graduate Diploma in Postpartum Nutrition`}</Text>
        </Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon3.png")}
        />
      </View>
      <Image
        style={[styles.cardmapIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/cardmap.png")}
      />
      <Image
        style={[styles.backgroundIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/background1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputFieldFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    left: 20,
  },
  backLayout: {
    height: 39,
    width: 39,
  },
  backChildBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  dividerPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: 9,
    position: "absolute",
  },
  backgroundPosition: {
    right: "0%",
    width: "100%",
  },
  leadPosition: {
    bottom: "10.06%",
    top: "72%",
    height: "17.94%",
  },
  leadTypo: {
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.size_smi_3,
    top: "10.53%",
    height: "81.73%",
    textAlign: "left",
    color: Color.text01,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carddoctorInfoChildPosition: {
    left: "5.45%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  dietiticsnutritionClr: {
    color: Color.globalBlack,
    fontWeight: "700",
  },
  locationTypo: {
    width: 352,
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: FontSize.subtitleMedium_size,
    color: Color.globalBlack,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  pmDocProfileChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
  },
  buttonPrimary: {
    top: 741,
    backgroundColor: Color.main,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    width: 353,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
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
    top: 49,
    left: 20,
    height: 39,
    width: 39,
    position: "absolute",
  },
  background: {
    shadowColor: "rgba(230, 234, 238, 0.6)",
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  divider: {
    height: "0.61%",
    top: "62.39%",
    bottom: "37%",
    backgroundColor: Color.state02,
    opacity: 0.15,
    left: "0%",
    position: "absolute",
  },
  blakeGordon: {
    height: "19%",
    width: "30.76%",
    top: "4.28%",
    fontSize: FontSize.size_lg,
    lineHeight: 30,
    textAlign: "left",
    color: Color.text01,
    fontFamily: FontFamily.textCaptionSemiBold,
    left: "35.26%",
    fontWeight: "600",
    position: "absolute",
  },
  leadVisualDesigner: {
    width: "41.03%",
    top: "23.33%",
    color: Color.state02,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    textAlign: "left",
    left: "35.26%",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  leadVisualDesigner1: {
    width: "28.84%",
    top: "39.89%",
    left: "40.05%",
    color: Color.colorMediumseagreen,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  leadVisualDesigner2: {
    width: "69.88%",
    left: "30.12%",
  },
  groupChild: {
    width: "22.86%",
    right: "77.14%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  leadVisualDesignerParent: {
    width: "40.97%",
    right: "23.71%",
    left: "35.32%",
    position: "absolute",
  },
  leadVisualDesigner3: {
    width: "33.29%",
    left: "66.71%",
  },
  groupItem: {
    backgroundColor: Color.colorOrange,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  starIcon: {
    height: "44.58%",
    width: "47.19%",
    top: "27.55%",
    right: "26.97%",
    bottom: "27.86%",
    left: "25.84%",
    borderRadius: 9,
    position: "absolute",
  },
  rectangleParent: {
    width: "50.64%",
    right: "49.36%",
    position: "absolute",
  },
  leadVisualDesignerGroup: {
    width: "18.5%",
    right: "76.05%",
    bottom: "10.06%",
    top: "72%",
    height: "17.94%",
  },
  carddoctorInfoChild: {
    height: "42.94%",
    width: "22.45%",
    top: "6.72%",
    right: "72.11%",
    bottom: "50.33%",
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  carddoctorInfoItem: {
    height: "6.11%",
    width: "3.21%",
    top: "41.72%",
    right: "61.53%",
    bottom: "52.17%",
    left: "35.26%",
    maxWidth: "100%",
    position: "absolute",
  },
  carddoctorInfo: {
    height: "21.13%",
    width: "96.69%",
    top: "22.65%",
    right: "3.31%",
    bottom: "56.22%",
  },
  practitionerProfile: {
    top: 134,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 341,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    position: "absolute",
  },
  experience: {
    top: 393,
    left: 21,
  },
  location: {
    top: 545,
    left: 25,
  },
  dietiticsnutrition: {
    fontFamily: FontFamily.h3Regular,
  },
  postGraduateDiploma: {
    color: Color.colorGray_800,
    fontFamily: FontFamily.h3Regular,
  },
  dietiticsnutritionPostGradContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 10,
    overflow: "hidden",
  },
  inputField: {
    top: 426,
    height: 99,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    left: 20,
    backgroundColor: Color.white,
  },
  cardmapIcon: {
    height: "15.26%",
    width: "85.24%",
    top: "69.25%",
    right: "8.65%",
    bottom: "15.49%",
    left: "6.11%",
    borderRadius: 9,
    position: "absolute",
  },
  backgroundIcon: {
    height: "68.47%",
    top: "31.81%",
    bottom: "-0.28%",
    right: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  pmDocProfile: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default PMDocProfile1;
