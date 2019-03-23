import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "../../utils/StyleSheet";
import { RNCamera } from "react-native-camera";
import { ToolbarButton } from "./ToolbarButton";
import { useCameraContext } from "./CameraContext";
import { NavigationScreenProps } from "react-navigation";

interface Props extends NavigationScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "space-between",
    alignItems: "center"
  },
  toolbar: {
    flex: 0,
    paddingTop: 30,
    flexDirection: "row",
    alignContent: "space-between"
  },
  toolbarSide: {
    flex: 0,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
    paddingHorizontal: 18,
    margin: 20
  },
  captureBar: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
    margin: 20
  }
});

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#0984e3",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const flashModes = [
  RNCamera.Constants.FlashMode.auto,
  RNCamera.Constants.FlashMode.off,
  RNCamera.Constants.FlashMode.on
];

const flashIcons = {
  [RNCamera.Constants.FlashMode.auto]: "AUTO",
  [RNCamera.Constants.FlashMode.on]: "📸",
  [RNCamera.Constants.FlashMode.off]: "📷"
};

export function CameraScene(props: Props) {
  const cameraContext = useCameraContext();

  const [side, setSide] = useState(RNCamera.Constants.Type.front);
  const handleSide = () => {
    setSide(
      side === RNCamera.Constants.Type.front
        ? RNCamera.Constants.Type.back
        : RNCamera.Constants.Type.front
    );
  };

  const [mirror, setMirror] = useState(true);
  const handleMirror = () => {
    setMirror(!mirror);
  };

  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.auto);
  const handleFlash = () => {
    const index = flashModes.indexOf(flash);
    setFlash(flashModes[(index + 1) % flashModes.length]);
  };

  const takePicture = async (camera: any) => {
    const options = { quality: 0.5, base64: true, mirrorImage: mirror };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line

    cameraContext.setBase64Image(data.base64);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        captureAudio={false}
        type={side}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={"Pinologram"}
        permissionDialogMessage={"Ti fai fa una foto, influencer?"}
      >
        {({ camera, status }) => {
          if (status !== "READY") return <PendingView />;

          return (
            <>
              <View style={styles.toolbar} />
              <View style={styles.captureBar}>
                <ToolbarButton text="🔄" type="capture" onPress={handleSide} />
                <ToolbarButton
                  text="📷"
                  type="capture"
                  onPress={() => takePicture(camera)}
                />

                <ToolbarButton
                  text={mirror ? "↔️" : "➡️"}
                  type="capture"
                  onPress={handleMirror}
                />
              </View>
            </>
          );
        }}
      </RNCamera>
    </View>
  );
}
