import './App.css';
import Header from './Header';
import { login, logout, useAuthentication } from '../services/authService';
import ViewFavorites from './ViewFavorites';
import Overlay from './SearchOverlay';

export default function App() {
  const user = useAuthentication();

  return (
    <>
      <Header user={user} />
      <ViewFavorites />
    </>
  );
}
