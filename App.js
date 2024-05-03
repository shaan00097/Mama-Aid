const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FoodiesWhiteIcon from "./components/FoodiesWhiteIcon";
import WorkoutSummary1 from "./screens/WorkoutSummary1";
import WorkoutSummary from "./screens/WorkoutSummary";
import Workout6 from "./screens/Workout6";
import SignUpDoc1 from "./screens/SignUpDoc1";
import PasswordChangedDoc from "./screens/PasswordChangedDoc";
import Frame5 from "./screens/Frame5";
import Workout5 from "./screens/Workout5";
import ResetPasswordDoc from "./screens/ResetPasswordDoc";
import SignUpDoc from "./screens/SignUpDoc";
import Workout4 from "./screens/Workout4";
import SignUpPM5 from "./screens/SignUpPM5";
import EditProfileDoc2 from "./components/EditProfileDoc2";
import Workout3 from "./screens/Workout3";
import SignUpPM4 from "./screens/SignUpPM4";
import EditProfileDoc1 from "./components/EditProfileDoc1";
import SignUpPM3 from "./screens/SignUpPM3";
import PMDocProfile1 from "./screens/PMDocProfile1";
import DocPatientProfiles from "./components/DocPatientProfiles";
import Payment from "./screens/Payment";
import SignUpPM2 from "./screens/SignUpPM2";
import Nutrition8 from "./screens/Nutrition8";
import Nutrition7 from "./screens/Nutrition7";
import PMCalander from "./screens/PMCalander";
import Workout2 from "./screens/Workout2";
import DocVerifyWO1 from "./screens/DocVerifyWO1";
import AppointmentDoc from "./screens/AppointmentDoc";
import Checkout from "./screens/Checkout";
import PasswordChanged from "./screens/PasswordChanged";
import Nutrition6 from "./screens/Nutrition6";
import EditProfileDoc from "./components/EditProfileDoc";
import EditProfilePM from "./components/EditProfilePM";
import SignUpPM1 from "./screens/SignUpPM1";
import Workout1 from "./screens/Workout1";
import Frame4 from "./screens/Frame4";
import ResetPassword from "./screens/ResetPassword";
import SignUpPM from "./screens/SignUpPM";
import BMIPage from "./screens/BMIPage";
import PPDTestResources from "./screens/PPDTestResources";
import Workout from "./screens/Workout";
import DocVerifyMP from "./screens/DocVerifyMP";
import DocVerifyWO from "./screens/DocVerifyWO";
import ChooseYourPlan from "./screens/ChooseYourPlan";
import PPDTestPResults from "./screens/PPDTestPResults";
import Frame3 from "./screens/Frame3";
import Frame2 from "./screens/Frame2";
import Frame1 from "./screens/Frame1";
import Frame from "./screens/Frame";
import Nutrition5 from "./screens/Nutrition5";
import InformationPage1 from "./screens/InformationPage1";
import DashboardDoc from "./screens/DashboardDoc";
import PMDocProfile from "./screens/PMDocProfile";
import AppointmentPM from "./screens/AppointmentPM";
import DashboardPM from "./screens/DashboardPM";
import PPDTest2 from "./screens/PPDTest2";
import Nutrition4 from "./screens/Nutrition4";
import Nutrition3 from "./screens/Nutrition3";
import Nutrition2 from "./screens/Nutrition2";
import Nutrition1 from "./screens/Nutrition1";
import Nutrition from "./screens/Nutrition";
import PPDTestResults from "./screens/PPDTestResults";
import PPDTest1 from "./screens/PPDTest1";
import PPDTest from "./screens/PPDTest";
import ProfileDoc from "./screens/ProfileDoc";
import ProfilePM from "./screens/ProfilePM";
import LogInDoc from "./screens/LogInDoc";
import LogInPM from "./screens/LogInPM";
import SplashScreen from "./screens/SplashScreen";
import InformationPage from "./screens/InformationPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Satoshi-Regular": require("./assets/fonts/Satoshi-Regular.otf"),
    "FixelDisplay-Regular": require("./assets/fonts/FixelDisplay-Regular.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.otf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WorkoutSummary1"
              component={WorkoutSummary1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkoutSummary"
              component={WorkoutSummary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout6"
              component={Workout6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpDoc1"
              component={SignUpDoc1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangedDoc"
              component={PasswordChangedDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout5"
              component={Workout5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordDoc"
              component={ResetPasswordDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpDoc"
              component={SignUpDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout4"
              component={Workout4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM5"
              component={SignUpPM5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout3"
              component={Workout3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM4"
              component={SignUpPM4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM3"
              component={SignUpPM3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PMDocProfile1"
              component={PMDocProfile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM2"
              component={SignUpPM2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition8"
              component={Nutrition8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition7"
              component={Nutrition7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PMCalander"
              component={PMCalander}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout2"
              component={Workout2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocVerifyWO1"
              component={DocVerifyWO1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentDoc"
              component={AppointmentDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChanged"
              component={PasswordChanged}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition6"
              component={Nutrition6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM1"
              component={SignUpPM1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout1"
              component={Workout1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPM"
              component={SignUpPM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BMIPage"
              component={BMIPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTestResources"
              component={PPDTestResources}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Workout"
              component={Workout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocVerifyMP"
              component={DocVerifyMP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocVerifyWO"
              component={DocVerifyWO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseYourPlan"
              component={ChooseYourPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTestPResults"
              component={PPDTestPResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition5"
              component={Nutrition5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformationPage1"
              component={InformationPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardDoc"
              component={DashboardDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PMDocProfile"
              component={PMDocProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentPM"
              component={AppointmentPM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardPM"
              component={DashboardPM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTest2"
              component={PPDTest2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition4"
              component={Nutrition4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition3"
              component={Nutrition3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition2"
              component={Nutrition2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition1"
              component={Nutrition1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutrition"
              component={Nutrition}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTestResults"
              component={PPDTestResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTest1"
              component={PPDTest1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PPDTest"
              component={PPDTest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileDoc"
              component={ProfileDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePM"
              component={ProfilePM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInDoc"
              component={LogInDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInPM"
              component={LogInPM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformationPage"
              component={InformationPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
