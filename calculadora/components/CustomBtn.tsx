import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Pressable, Text } from "react-native";

import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  isCero?: boolean;
}

const CustomBtn: React.FC<Props> = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  isCero = false,
}) => {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => ({
        ...globalStyles.customBtn,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: isCero ? 160 : 75,
      })}
    >
      <Text
        style={{
          ...globalStyles.customBtnText,
          color: blackText ? "black" : Colors.textPrimary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomBtn;
