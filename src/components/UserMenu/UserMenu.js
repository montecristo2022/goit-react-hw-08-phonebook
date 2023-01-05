import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const WelcomeName = useSelector(state => state.auth.user?.name);

  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
      <p className={css.username}>
        Welcome, {WelcomeName ? WelcomeName : 'bro'}
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
