import * as React from "react";
import { NavigatorIOS, Picker } from "react-native";
import { PickerScene } from "../picker/PickerScene";
import { createStackNavigator } from "react-navigation";
import { CameraScene } from "../camera/CameraScene";

export const AppNavigation = createStackNavigator(
  {
    Picker: PickerScene,
    Camera: CameraScene
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);
