import PlayingScreen from "./Components/PlayingScreen";
import TopBar from "./Components/TopBar";
import { LevelProvider } from "./Context/LevelContext";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto [width:clamp(20rem,30rem,100vw)]">
          <LevelProvider>
            <TopBar />
            <PlayingScreen />
          </LevelProvider>
        </div>
      </div>
    </>
  );
}

export default App;
