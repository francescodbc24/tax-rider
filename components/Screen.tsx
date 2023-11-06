import React, { FunctionComponent,PropsWithChildren } from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ScreenProps {
  style?: StyleProp<ViewStyle>;
}

const Screen: FunctionComponent<PropsWithChildren<ScreenProps>> = ({ style, children }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

//type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS == "android" ? 25 : 0,
    flex: 1,
  },
});

export default Screen;
