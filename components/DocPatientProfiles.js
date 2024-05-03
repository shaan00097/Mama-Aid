import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const DocPatientProfiles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.docPatientProfiles}>
      <Image
        style={styles.docPatientProfilesChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Text style={styles.patientProfiles}>Patient Profiles</Text>
      <View style={[styles.carddoctorInfoParent, styles.carddoctorLayout]}>
        <View style={[styles.carddoctorInfo, styles.carddoctorInfoPosition]}>
          <View style={styles.backgroundShadowBox} />
          <View style={styles.divider} />
          <Text style={styles.blakeGordon}>John Terry</Text>
          <Text style={[styles.leadVisualDesigner, styles.leadTypo1]}>
            +44 75 1314 8036
          </Text>
          <Text style={[styles.leadVisualDesigner1, styles.leadTypo1]}>
            Paleo Diet Approval
          </Text>
          <View style={styles.leadVisualDesignerParent}>
            <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
              1000+ Patients
            </Text>
            <Image
              style={[styles.groupChild, styles.iconChildLayout]}
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
            <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>
              4.5
            </Text>
            <View style={styles.groupItemPosition}>
              <View style={[styles.groupItem, styles.groupItemPosition]} />
              <Image
                style={[styles.starIcon, styles.iconChildLayout]}
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
            source={require("../assets/rectangle-20811.png")}
          />
          <Image
            style={[styles.carddoctorInfoItem, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7531.png")}
          />
        </View>
        <Text
          style={[styles.description, styles.leadTypo1]}
        >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
        <View style={[styles.container, styles.containerBorder]} />
        <View style={styles.appointmentSun190830AmParent}>
          <Text style={styles.appointmentSun190830}>
            {" "}
            Appointment - Sun,19,08.30 am
          </Text>
          <Image
            style={[styles.timeSquareIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/time-square.png")}
          />
        </View>
        <Pressable
          style={styles.nextWrapperShadowBox}
          onPress={() => navigation.navigate("AppointmentDoc")}
        >
          <Text style={styles.next}>Approve</Text>
        </Pressable>
        <Pressable
          style={styles.nextShadowBox}
          onPress={() => navigation.navigate("AppointmentDoc")}
        >
          <Text style={styles.next}> Decline</Text>
        </Pressable>
      </View>
      <View style={[styles.carddoctorInfoGroup, styles.carddoctorLayout]}>
        <View style={[styles.carddoctorInfo, styles.carddoctorInfoPosition]}>
          <View style={styles.backgroundShadowBox} />
          <View style={styles.divider} />
          <Text style={styles.blakeGordon}>John Terry</Text>
          <Text style={[styles.leadVisualDesigner, styles.leadTypo1]}>
            +44 75 1314 8036
          </Text>
          <Text style={[styles.leadVisualDesigner1, styles.leadTypo1]}>
            Paleo Diet Approval
          </Text>
          <View style={styles.leadVisualDesignerParent}>
            <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
              1000+ Patients
            </Text>
            <Image
              style={[styles.groupChild, styles.iconChildLayout]}
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
            <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>
              4.5
            </Text>
            <View style={styles.groupItemPosition}>
              <View style={[styles.groupItem, styles.groupItemPosition]} />
              <Image
                style={[styles.starIcon, styles.iconChildLayout]}
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
            source={require("../assets/rectangle-20811.png")}
          />
          <Image
            style={[styles.carddoctorInfoItem, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7531.png")}
          />
        </View>
        <Text
          style={[styles.description, styles.leadTypo1]}
        >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
        <View style={[styles.container, styles.containerBorder]} />
        <View style={styles.appointmentSun190830AmParent}>
          <Text style={styles.appointmentSun190830}>
            {" "}
            Appointment - Sun,19,08.30 am
          </Text>
          <Image
            style={[styles.timeSquareIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/time-square.png")}
          />
        </View>
        <View style={styles.nextWrapperShadowBox}>
          <Text style={styles.next}>Approve</Text>
        </View>
        <View style={styles.nextShadowBox}>
          <Text style={styles.next}> Decline</Text>
        </View>
      </View>
      <View style={[styles.carddoctorInfoContainer, styles.carddoctorLayout]}>
        <View style={[styles.carddoctorInfo, styles.carddoctorInfoPosition]}>
          <View style={styles.backgroundShadowBox} />
          <View style={styles.divider} />
          <Text style={styles.blakeGordon}>John Terry</Text>
          <Text style={[styles.leadVisualDesigner, styles.leadTypo1]}>
            +44 75 1314 8036
          </Text>
          <Text style={[styles.leadVisualDesigner1, styles.leadTypo1]}>
            Paleo Diet Approval
          </Text>
          <View style={styles.leadVisualDesignerParent}>
            <Text style={[styles.leadVisualDesigner2, styles.leadTypo]}>
              1000+ Patients
            </Text>
            <Image
              style={[styles.groupChild, styles.iconChildLayout]}
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
            <Text style={[styles.leadVisualDesigner3, styles.leadTypo]}>
              4.5
            </Text>
            <View style={styles.groupItemPosition}>
              <View style={[styles.groupItem, styles.groupItemPosition]} />
              <Image
                style={[styles.starIcon, styles.iconChildLayout]}
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
            source={require("../assets/rectangle-20811.png")}
          />
          <Image
            style={[styles.carddoctorInfoItem, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-7531.png")}
          />
        </View>
        <Text
          style={[styles.description, styles.leadTypo1]}
        >{`Postpartum Stage : After 6 Months
Lactation Status : After 6 Months`}</Text>
        <View style={[styles.container, styles.containerBorder]} />
        <View style={styles.appointmentSun190830AmParent}>
          <Text style={styles.appointmentSun190830}>
            {" "}
            Appointment - Sun,19,08.30 am
          </Text>
          <Image
            style={[styles.timeSquareIcon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/time-square.png")}
          />
        </View>
        <View style={styles.nextWrapperShadowBox}>
          <Text style={styles.next}>Approve</Text>
        </View>
        <View style={styles.nextShadowBox}>
          <Text style={styles.next}> Decline</Text>
        </View>
      </View>
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
            source={require("../assets/iconoirshieldquestion3.png")}
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
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("AppointmentDoc")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
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
  carddoctorLayout: {
    height: 226,
    width: 473,
    left: 6,
    position: "absolute",
  },
  carddoctorInfoPosition: {
    left: "0%",
    position: "absolute",
  },
  leadTypo1: {
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    position: "absolute",
  },
  leadTypo: {
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.size_smi_3,
    fontFamily: FontFamily.h3Regular,
    color: Color.text01,
    textAlign: "left",
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
  groupItemPosition: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  containerBorder: {
    borderWidth: 1,
    borderStyle: "solid",
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
    flex: 1,
    alignItems: "center",
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  docPatientProfilesChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  patientProfiles: {
    top: 134,
    left: 25,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
    fontWeight: "700",
    position: "absolute",
  },
  backgroundShadowBox: {
    borderWidth: 0.8,
    borderStyle: "solid",
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
    borderColor: Color.border,
    borderRadius: 9,
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
    right: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  blakeGordon: {
    height: "19.01%",
    width: "30.76%",
    top: "4.3%",
    fontSize: FontSize.size_lg,
    lineHeight: 30,
    color: Color.text01,
    fontWeight: "600",
    left: "35.26%",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    position: "absolute",
  },
  leadVisualDesigner: {
    width: "41.03%",
    top: "23.31%",
    color: Color.state02,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    fontFamily: FontFamily.h3Regular,
    left: "35.26%",
  },
  leadVisualDesigner1: {
    width: "28.84%",
    top: "39.88%",
    left: "40.05%",
    color: Color.main,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular12_size,
    height: "9.83%",
    fontFamily: FontFamily.h3Regular,
    display: "none",
    fontWeight: "700",
  },
  leadVisualDesigner2: {
    height: "100%",
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.size_smi_3,
    width: "100%",
    left: "0%",
    top: "0%",
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
    display: "none",
    position: "absolute",
  },
  carddoctorInfo: {
    height: "76.11%",
    width: "80.34%",
    right: "19.66%",
    bottom: "23.89%",
    top: "0%",
    left: "0%",
  },
  description: {
    height: "30.09%",
    width: "73.57%",
    top: "30.97%",
    left: "26.43%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  container: {
    height: "17.26%",
    width: "70.97%",
    top: "52.43%",
    right: "22.58%",
    bottom: "30.31%",
    left: "6.45%",
    borderRadius: Border.br_xs,
    borderColor: Color.main,
    position: "absolute",
  },
  appointmentSun190830: {
    width: "87.66%",
    left: "12.34%",
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    height: "100%",
    fontFamily: FontFamily.h3Regular,
    top: "0%",
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  timeSquareIcon: {
    height: "80%",
    width: "7.04%",
    top: "10%",
    right: "92.96%",
    bottom: "10%",
    left: "0%",
    position: "absolute",
  },
  appointmentSun190830AmParent: {
    height: "8.41%",
    width: "57.38%",
    top: "56.64%",
    right: "28.67%",
    bottom: "34.96%",
    left: "13.95%",
    position: "absolute",
  },
  next: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    color: Color.gray6,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  nextWrapperShadowBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    width: 115,
    borderColor: Color.wrong,
    backgroundColor: Color.colorForestgreen,
    borderRadius: Border.br_base,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 256,
    top: 180,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    position: "absolute",
  },
  nextShadowBox: {
    backgroundColor: Color.colorCrimson_200,
    left: 18,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    width: 115,
    borderColor: Color.wrong,
    borderRadius: Border.br_base,
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 180,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.764037609100342,
    },
    position: "absolute",
  },
  carddoctorInfoParent: {
    top: 192,
  },
  carddoctorInfoGroup: {
    top: 437,
  },
  carddoctorInfoContainer: {
    top: 682,
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
    top: 903,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    left: 18,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  backChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.border,
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
    left: 30,
  },
  docPatientProfiles: {
    borderRadius: Border.br_11xl,
    width: 393,
    height: 1007,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default DocPatientProfiles;
