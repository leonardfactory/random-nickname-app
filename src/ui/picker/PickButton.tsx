import * as React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const styles = StyleSheet.create({
  button: {
    width: "60%",
    marginTop: 24
  },
  buttonText: {
    color: "#0984e3",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  },
  gradient: {
    borderRadius: 4,
    padding: 18
  }
});

interface Props extends Omit<TouchableOpacityProps, "color" | "title"> {}

export function PickButton(props: Props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <LinearGradient colors={["#ffffff", "#dfe6e9"]} style={styles.gradient}>
        <Text style={styles.buttonText}>🎲 Un altro!</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
