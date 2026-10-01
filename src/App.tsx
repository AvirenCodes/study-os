import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { Sidebar } from "./pages/sidebar";

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes >
        <Route path="/" element={<Dashboard />} />
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
