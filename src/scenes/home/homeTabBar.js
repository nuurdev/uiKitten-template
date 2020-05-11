import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from "@ui-kitten/components";
import { useSafeArea } from "react-native-safe-area-context";

export const HomeTabBar = (props) => {
  const insets = useSafeArea();
  const onSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <React.Fragment>
      <Divider />
      <BottomNavigation
        style={{ paddingBottom: insets.bottom }}
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </React.Fragment>
  );
};
