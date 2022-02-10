import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../src/constants/navigationStrings";
import * as Screens from "../src/screens/index";

export default () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Screens.Timeout}
          name={navigationStrings.TIMEOUT}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Screens.LoginSignup}
          name={navigationStrings.LOGINSIGNUP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Screens.LoginPage}
          name={navigationStrings.LOGINPAGE}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Screens.Signup}
          name={navigationStrings.SIGNUP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Screens.SnapUp}
          name={navigationStrings.SNAPUP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Screens.Birthday}
          name={navigationStrings.BIRTHDAY}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          component={Screens.Chat}
          name={navigationStrings.CHAT}
       options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
