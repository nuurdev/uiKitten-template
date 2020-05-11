import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export const TodoInProgressScreen = (props) => {
  return (
    <React.Fragment>
      <Layout style={styles.container}>
        <Text category="h1">IN PROGRESS</Text>
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
