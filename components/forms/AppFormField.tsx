import React, { FunctionComponent } from "react";
import AppTextInput from "../controls/AppTextInput";
import { FormikValues, useFormikContext } from "formik";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardTypeOptions,
  TextInputProps,
  Text,StyleSheet
} from "react-native";
import { COLORS } from "../../theme";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps extends TextInputProps {
  name: string;
  label?:string;
  icon?: any;
}

const AppFormField: FunctionComponent<AppFormFieldProps> = ({
  name,
  label,
  icon,
  ...rest
}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormikContext<any>();  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
      <Text style={styles.label}>{label}</Text>
        <AppTextInput
          value={values[name]?.toString()}
          icon={icon}
          onChangeText={(text: string) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          returnKeyType="done"
          {...rest}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight:"bold",
    fontSize: 12,
    color: COLORS.black,
  },
});

export default AppFormField;
