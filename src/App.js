import React from "react";
import { MyApp } from "./MyApp";
import { JerryApp } from "./MyApp2";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
     <ThemeProvider withToastContainer>
       <MyApp />
     </ThemeProvider>
    </HashRouter>
  );
}

export default App;