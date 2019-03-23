import * as React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "../../utils/StyleSheet";

const styles = StyleSheet.create({
  view: {
    alignItems: "center"
  },
  labelText: {
    padding: 4,
    fontSize: 34,
    fontWeight: "bold",
    color: "#ffffff"
  },
  nicknameText: {
    padding: 12,
    paddingTop: 0,
    fontSize: 46,
    fontWeight: "bold",
    color: "#ffffff"
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10
  }
});

export interface NicknameViewProps {
  nickname: string;
  onImage: boolean;
}

export function NicknameView(props: NicknameViewProps) {
  const style = (s: any) =>
    props.onImage ? { ...s, ...styles.textShadow } : s;

  return (
    <View style={styles.view}>
      <Text style={style(styles.labelText)}>Hey,</Text>
      <Text style={style(styles.nicknameText)}>{props.nickname}!</Text>
    </View>
  );
}
