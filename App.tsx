import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { RobotoSlab_600SemiBold } from "@expo-google-fonts/roboto-slab";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./navigation";

export const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_600SemiBold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Prevent rendering until the font has loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
