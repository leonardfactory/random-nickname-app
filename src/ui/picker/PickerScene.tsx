import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { PickButton } from "./PickButton";
import { useState, useMemo, useEffect } from "react";
import { RandomNicknamePicker } from "../../generator/RandomNicknamePicker";
import { NicknameView } from "./NicknameView";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "../../utils/StyleSheet";
import { ShareButton } from "./ShareButton";

const styles = StyleSheet.create({
  intro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 80,
    textTransform: "uppercase"
  }
});

export interface PickerSceneProps {}

export function PickerScene(props: PickerSceneProps) {
  const [picker, setPicker] = useState<RandomNicknamePicker>();
  const [nickname, setNickname] = useState("pinolo");

  useEffect(() => {
    const loadPicker = async () => {
      const pickerInstance = await RandomNicknamePicker.prepare();
      setPicker(pickerInstance);
    };

    loadPicker().catch(e => {
      throw e;
    });
  }, []);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={["#6c5ce7", "#0984e3"]}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {picker && (
          <TouchableWithoutFeedback
            style={{
              flex: 1,
              width: "100%"
            }}
            onPress={e => {
              setNickname(picker.pickOne());
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
              }}
            >
              <Text style={styles.intro}>Il soprannome di oggi</Text>
              <NicknameView nickname={nickname} />
              <PickButton
                onPress={e => {
                  setNickname(picker.pickOne());
                }}
              />
              <ShareButton nickname={nickname} />
            </View>
          </TouchableWithoutFeedback>
        )}
        {!picker && <Text>Carico..</Text>}
      </View>
    </LinearGradient>
  );
}
