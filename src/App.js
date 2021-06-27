import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/container/Container";
function App() {
  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
