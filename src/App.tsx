import logo from "./logo.svg";
import AppContainer from "./components/AppContainer";
import GameContainer from "./components/GameContainer";
import Controls from "./components/Controls";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <AppContainer>
      <Header title="React Checkers" />
      <GameContainer>
        <Controls />
      </GameContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
