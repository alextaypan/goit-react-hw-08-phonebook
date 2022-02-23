import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { Thumb, Avatar, Name } from './UserMenu.styled';
import { Button } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Thumb>
      <Avatar src={avatar} alt="avatar" width="32" />
      <Name >It nice to see you here, {name}!!!</Name>
      <Button type="button" variant="warning" size="sm" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Thumb>
  );
}