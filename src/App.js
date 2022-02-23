import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import authOperations from './redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView/HomeView.js'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView.js'));
const LoginView = lazy(() => import('./views/LoginView/LoginView.js'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView.js'));

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
        <ToastContainer position="bottom-left" autoClose={3000} />
      </Container>
    )
  );
}
