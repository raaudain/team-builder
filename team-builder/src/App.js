import React, {useState} from 'react';

import './App.css';
import Form from "./components/Form";
import FormTemp from "./components/FormTemp";

function App() {

  const [team, setTeam] = useState([
    {
    id: 0,
    name: "Ramon Audain",
    email: "somewhat@example.com",
    role: "Junior Developer",
    },
    {
      id: 1,
      name: "Some Guy",
      email: "someguy@whosthis.com",
      role: "Senior Engineer",
    },
    {
      id: 2,
      name: "That Lady",
      email: "leavemealone@slajflsajf.com",
      role: "UX Designer"
    }
  ]);

  const addMember = member =>{
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.name,
      role: member.role
    };
    setTeam([...team, newMember]);
  }


  return (
    <div className="App">

      <h1>Team Members</h1><br />
      
      <Form addMember={addMember} />
      <div className="members">
        <FormTemp team={team} />
      </div>
      
        
    </div>
  );
}

export default App;
