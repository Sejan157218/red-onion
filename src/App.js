import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Share/Header/Header';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Pages/Share/Footer/Footer';


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
