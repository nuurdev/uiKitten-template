import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { useSafeArea } from "react-native-safe-area-context";
import { Toolbar } from "../../components/toolbar";
import { MenuIcon } from "../../assets/icons";

export const ProfileScreen = (props) => {
  const insets = useSafeArea();
  return (
    <React.Fragment>
      <Layout style={{ paddingTop: insets.top }}>
        <Toolbar
          title="React Navigation Ex 🐱"
          backIcon={MenuIcon}
          onBackPress={props.navigation.toggleDrawer}
        />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">PROFILE</Text>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
