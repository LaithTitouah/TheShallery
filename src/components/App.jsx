import './css/App.css';
import React, { useState } from "react";
import Header from './Header';
import {useAuthentication } from '../services/authService';
import ViewFavorites from './ViewFavorites';
import VisitOther from './ViewOther';


export default function App() {
  const user = useAuthentication();

  return (
    <>
      <Header user={user} />
      <ViewFavorites user={user} />
      <VisitOther />
    </>
  );
}
