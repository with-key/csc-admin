import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global-styles";
import Template from "./components/template/Template";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Template />
      </ThemeProvider>
    </>
  );
}

export default App;
