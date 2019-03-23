import * as React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
import { PickButton } from "./PickButton";
import { useState, useMemo, useEffect } from "react";
import { RandomNicknamePicker } from "../../generator/RandomNicknamePicker";
import { NicknameView } from "./NicknameView";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "../../utils/StyleSheet";
import { ShareButton } from "./ShareButton";
import { NavigationScreenProps } from "react-navigation";
import { CameraButton } from "./CameraButton";
import { useCameraContext } from "../camera/CameraContext";

const styles = StyleSheet.create({
  intro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 80,
    textTransform: "uppercase"
  }
});

export interface PickerSceneProps extends NavigationScreenProps {}

export function PickerScene(props: PickerSceneProps) {
  const [picker, setPicker] = useState<RandomNicknamePicker>();
  const [nickname, setNickname] = useState("pinolo");
  const cameraContext = useCameraContext();
  const isImage = cameraContext.base64image != null;

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
      <ImageBackground
        source={
          cameraContext.base64image
            ? { uri: `data:image/gif;base64,${cameraContext.base64image}` }
            : { uri: "" }
        }
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
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
                  justifyContent: isImage ? "flex-end" : "center",
                  alignItems: "center",
                  width: "100%",
                  paddingBottom: isImage ? 20 : 0
                }}
              >
                {!isImage && (
                  <Text style={styles.intro}>Il soprannome di oggi</Text>
                )}
                <NicknameView onImage={isImage} nickname={nickname} />
                <PickButton
                  onPress={e => {
                    setNickname(picker.pickOne());
                  }}
                />
                <ShareButton nickname={nickname} />
                <CameraButton
                  onPress={e => props.navigation.navigate("Camera")}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          {!picker && <Text>Carico..</Text>}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
