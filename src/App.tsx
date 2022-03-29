import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Gnb from "./components/gnb";

function App() {
  const element = useRoutes(routes);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {element}
    </QueryClientProvider>
  );
}

export default App;
