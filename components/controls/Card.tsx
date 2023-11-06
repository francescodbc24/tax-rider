import * as React from "react";
import { FunctionComponent, PropsWithChildren } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleProp,
} from "react-native";

import AppText from "./AppText";
import { COLORS } from "../../theme";
import { ViewStyle } from "react-native";

interface CardProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  color?:string;
  padding?:number;
  style?:StyleProp<ViewStyle>
}

const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({
  onPress,
  color = "white",
  padding=0,
  children,
  style
}) => {
  //console.log("url " + imageUrl);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card,style]}>
        <View style={[styles.detailContainer,{padding:padding}]}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    padding:0,
    margin:0,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: COLORS.input,
    marginBottom: 0,
    overflow: "hidden",
    shadowColor: "grey",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1.41,

    elevation: 2,
  },
  detailContainer: {
    padding: 0,
    margin:0
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Card;
