import React from "react";
import { TabBar, Tab, Divider, Layout } from "@ui-kitten/components";
import { Toolbar } from "../../components/toolbar";
import { useSafeArea } from "react-native-safe-area-context";
import { MenuIcon } from "../../assets/icons";

export const TodoTabBar = (props) => {
  const insets = useSafeArea();

  const onTabSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab key={route.key} title={options.title} icon={options.tabBarIcon} />
    );
  };

  return (
    <Layout style={{ paddingTop: insets.top }}>
      <Toolbar
        title="React Navigation Ex 🐱"
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider />
    </Layout>
  );
};
