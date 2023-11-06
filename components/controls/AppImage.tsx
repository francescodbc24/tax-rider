import React, { FunctionComponent } from "react";
import { Image, View, StyleSheet } from "react-native";

interface AppImageProps {
  image: any;
  size?: number;
  backgroundColor?: string;
}

const AppImage: FunctionComponent<AppImageProps> = ({
  image,
  size = 40,
  backgroundColor = "#eeeeee",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: size * 0.7, height: size * 0.7, resizeMode: "contain" }}
        source={{ uri: image }}
      />
    </View>
  );
};

export default AppImage;
