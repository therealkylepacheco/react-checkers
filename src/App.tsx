import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/AppContainer";
import GameContainer from "./components/GameContainer";
import Controls from "./components/Controls";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <AppContainer>
      <Header />
      <GameContainer>
        <Controls />
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </GameContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
