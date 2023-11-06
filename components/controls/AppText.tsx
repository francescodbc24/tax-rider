import React, { FunctionComponent } from "react";
import {
  StyleProp,
  Text,
  ViewStyle,
  Platform,
  StyleSheet,
  TextStyle,
  TextProps,
} from "react-native";
import { COLORS } from "../../theme";

interface AppTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const AppText: FunctionComponent<AppTextProps> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    ...Platform.select({
      ios: { fontSize: 16, fontFamily: "Avenir" },
      android: { fontSize: 14, fontFamily: "Roboto" },
    }),
  },
});

export default AppText;
