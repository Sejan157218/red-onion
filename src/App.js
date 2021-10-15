import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path='/' component={Home}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
