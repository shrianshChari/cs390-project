import './styles/normalize.css'
import './styles/App.css';

import React, { StrictMode } from 'react';

import Team from './Team';
import ModalForm from './ModalForm';


function App({ teams }) {
  const [teamList, setTeamList] = React.useState(teams)

  return (
    <div className="App">
      <StrictMode>
        <ModalForm />
      </StrictMode>

      {teamList.map((team, i) => <Team team={team} key={i} />)}
    </div>
  );
}

export default App;
