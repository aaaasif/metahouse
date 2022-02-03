import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import StoryLine from './Components/StoryLine/StoryLine';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/storyline" element={<StoryLine/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
