import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
