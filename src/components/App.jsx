import './App.css';
import Header from './Header';
import { login, logout, useAuthentication } from '../services/authService';
import ViewFavorites from './ViewFavorites';

export default function App() {
  const user = useAuthentication();

  return (
    <>
      <Header user={user} />
      <ViewFavorites user={user}/>
    </>
  );
}
