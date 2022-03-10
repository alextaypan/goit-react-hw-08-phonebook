import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Container from "./components/Container/Container";
import authOperations from "./redux/auth/auth-operations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-page" */)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /* webpackChunkName: "register-page" */
  )
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /* webpackChunkName: "login-page" */)
);
const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /* webpackChunkName: "contacts-page" */
  )
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUserData = useSelector(authSelectors.getIsRefreshingData);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUserData && (
      <Container>
        <AppBar />
        <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
