import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="2d338583-f0c7-4459-bf9f-c2e194b7e410"
        userName="Alexa"
        userSecret="Valencia19"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
