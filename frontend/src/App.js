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

//================ USERS ==========
const ViewUsers = lazy(() => import("./pages/users/ViewUsers"));
const CreateUser = lazy(() => import("./pages/users/CreateUser"));
const UserDetail = lazy(() => import("./pages/users/UserDetail"));

//================ CONTACTS ==========
const ViewContacts = lazy(() => import("./pages/contacts/ViewContacts"));

//================ BUNDLES ==========
const ViewBundles = lazy(() => import("./pages/dataBundles/ViewBundles"));
const EditBundles = lazy(() => import("./pages/dataBundles/EditBundle"));
const CreateBundle = lazy(() => import("./pages/dataBundles/CreateBundle"));

//================ TRANSACTIONS ==========
const ViewDataTransactions = lazy(()=> import("./pages/transactions/ViewDataTransactions"));
const ViewAirtimeTransactions = lazy(() => import("./pages/transactions/ViewAirtimeTransactions"));


// ========= AIRTIME =================
const SendAirtime = lazy(()=> import("./pages/airtime/SendAirtime"));

// ========= DATA =================
const SendData = lazy(() => import("./pages/data/SendData"));

// ========= VENDOR =================
const ViewVendors = lazy(() => import("./pages/vendor/ViewVendors"));
const CreateVendor = lazy(() => import("./pages/vendor/CreateVendor"));

// ========= VENDOR =================
const CreateComplaint = lazy(() => import("./pages/complaint/CreateComplaint"));
const ViewComplaint = lazy(() => import("./pages/complaint/ViewComplaint"));
const AdminViewComplaint = lazy(() => import("./pages/complaint/AdminViewComplaint"));

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
       <Route path="/dashboard" component={getRole()? AdminDashboard: Dashboard} />
       <Route path="/users" exact component={ViewUsers} />
       <Route path="/users/create" component={CreateUser} />
       <Route path="/users/:id" component={UserDetail} />

       <Route path="/contacts" component={ViewContacts} />

       <Route path="/vendors" component={ViewVendors} exact/>
       <Route path="/vendors/create" component={CreateVendor} exact/>

       <Route path="/vendors/:name" component={ViewBundles} exact/>

        <Route path="/networks/:name" component={ViewBundles} exact/>

        <Route path="/transactions/data" component={ViewDataTransactions} />

        <Route path="/transactions/airtime" component={ViewAirtimeTransactions} />

        <Route path="/airtime" component={SendAirtime} />

        <Route path="/data" component={SendData} />

        <Route path="/bundle/edit/:bundleId" component={EditBundles} exact />
        <Route path="/bundle/create/:networkId/:networkName" component={CreateBundle} />

        <Route path="/complaint/create" exact component={CreateComplaint} />

        <Route path="/complains" exact component={ViewComplaint} />

        <Route path="/complains/admin" exact component={AdminViewComplaint} />

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