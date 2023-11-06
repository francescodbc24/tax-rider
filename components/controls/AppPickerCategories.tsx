import { FunctionComponent } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { PickerItemDefaultComponentProps } from "../controls/AppPicker";
import AppText from "../controls/AppText";
import Icon from "../Icon";
import { COLORS } from "../../theme";

//Component to override the default behavior of PickerComponent

interface AppLeaguePickerItemProps extends PickerItemDefaultComponentProps {}

const AppPickerCategories: FunctionComponent<AppLeaguePickerItemProps> = ({
  item,
  selected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: selected ? COLORS.input : undefined },
      ]}
      onPress={onPress}
    >
      <View style={styles.body}>
        <Icon backgroundColor={item.color} name={item.icon} size={35} />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: { marginTop: 5, fontSize: 12, textAlign: "center" },
});

export default AppPickerCategories;
