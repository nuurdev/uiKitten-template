import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  TodoTabBar,
  TodoInProgressScreen,
  TodoDoneScreen,
} from "../scenes/todo";
import { DoneAllIcon, GridIcon } from "../assets/icons";

const TopTab = createMaterialTopTabNavigator();

export const TodoNavigator = () => (
  <TopTab.Navigator tabBar={(props) => <TodoTabBar {...props} />}>
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
