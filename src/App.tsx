import { Routes, Route } from "react-router-dom";
import InputScreen from "./components/InputScreen";
import NewsScreen from "./components/NewsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputScreen />} />
      <Route path="/news" element={<NewsScreen />} />
    </Routes>
  );
}
export default App;