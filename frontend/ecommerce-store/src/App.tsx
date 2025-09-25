import { ThemeProvider } from "@mui/material";
import { customeTheme } from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
