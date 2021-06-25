import './App.css';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import { AdminHomePage } from './pages/AdminHomePage'
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { ListTripsPage } from './pages/ListTripsPage';
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import {CreateTripPage} from './pages/CreateTripPage'
import {TripDetailsPage} from './pages/TripDetailsPage'

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
