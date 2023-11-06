import { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS } from "../../theme";

interface DeleteActionProps {
  onPress?: (() => void) | undefined;
}

const DeleteAction: FunctionComponent<DeleteActionProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <View>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={COLORS.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.danger,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteAction;
