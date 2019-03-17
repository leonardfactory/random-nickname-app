import * as React from "react";
import { NavigatorIOS } from "react-native";
import { PickerScene } from "../picker/PickerScene";

export interface AppNavigationProps {}

export function AppNavigation(props: AppNavigationProps) {
  return <PickerScene />;
}
