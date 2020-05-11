import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, CheckBox, Layout } from "@ui-kitten/components";
import { Formik } from "formik";
import { FormInput } from "../../components/formInput";
import { EyeIcon, EyeOffIcon } from "../../assets/icons";
import { SignInData, SignInSchema } from "../../data/signInModel";
import { useAuthDispatch } from "../../providers/authProvider";

export const SignInScreen = (props) => {
  const setAuthentication = useAuthDispatch();
  const [shouldRemember, setShouldRemember] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onFormSubmit = (values) => {
    setAuthentication();
    // navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate("Home");
  };

  const navigateSignUp = () => {
    props.navigation.navigate("SignUp");
  };

  const navigateResetPassword = () => {
    props.navigation.navigate("ResetPassword");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = (props) => (
    <React.Fragment>
      <FormInput
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <FormInput
        id="password"
        style={styles.formControl}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        icon={passwordVisible ? EyeIcon : EyeOffIcon}
        onIconPress={onPasswordIconPress}
      />
      <View style={styles.resetPasswordContainer}>
        <CheckBox
          style={styles.formControl}
          checked={shouldRemember}
          onChange={setShouldRemember}
          text="Remember Me"
        />
        <Button
          appearance="ghost"
          status="basic"
          onPress={navigateResetPassword}
        >
          Forgot password?
        </Button>
      </View>
      <Button style={styles.submitButton} onPress={props.handleSubmit}>
        SIGN IN
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require("../../assets/image-background.jpeg")}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignInData.empty()}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
        <Button
          style={styles.noAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateSignUp}
        >
          Don't have an account?
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  resetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: "center",
  },
});
