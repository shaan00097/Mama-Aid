import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PMCalander = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pmCalander}>
      <Image
        style={styles.pmCalanderChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("PMDocProfile1")}
      >
        <Text style={styles.button}>Proceed</Text>
      </Pressable>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("PMDocProfile")}
      >
        <View style={styles.backChild} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft4.png")}
        />
      </Pressable>
      <Text style={styles.selectDateAnd}>Select Date and Time</Text>
      <Text style={styles.slotsAvailable}>Slots Available</Text>
      <View style={styles.nextWrapper}>
        <Text style={[styles.next, styles.nextTypo]}>08.30am</Text>
      </View>
      <View style={[styles.nextContainer, styles.nextShadowBox]}>
        <Text style={[styles.next1, styles.nextTypo]}>09.15am</Text>
      </View>
      <View style={[styles.nextFrame, styles.nextShadowBox]}>
        <Text style={[styles.next1, styles.nextTypo]}>10.00am</Text>
      </View>
      <View style={styles.view}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/background3.png")}
        />
        <View style={styles.day}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text, styles.textTypo3]}>M</Text>
          </View>
          <View style={[styles.calendardayCopy15, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark1.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text1, styles.textTypo3]}>T</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark2.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text2, styles.textTypo3]}>W</Text>
          </View>
          <View style={[styles.calendardayCopy17, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark3.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text1, styles.textTypo3]}>T</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark4.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text1, styles.textTypo3]}>F</Text>
          </View>
          <View style={[styles.calendardayCopy19, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark5.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text1, styles.textTypo3]}>S</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIcon}
              contentFit="cover"
              source={require("../assets/calendarmark6.png")}
            />
            <View style={[styles.rectangle, styles.rectangleBg]} />
            <Text style={[styles.text1, styles.textTypo3]}>S</Text>
          </View>
        </View>
        <View style={[styles.line01, styles.linePosition]}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark7.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text7, styles.textTypo2]}>26</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark8.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text7, styles.textTypo2]}>27</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark9.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text7, styles.textTypo2]}>28</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark10.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text7, styles.textTypo2]}>29</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark11.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text11, styles.textTypo2]}>30</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark12.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text12, styles.textTypo2]}>31</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark13.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text13, styles.textTypo2]}>1</Text>
          </View>
        </View>
        <View style={[styles.line02, styles.linePosition]}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark14.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>2</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark15.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>3</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark16.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>4</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIconPosition}
              contentFit="cover"
              source={require("../assets/calendarmark17.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>5</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark18.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>6</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark19.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>7</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark20.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>8</Text>
          </View>
        </View>
        <View style={[styles.line03, styles.linePosition]}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark21.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text14, styles.textTypo1]}>9</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark22.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>10</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark23.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text23, styles.textTypo1]}>11</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={styles.calendarmarkIconPosition}
              contentFit="cover"
              source={require("../assets/calendarmark24.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text24, styles.textTypo2]}>12</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark25.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>13</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark26.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>14</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark27.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>15</Text>
          </View>
        </View>
        <View style={[styles.line04, styles.linePosition]}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark28.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>16</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark29.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>17</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark30.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>18</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark31.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>19</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark32.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text32, styles.textTypo1]}>20</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark33.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text25, styles.textTypo1]}>21</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark34.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>22</Text>
          </View>
        </View>
        <View style={styles.line05}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark35.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>23</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark36.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>24</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark37.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>25</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark38.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>26</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark39.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>27</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark40.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>28</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark41.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text22, styles.textTypo1]}>29</Text>
          </View>
        </View>
        <View style={[styles.line06, styles.linePosition]}>
          <View style={[styles.calendardayCopy14, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark42.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text42, styles.textTypo2]}>30</Text>
          </View>
          <View style={[styles.calendardayCopy, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark43.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text43, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.calendardayCopy16, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark44.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text44, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.calendardayCopy3, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark45.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text44, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.calendardayCopy18, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark46.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text44, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.calendardayCopy5, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark47.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text44, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.calendardayCopy20, styles.calendardayPosition]}>
            <Image
              style={[
                styles.calendarmarkIcon7,
                styles.calendarmarkIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/calendarmark48.png")}
            />
            <View style={[styles.rectangle7, styles.rectangleBg]} />
            <Text style={[styles.text44, styles.textTypo]}>6</Text>
          </View>
        </View>
        <Image
          style={[styles.novemberIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/november.png")}
        />
        <Image
          style={[styles.icon32lineleft, styles.icon32lineleftLayout]}
          contentFit="cover"
          source={require("../assets/icon-32lineleft.png")}
        />
        <Image
          style={[styles.icon32lineleftCopy, styles.icon32lineleftLayout]}
          contentFit="cover"
          source={require("../assets/icon-32lineleft-copy.png")}
        />
      </View>
      <Text style={styles.apr2024}>12 Apr 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "600",
  },
  nextShadowBox: {
    backgroundColor: Color.border,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    width: 115,
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
    top: 634,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calendardayPosition: {
    width: "10.38%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.colorGainsboro_200,
    display: "none",
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.footnoteRegular_size,
    marginTop: -11.1,
    color: Color.text03,
    lineHeight: 24,
    fontWeight: "700",
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  linePosition: {
    left: "3.05%",
    right: "2.77%",
    width: "94.18%",
    height: "8.69%",
    position: "absolute",
  },
  calendarmarkIconPosition: {
    marginTop: -14.6,
    height: 29,
    width: 29,
    left: "50%",
    marginLeft: -14.05,
    top: "50%",
    position: "absolute",
  },
  textTypo2: {
    marginTop: -11,
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 24,
    fontWeight: "700",
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  textTypo1: {
    color: Color.text01,
    marginTop: -11,
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 24,
    fontWeight: "700",
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  textTypo: {
    color: Color.state02,
    marginTop: -11,
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 24,
    fontWeight: "700",
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  icon32lineleftLayout: {
    bottom: "84.58%",
    top: "6.73%",
    width: "9.78%",
    height: "8.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pmCalanderChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
    color: Color.white,
  },
  buttonPrimary: {
    top: 741,
    width: 353,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    backgroundColor: Color.main,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderColor: Color.border,
    borderWidth: 1,
    borderStyle: "solid",
    height: 39,
    width: 39,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconChevronleft: {
    marginTop: -7.3,
    right: 11,
    width: 9,
    height: 15,
    top: "50%",
    position: "absolute",
  },
  back: {
    top: 49,
    height: 39,
    width: 39,
    left: 20,
    position: "absolute",
  },
  selectDateAnd: {
    top: 134,
    left: 25,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
    color: Color.globalBlack,
    position: "absolute",
  },
  slotsAvailable: {
    top: 592,
    fontSize: FontSize.body1Medium_size,
    letterSpacing: 1,
    width: 352,
    lineHeight: 24,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    left: 20,
    position: "absolute",
  },
  next: {
    color: Color.gray6,
  },
  nextWrapper: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    width: 115,
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
    top: 634,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.main,
    left: 20,
    position: "absolute",
  },
  next1: {
    color: Color.globalBlack,
    lineHeight: 22,
  },
  nextContainer: {
    left: 139,
  },
  nextFrame: {
    left: 258,
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  calendarmarkIcon: {
    marginTop: -14.7,
    display: "none",
    height: 29,
    width: 29,
    left: "50%",
    marginLeft: -14.05,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    height: "143.79%",
    width: "143.84%",
    top: "-21.9%",
    right: "-21.92%",
    bottom: "-21.9%",
    left: "-21.92%",
  },
  text: {
    left: "30.93%",
    color: Color.text03,
  },
  calendardayCopy14: {
    right: "89.62%",
    left: "0%",
  },
  text1: {
    left: "36.94%",
    color: Color.text03,
  },
  calendardayCopy15: {
    right: "74.7%",
    left: "14.93%",
  },
  text2: {
    left: "27.93%",
    color: Color.text03,
  },
  calendardayCopy16: {
    right: "59.74%",
    left: "29.88%",
  },
  calendardayCopy17: {
    right: "44.81%",
    left: "44.81%",
  },
  calendardayCopy18: {
    right: "29.88%",
    left: "59.74%",
  },
  calendardayCopy19: {
    right: "14.96%",
    left: "74.67%",
  },
  calendardayCopy20: {
    left: "89.62%",
    right: "0%",
    width: "10.38%",
  },
  day: {
    height: "8.2%",
    width: "88.89%",
    top: "19.22%",
    right: "8.23%",
    bottom: "72.57%",
    left: "2.88%",
    opacity: 0.5,
    position: "absolute",
  },
  calendarmarkIcon7: {
    display: "none",
  },
  rectangle7: {
    height: "143.83%",
    width: "143.91%",
    top: "-21.91%",
    right: "-22.1%",
    bottom: "-21.91%",
    left: "-21.81%",
  },
  text7: {
    left: "27.76%",
    color: Color.text03,
  },
  calendardayCopy: {
    right: "74.68%",
    left: "14.94%",
  },
  calendardayCopy3: {
    right: "44.82%",
    left: "44.79%",
  },
  text11: {
    left: "24.93%",
    color: Color.text03,
  },
  text12: {
    left: "30.59%",
    color: Color.text03,
  },
  calendardayCopy5: {
    right: "14.94%",
    left: "74.68%",
  },
  text13: {
    left: "41.93%",
    color: Color.white,
    marginTop: -11,
  },
  line01: {
    top: "31.15%",
    bottom: "60.16%",
    opacity: 0.5,
  },
  text14: {
    left: "39.09%",
  },
  line02: {
    top: "42.12%",
    bottom: "49.2%",
  },
  text22: {
    left: "27.76%",
  },
  text23: {
    left: "33.43%",
  },
  text24: {
    left: "30.59%",
    color: Color.white,
    marginTop: -11,
  },
  text25: {
    left: "30.59%",
  },
  line03: {
    top: "52.98%",
    bottom: "38.34%",
  },
  text32: {
    left: "24.93%",
  },
  line04: {
    top: "63.86%",
    bottom: "27.45%",
  },
  line05: {
    top: "74.72%",
    right: "2.6%",
    bottom: "16.6%",
    left: "3.21%",
    width: "94.18%",
    height: "8.69%",
    position: "absolute",
  },
  text42: {
    left: "24.93%",
    color: Color.white,
    marginTop: -11,
  },
  text43: {
    left: "41.93%",
  },
  text44: {
    left: "39.09%",
  },
  line06: {
    top: "85.6%",
    bottom: "5.71%",
  },
  novemberIcon: {
    height: "3.65%",
    width: "28.37%",
    top: "9.09%",
    right: "35.87%",
    bottom: "87.27%",
    left: "35.76%",
    display: "none",
  },
  icon32lineleft: {
    right: "82.88%",
    left: "7.34%",
  },
  icon32lineleftCopy: {
    right: "7.34%",
    left: "82.88%",
  },
  view: {
    height: "43.78%",
    width: "91.86%",
    top: "23%",
    right: "4.07%",
    bottom: "33.22%",
    left: "4.07%",
    position: "absolute",
  },
  apr2024: {
    top: 223,
    left: 126,
    color: Color.colorDarkslateblue_200,
    width: 152,
    height: 19,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  pmCalander: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PMCalander;
