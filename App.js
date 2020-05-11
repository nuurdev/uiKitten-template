import React from "react";
import AppContainer from "./AppContainer";
import { ThemeProvider } from "./src/providers/themeProvider";
import { AuthProvider } from "./src/providers/authProvider";

export default () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </ThemeProvider>
  );
};
