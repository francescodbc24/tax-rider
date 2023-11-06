import React, { FunctionComponent } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  KeyboardTypeOptions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

interface AppTextInputProps extends TextInputProps {
  icon?: any | undefined;
  value?: string;
}

const AppTextInput: FunctionComponent<AppTextInputProps> = ({
  icon,
  value,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={COLORS.black}
        />
      )}
      <TextInput
        value={value}
        style={[{ width: "100%" }]}        
        // autoCapitalize="none"
        // onBlur={onBlur}
        // onChangeText={onChangeText}
        // keyboardType={keyboardType}
        // autoCorrect={false}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {    
    backgroundColor: COLORS.input,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    padding: 12,
    marginVertical: 10,
    borderWidth:1.0,
    borderColor:COLORS.input_black,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
