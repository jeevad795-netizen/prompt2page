import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import ChallengeSelection from './pages/ChallengeSelection';
import Workspace from './pages/Workspace';
import { ParticipantData, ChallengeData } from './types';

function App() {
  const [participant, setParticipant] = useState<ParticipantData | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeData | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            participant ? 
              <Navigate to="/challenges" /> : 
              <Login onLogin={setParticipant} />
          } 
        />
        <Route 
          path="/challenges" 
          element={
            participant ? 
              <ChallengeSelection 
                participant={participant} 
                onSelectChallenge={(challenge) => {
                  setSelectedChallenge(challenge);
                }}
              /> : 
              <Navigate to="/" />
          } 
        />
        <Route 
          path="/workspace" 
          element={
            participant && selectedChallenge ? 
              <Workspace 
                participant={participant} 
                challenge={selectedChallenge} 
              /> : 
              <Navigate to="/" />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
