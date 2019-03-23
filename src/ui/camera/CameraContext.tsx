import React, { useContext, useState } from "react";

interface CameraContext {
  base64image: string | null;
  setBase64Image: (image: string) => void;
}

export const CameraContext = React.createContext<CameraContext>({} as any);

export function CameraContextProvider(props: { children: any }) {
  const [base64image, setBase64Image] = useState(null as string | null);

  const contextValue: CameraContext = {
    base64image,
    setBase64Image
  };
  return (
    <CameraContext.Provider value={contextValue}>
      {props.children}
    </CameraContext.Provider>
  );
}

export function useCameraContext() {
  return useContext(CameraContext);
}
