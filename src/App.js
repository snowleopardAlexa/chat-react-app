import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="2d338583-f0c7-4459-bf9f-c2e194b7e410"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        onDeleteChat={(chat) => console.log(chat)}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
