import { ThemeProvider,createGlobalStyle } from "styled-components";
import Theme from "./styled/Theme";
import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Router>
    <ThemeProvider theme={Theme}>  
      <GlobalStyles />
      <Route path="/"  />
      <Navbar />
      <Footer />
    </ThemeProvider>
    </Router>
  );
}

export default App;
