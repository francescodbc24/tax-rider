import React, { FunctionComponent,PropsWithChildren } from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";

interface ScreenProps {
  style?: StyleProp<ViewStyle>;
}

const Screen: FunctionComponent<PropsWithChildren<ScreenProps>> = ({ style, children }) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

//type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS == "android" ? 25 : 30,
    flex: 1,
    
  },
});

export default Screen;
