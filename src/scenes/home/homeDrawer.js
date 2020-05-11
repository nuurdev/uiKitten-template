import React from "react";
import { Drawer, DrawerHeaderFooter, Layout } from "@ui-kitten/components";
import { useSafeArea } from "react-native-safe-area-context";
import { useThemeToggle, useThemeState } from "../../providers/themeProvider";
import { PersonIcon, MoonIcon, SunIcon, LogoutIcon } from "../../assets/icons";
import { useAuthDispatch } from "../../providers/authProvider";

export const HomeDrawer = (props) => {
  const insets = useSafeArea();
  const setAuthentication = useAuthDispatch();
  const theme = useThemeState();
  const toggleTheme = useThemeToggle();

  const onMenuItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createNavigationItemForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return {
      routeName: route.name,
      title: options.title,
      icon: options.drawerIcon,
    };
  };

  // TODO: Remove lambdas
  const Footer = () => (
    <>
      <DrawerHeaderFooter
        title={theme === "light" ? "Dark Theme" : "Light Theme"}
        icon={theme === "light" ? MoonIcon : SunIcon}
        onPress={() => toggleTheme()}
      />
      <DrawerHeaderFooter
        title="Log Out"
        icon={LogoutIcon}
        onPress={() => setAuthentication()}
      />
    </>
  );

  const Header = () => (
    <DrawerHeaderFooter
      title="John Doe"
      description="React Native Developer"
      icon={PersonIcon}
    />
  );

  return (
    <Layout
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}
    >
      <Drawer
        data={props.state.routes.map(createNavigationItemForRoute)}
        onSelect={onMenuItemSelect}
        header={Header}
        footer={Footer}
      />
    </Layout>
  );
};
