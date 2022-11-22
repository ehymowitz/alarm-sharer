import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./navigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
