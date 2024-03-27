import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home";


const App = () => {
  return (
    <Router>
      <div className="w-screen">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
