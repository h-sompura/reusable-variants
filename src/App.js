import { ThemeProvider,createGlobalStyle } from "styled-components";
import Theme from "./styled/Theme";

function App() {
  const GlobalStyles = createGlobalStyle`
    *{
      box-sizing:border-box;
      margin:0;
      padding:0;
    }
    body,html {
      height:100%;
      background-color: ${props => props.theme.colors.mainBackground};
      color: ${props => props.theme.colors.textMain};
    }
  `;
  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
      <GlobalStyles />
      <p>Hello!</p>
    </div>
    </ThemeProvider>
  );
}

export default App;
