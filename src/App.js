import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Routes/Home";
import Details from "./Routes/Details";
function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id"> 
        <Details />
      </Route>
      <Route path="/"> 
        <Home/>
      </Route>
    </Switch>
  </Router>;
}

export default App;