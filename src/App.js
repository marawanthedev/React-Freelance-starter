import { Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import "./sass/main.scss";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}></Route>
    </div>
  );
}

export default App;
