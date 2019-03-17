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
  }
});

export interface NicknameViewProps {
  nickname: string;
}

export function NicknameView(props: NicknameViewProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.labelText}>Hey,</Text>
      <Text style={styles.nicknameText}>{props.nickname}!</Text>
    </View>
  );
}
