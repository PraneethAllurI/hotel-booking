import Home from './Home';
import Header from './Header';
import './App.css';
import Footer from './Footer'
import SearchPage from './SearchPage'
import UniqueStays from './UniqueStays'
import Amenties from './Amenties'
import TopHotels from './TopHotels'
import Novotel from './Novotel'
import Falaknama from './Falaknama'
import TajMahal from './TajMahal'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowDetails from './ShowDetails';
import Store from './Store'
import Confirm from './Confirm';

function App() {
  return (
    <div className="App">
      <Store>
        <Router>

          <Header />

          <Switch>
            <Route path="/search" component={SearchPage} />
            <Route path="/unique" component={UniqueStays} />
            <Route path="/amenties" component={Amenties} />
            <Route path="/tophotels" component={TopHotels} />
            <Route path="/novotel" component={Novotel} />
            <Route path="/falaknama" component={Falaknama} />
            <Route path="/tajmahal" component={TajMahal} />
            <Route path="/booking" component={ShowDetails} />
            <Route path="/confirm" component={Confirm} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />

        </Router>
      </Store>

    </div>
  );
}

export default App;
