import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import GroupComponent from "../components/GroupComponent";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ProfilePM = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profilePm, styles.tabBarBg]}>
      <Image
        style={styles.profilePmChild}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <GroupComponent />
      <View style={styles.topPosition}>
        <View style={[styles.statusBar, styles.topPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch1.png")}
          />
          <View style={[styles.statusIcons, styles.tabBarFlexBox]}>
            <Image
              style={styles.networkSignalLight}
              contentFit="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
              contentFit="cover"
              source={require("../assets/wifi-signal--light.png")}
            />
            <Image
              style={[styles.batteryLight, styles.lightSpaceBlock]}
              contentFit="cover"
              source={require("../assets/statusnormal-level100.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon}
            contentFit="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/colorclear.png")}
          />
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <Pressable
            style={[styles.component11, styles.componentLayout]}
            onPress={() => navigation.navigate("EditProfilePM")}
          >
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linebusinessprofileline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Edit profile information
            </Text>
            <Text style={[styles.english, styles.englishPosition]}>
              English
            </Text>
          </Pressable>
          <Pressable
            style={[styles.component14, styles.componentLayout]}
            onPress={() => navigation.navigate("BMIPage")}
          >
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linebusinessprofileline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              View BMI
            </Text>
            <Text style={[styles.english, styles.englishPosition]}>
              English
            </Text>
          </Pressable>
          <View style={[styles.component12, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linemedianotification3line.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Notifications
            </Text>
            <Text style={[styles.english2, styles.englishPosition]}>ON</Text>
          </View>
          <View style={[styles.component13, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/lineeditortranslate2.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Language
            </Text>
            <Text style={[styles.english3, styles.englishPosition]}>
              English
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.component11, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/lineusercontactsline.png")}
            />
            <Text style={styles.editPosition}>
              <Text style={styles.help}>{`Help & `}</Text>
              <Text style={styles.support}>Support</Text>
            </Text>
            <Text style={[styles.english, styles.englishPosition]}>
              English
            </Text>
          </View>
          <View style={[styles.component121, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linecommunicationchatquoteline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Contact us
            </Text>
            <Text style={[styles.english, styles.englishPosition]}>ON</Text>
          </View>
          <Pressable
            style={[styles.component131, styles.componentLayout]}
            onPress={() => navigation.navigate("LogInPM")}
          >
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linesystemlock2line.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Log Out
            </Text>
            <Text style={[styles.english, styles.englishPosition]}>
              English
            </Text>
          </Pressable>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.component11, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linebusinessprojector2line.png")}
            />
            <Text
              style={[styles.editProfileInformation, styles.editPosition]}
            >{`Upgrade to Premium `}</Text>
            <Text style={[styles.english, styles.englishPosition]}>
              English
            </Text>
          </View>
          <View style={[styles.component121, styles.componentLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/linehealthmentalhealthline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editPosition]}>
              Theme
            </Text>
            <Text style={[styles.english3, styles.englishPosition]}>
              Light mode
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarFlexBox]}>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("DashboardPM")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("PPDTest")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>PPD Screening</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("InformationPage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/micircleinformation.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Information</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("ProfilePM")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconoirprofilecircle1.png")}
          />
          <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarBg: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  topPosition: {
    height: 44,
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  tabBarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  groupChildLayout: {
    height: 145,
    width: 342,
    left: 0,
    position: "absolute",
  },
  groupShadowBox: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  componentLayout: {
    height: 24,
    width: 277,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  editPosition: {
    width: 240,
    textAlign: "left",
    color: Color.globalBlack,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.body1Medium_size,
    left: 37,
    top: "8.33%",
    position: "absolute",
  },
  englishPosition: {
    textAlign: "right",
    left: "22.38%",
    width: "86.64%",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.body1Medium_size,
    top: "8.33%",
    position: "absolute",
  },
  groupLayout: {
    height: 121,
    width: 342,
    left: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 86,
    width: 342,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 7,
    textAlign: "center",
    lineHeight: 13,
    fontSize: FontSize.caption2Regular11_size,
    fontFamily: FontFamily.caption2Regular11,
    letterSpacing: 0,
  },
  profilePmChild: {
    height: 262,
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    alignItems: "center",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    overflow: "hidden",
  },
  groupChild: {
    height: 145,
    width: 342,
    left: 0,
    position: "absolute",
  },
  linebusinessprofileLineIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  editProfileInformation: {
    fontFamily: FontFamily.h3Regular,
  },
  english: {
    color: Color.lightPrimary,
    display: "none",
    fontFamily: FontFamily.caption2Regular11,
  },
  component11: {
    top: 14,
  },
  component14: {
    top: 43,
  },
  english2: {
    color: Color.main,
    fontFamily: FontFamily.caption2Regular11,
  },
  component12: {
    top: 73,
  },
  english3: {
    color: Color.main,
    fontFamily: FontFamily.h3Regular,
  },
  component13: {
    top: 107,
  },
  rectangleParent: {
    top: 0,
    height: 145,
  },
  groupItem: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  help: {
    fontFamily: FontFamily.caption2Regular11,
  },
  support: {
    fontFamily: FontFamily.h3Regular,
  },
  component121: {
    top: 49,
  },
  component131: {
    top: 86,
  },
  rectangleGroup: {
    top: 255,
  },
  groupInner: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  rectangleContainer: {
    top: 157,
  },
  groupParent: {
    top: 362,
    left: 26,
    height: 376,
    width: 342,
    position: "absolute",
  },
  home: {
    color: Color.grayGray1,
  },
  tab: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flex: 1,
  },
  profile: {
    color: Color.main,
  },
  tabBar: {
    top: 754,
    left: 17,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  profilePm: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default ProfilePM;
