import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import StoryLine from './Components/StoryLine/StoryLine';
import Whitepaper from './Components/Whitepaper/Whitepaper';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/storyline" element={<StoryLine/>} />
          <Route path="/whitepaper" element={<Whitepaper/>} />


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
