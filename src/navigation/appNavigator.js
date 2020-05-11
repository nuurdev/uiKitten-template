import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigator } from "./authNavigator";
import { HomeNavigator } from "./homeNavigator";
import { useAuthState } from "../providers/authProvider";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = (props) => {
  const { authenticated } = useAuthState();
  return (
    <Navigator {...props} headerMode="none">
      {!authenticated ? (
        <Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            animationTypeForReplace: authenticated ? "push" : "pop",
          }}
        />
      ) : (
        <Screen name="Home" component={HomeNavigator} />
      )}
    </Navigator>
  );
};
