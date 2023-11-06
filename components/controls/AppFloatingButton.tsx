import { FunctionComponent } from "react";
import { GestureResponderEvent, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

interface AppFloatingButtonProps {
  icon?: string;
  iconColor?: string;
  size?: number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AppFloatingButton: FunctionComponent<AppFloatingButtonProps> = ({
  icon = "plus",
  iconColor,
  size = 60,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.touchableOpacityStyle,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <MaterialCommunityIcons
        size={size * 0.5}
        name={icon}
        color={iconColor ? iconColor : "white"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: COLORS.primary,
  },
});

export default AppFloatingButton;
