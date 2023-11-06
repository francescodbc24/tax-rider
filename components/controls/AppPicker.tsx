import React, { FunctionComponent, useState } from "react";
import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import { COLORS } from "../../theme";
import AppButton from "./AppButton";
import Screen from "../Screen";

interface AppPickerProps {
  placeholder: string;
  icon?: any | undefined;
  numberOfColumns?: number;
  items: PickerItem[];
  PickerItemComponent?: React.FunctionComponent<PickerItemDefaultComponentProps>;
  selectedItem: PickerItem | undefined;
  onSelectItem?: (item: PickerItem) => void;
}

export interface PickerItem {
  label: string;
  value: number;
  [key: string]: any;
}

const AppPicker: FunctionComponent<AppPickerProps> = ({
  placeholder,
  icon,
  items,
  selectedItem,
  numberOfColumns,
  PickerItemComponent = PickerItemDefaultComponent,
  onSelectItem,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={selectedItem?.color}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder }
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={15}
            color={COLORS.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Screen>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.textClose}>Close</Text>
          </TouchableOpacity>
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                selected={selectedItem == item }
                item={item}
                onPress={() => {
                  setVisible(false);
                  onSelectItem && onSelectItem(item);
                  console.log(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.input,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    padding: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
  buttonClose: {
    backgroundColor: COLORS.input,
    borderRadius: 5,
    marginRight:30,
    marginLeft:30,
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
    marginVertical: 20,
  },
  textClose: {
    fontSize: 15,
    //color:COLORS.white
  },
});

export default AppPicker;

export interface PickerItemDefaultComponentProps {
  item: PickerItem;
  selected?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const PickerItemDefaultComponent: FunctionComponent<
  PickerItemDefaultComponentProps
> = ({ item,selected=false, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles2.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles2 = StyleSheet.create({
  text: {
    padding: 10,
  },
});
