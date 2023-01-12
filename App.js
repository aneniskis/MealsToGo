import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme/index";

import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";

const firebaseConfig = {
  apiKey: "AIzaSyB-MLYRxnLLWYVH9RB7g-7nmK0Nn3oojd8",
  authDomain: "mealstogo-aa8e1.firebaseapp.com",
  projectId: "mealstogo-aa8e1",
  storageBucket: "mealstogo-aa8e1.appspot.com",
  messagingSenderId: "586343985634",
  appId: "1:586343985634:web:945025510af7be402c09bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
