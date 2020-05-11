import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SignInScreen,
  SignUpScreen,
  ResetPasswordScreen,
} from "../scenes/auth";

const { Navigator, Screen } = createStackNavigator();

export const AuthNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
    <Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Navigator>
);
