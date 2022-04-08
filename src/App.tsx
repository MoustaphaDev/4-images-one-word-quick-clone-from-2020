import PlayingScreen from "./Components/PlayingScreen";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto [width:clamp(20rem,30rem,100vw)]">
          <TopBar />
          <PlayingScreen />
        </div>
      </div>
    </>
  );
}

export default App;
