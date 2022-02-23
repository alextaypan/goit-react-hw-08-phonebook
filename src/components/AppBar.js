import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navigation />
        <Nav className="ml-auto">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
      </Container>
    </Navbar>
  );
}
