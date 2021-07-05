import './Style.js';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import { AdminHomePage } from './pages/AdminHomePage'
import { ApplicationFormPage } from './pages/ApplicationFormPage/ApplicationFormPage';
import { ListTripsPage } from './pages/ListTripsPage/ListTripsPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import {CreateTripPage} from './pages/CreateTripPage/CreateTripPage';
import {TripDetailsPage} from './pages/TripDetailsPage';

function App() {
  

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path={"/"}>
        <HomePage/>
        </Route>

        <Route exact path={"/trips/list"}>
        <ListTripsPage/>
        </Route>

        <Route exact path={"/trips/application"}>
        <ApplicationFormPage/>
        </Route>
        
        <Route exact path={"/login"}>
        <LoginPage/>
        </Route>

        <Route exact path={"/admin/trips/list"}>
        <AdminHomePage/>
        </Route>
        
        <Route exact path={"/admin/trips/create"}>
        <CreateTripPage/>
        </Route>

        <Route exact path={"/admin/trips/:id"}>
        <TripDetailsPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
