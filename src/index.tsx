import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/styles";
import { DatesProvider } from "@mantine/dates";
import { ModalsProvider } from "@mantine/modals";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DatesProvider
    settings={{
      locale: "ru",
    }}
  >
    <MantineProvider>
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </DatesProvider>
);
