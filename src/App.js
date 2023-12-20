import LeftBar from "./components/LeftBar/LeftBar";
import MainBar from "./components/MainBar/MainBar";
import Navbar from "./components/Navbar/Navbar";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <LeftBar />
        <MainBar />
      </div>
    </div>
  );
}

export default App;
