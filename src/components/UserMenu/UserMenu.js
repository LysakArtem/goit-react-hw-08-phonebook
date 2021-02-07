import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/selectors';
import operations from '../../redux/auth-operations';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
