import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { StyleSheet } from "../../utils/StyleSheet";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  button: {
    flex: 0,
    borderRadius: 4,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20
  },
  gradient: {
    borderRadius: 4,
    padding: 8
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
  }
});

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface Props extends Omit<TouchableOpacityProps, "color" | "title"> {
  type: "button" | "capture";
  text?: React.ReactNode;
  children?: any;
}

export function ToolbarButton(props: Props) {
  const text = <Text style={styles.text}>{props.text || props.children}</Text>;

  return (
    <TouchableOpacity style={styles.button} {...props}>
      {props.type === "button" ? (
        text
      ) : (
        <LinearGradient colors={["#ffffff", "#dfe6e9"]} style={styles.gradient}>
          {text}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}
