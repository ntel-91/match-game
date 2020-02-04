import React from 'react';
import './css/App.css';
import BoardContainer from './containers/BoardContainer.js'
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div>
      <HeaderContainer />
      <BoardContainer /> 
    </div>
  );
}

export default App;
