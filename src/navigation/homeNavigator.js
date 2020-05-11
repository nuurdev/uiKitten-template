import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigator } from "./todoNavigator";
import { ProfileNavigator } from "./profileNavigator";
import { AboutScreen, HomeDrawer, HomeTabBar } from "../scenes/home";
import { HomeIcon, InfoIcon, LayoutIcon, PersonIcon } from "../assets/icons";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export const HomeBottomNavigator = () => (
  <BottomTab.Navigator tabBar={(props) => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name="Todo"
      component={TodoNavigator}
      options={{ title: "TODO", tabBarIcon: LayoutIcon }}
    />
    <BottomTab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{ title: "PROFILE", tabBarIcon: PersonIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = () => (
  <Drawer.Navigator
    // TODO: Track bug: https://github.com/react-navigation/react-navigation/issues/7561
    // drawerType="back"
    drawerContent={(props) => <HomeDrawer {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={HomeBottomNavigator}
      options={{ title: "Home", drawerIcon: HomeIcon }}
    />
    <Drawer.Screen
      name="About"
      component={AboutScreen}
      options={{ title: "About", drawerIcon: InfoIcon }}
    />
  </Drawer.Navigator>
);
