import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { Toolbar } from "../../components/toolbar";
import { useSafeArea } from "react-native-safe-area-context";

export const AboutScreen = (props) => {
  const insets = useSafeArea();

  return (
    <React.Fragment>
      <Layout style={{ paddingTop: insets.top }}>
        <Toolbar
          title="React Navigation Ex 🐱"
          onBackPress={props.navigation.goBack}
        />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">ABOUT</Text>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
