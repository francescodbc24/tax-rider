import React, { FunctionComponent } from "react";
import AppButton from "../controls/AppButton";
import { useFormikContext } from "formik";
import { COLORS } from "../../theme";


interface SubmitButtonProps {
  title: string;
  color?: keyof typeof COLORS;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  title,
  color,
}) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} icon="content-save" color={color} onPress={handleSubmit} />;
};

export default SubmitButton;
