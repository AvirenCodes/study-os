import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/Dashboard/Dashboard";
import { Nav } from "./pages/nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div className="text-title text-4xl text-center">Not Found</div>
          }
        />
      </Routes>
      {/* <footer></footer> */}
    </Router>
  );
}
export default App;
