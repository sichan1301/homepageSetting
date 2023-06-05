import './App.css';
import  { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalVariableTest from './components/globalVariableTest';
import Hand from './components/hand';
import Only from './components/only';
import History from './components/history';
function App() {
  return (
    <ThemeProvider theme ={theme}>
      <GlobalVariableTest />
      <Hand />
      <Only />
      <History />
    </ThemeProvider>
  );
}

export default App;


