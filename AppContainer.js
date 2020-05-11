import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { light, dark, mapping } from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/navigation/appNavigator";
import { useThemeState } from "./src/providers/themeProvider";

const themes = { light, dark };

export default () => {
  const theme = useThemeState();
  const currentTheme = themes[theme];

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={currentTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};
