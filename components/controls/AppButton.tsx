import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { COLORS } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AppButtonProps {
  title: string;
  color?: keyof typeof COLORS;
  icon?:keyof typeof MaterialCommunityIcons.glyphMap;
  //onPress?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  //onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: any;
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  title,
  icon,
  color = "primary",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: COLORS[color] }]}
      onPress={onPress}
    >
      {icon && <MaterialCommunityIcons color={"white"} name={icon} size={20} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "30%",
    padding: 16,
    marginVertical: 10,    
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight:"500",
    textTransform: "uppercase",
  },
});

export default AppButton;
