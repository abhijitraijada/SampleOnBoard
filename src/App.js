import './App.css';
import { SignUpPage } from './pages/signUpPage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <MantineProvider theme={{
        colorScheme: window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
          const newColorScheme = event.matches ? "dark" : "light";
          return newColorScheme
        }),
        colors: {
          purple: ["#F3F0FF", "#E5DBFF", "#D0BFFF", "#B197FC", "#9775FA", "#845EF7", "#7950F2", "#7048E8", "#6741D9", "#5F3DC4"]
        },
        primaryColor: "purple",
        primaryShade: {light: 8, dark: 9},
        fontFamily: "Inter, sans-serif",
        headings: {fontFamily: "Inter, sans-serif"}
      }}
    >
      <SignUpPage/>
    </MantineProvider>
  );
}

export default App;
