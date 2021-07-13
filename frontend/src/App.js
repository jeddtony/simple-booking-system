import React, { Suspense, lazy, useContext } from "react";
import './App.css';
import {getToken} from './helpers';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getRole } from "./helpers/localStorageHelper";



//================ USERS ==========
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const AdminDashboard = lazy(()=> import("./pages/dashboard/AdminDashbaord"));

// ========= BOOKING =================
const CreateBooking = lazy(() => import("./pages/booking/CreateBooking"));
const ViewBooking = lazy(() => import("./pages/booking/ViewBooking"));

// ========= VEHICLE =================
const CreateVehicle = lazy(() => import("./pages/vehicle/CreateVehicle"));
const ViewVehicles = lazy(() =>  import("./pages/vehicle/ViewVehicles"));

// =========== LOCATION ==============
const CreateLocation = lazy(() => import("./pages/location/CreateLocation"));
const ViewLocations = lazy(() => import("./pages/location/ViewLocations"));

// =========== TRIP ==============
const CreateTrip = lazy(() => import("./pages/trip/CreateTrip"));
const ViewTrips = lazy(() => import("./pages/trip/ViewTrip"));

function App() {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <BrowserRouter basename={baseUrl}>
     <Suspense fallback={<div>Loading...</div>}>
     <Switch>
       <Route path="/" exact component={Login} />
       <Route path="/register" exact component={Register} />
 
       <Route path="/login" exact component={Login} />
       <Authenticated>

        <Route path="/booking/create" exact component={CreateBooking} />

        <Route path="/booking" exact component={ViewBooking} />

        <Route path="/vehicle/create" exact component={CreateVehicle} />

        <Route path="/vehicles" exact component={ViewVehicles} />

        <Route path="/location/create" exact component={CreateLocation} />
        <Route path="/locations" exact component={ViewLocations} />

        <Route path="/trip/create" exact component={CreateTrip} />
        <Route path="/trips" exact component={ViewTrips} />

        </Authenticated>
       </Switch>
       </Suspense>
    </BrowserRouter>
  );
}

export default App;

const Authenticated = ({children}) => {
    let token = getToken();

    return(
      <>
      {token? (
        <>
        {children}
        </>
      ): <Login />}
      </>
    )

}