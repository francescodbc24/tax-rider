import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import AppText from "../controls/AppText";

interface ErrorMessageProps {
  error?: any;
  visible?: any;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>*{error}</AppText>;
};

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
