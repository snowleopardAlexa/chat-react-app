import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = '2d338583-f0c7-4459-bf9f-c2e194b7e410';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
