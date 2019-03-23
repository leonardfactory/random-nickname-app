import * as React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Share
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const styles = StyleSheet.create({
  button: {
    width: "60%",
    marginTop: 12
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  gradient: {
    borderRadius: 4,
    padding: 8
  }
});

interface Props extends Omit<TouchableOpacityProps, "color" | "title"> {}

export function CameraButton(props: Props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <LinearGradient colors={["#435ddd", "#435ddd"]} style={styles.gradient}>
        <Text style={styles.buttonText}>📷 Scatta</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
