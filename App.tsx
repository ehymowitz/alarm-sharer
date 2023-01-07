import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./navigation";
import { registerForPushNotificationsAsync } from "./notifications";

export const queryClient = new QueryClient();

export default function App() {
  // useEffect(() => {
  //   registerForPushNotificationsAsync();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
