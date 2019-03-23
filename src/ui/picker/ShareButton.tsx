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

interface Props
  extends Omit<TouchableOpacityProps, "color" | "title" | "onPress"> {
  nickname: string;
}

export function ShareButton(props: Props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Ciao ${props.nickname}`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TouchableOpacity style={styles.button} {...props} onPress={onShare}>
      <LinearGradient colors={["#435ddd", "#435ddd"]} style={styles.gradient}>
        <Text style={styles.buttonText}>Condividi...</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
