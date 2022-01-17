import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
         e.preventDefault();

         const authObject = { 'Project-ID': "2d338583-f0c7-4459-bf9f-c2e194b7e410", 'User-Name': username, 'User-Secret': password }

         try {
           // username, password, => chatengine -> give msgs
           await axios.get('https://api.chatengine.io/chats', { headers: authObject});
        
           // works out -> logged in

           // no need to login again
           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

            window.location.reload();
        }  catch (error) {
           // error -> try with new username...
           setError('Incorrect credentials')
         }
    };

    return (
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Chat App</h1>
               <form onSubmit={handleSubmit}>
                 <input 
                     type="text" 
                     value={username} onChange={(e) => setUsername(e.target.value)} 
                     className="input"
                     placeholder="Username"
                     required
                  />
                  <input 
                     type="password" 
                     value={password} onChange={(e) => setPassword(e.target.value)} 
                     className="input"
                     placeholder="Password"
                     required
                  />
                  <div align="center">
                     <button type="submit" className="button">
                         <span>Chat Now</span>
                     </button>
                  </div>
               </form>
               <div className="credentials">
                   <p>username: Alexa, Captain</p>
                   <p>password: Valencia19</p>
               </div>
               <h1 className="error">{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;
