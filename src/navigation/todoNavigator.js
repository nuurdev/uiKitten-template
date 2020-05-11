import React from "react";
import { useTheme } from "@ui-kitten/components";
import { DoneAllIcon, GridIcon } from "../assets/icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  TodoTabBar,
  TodoInProgressScreen,
  TodoDoneScreen,
} from "../scenes/todo";

const TopTab = createMaterialTopTabNavigator();

export const TodoNavigator = () => {
  // TODO: Check if useTheme needed on android
  const themeValue = useTheme();
  const backgroundColor = themeValue["background-basic-color-1"];
  return (
    <TopTab.Navigator
      tabBar={(props) => <TodoTabBar {...props} />}
      sceneContainerStyle={{ backgroundColor }}
    >
      <TopTab.Screen
        name={"InProgress"}
        component={TodoInProgressScreen}
        options={{ title: "IN PROGRESS", tabBarIcon: GridIcon }}
      />
      <TopTab.Screen
        name={"Done"}
        component={TodoDoneScreen}
        options={{ title: "DONE", tabBarIcon: DoneAllIcon }}
      />
    </TopTab.Navigator>
  );
};
