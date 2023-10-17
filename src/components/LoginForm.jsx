import { useState } from 'react';
import axios from 'axios';

const projectID = 'edf8bc55-3170-4d93-882c-43db8c2fde2b';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload(); 
      setError('');
    } catch (err) {
      
      setError(`Oops, incorrect credentials "${username}"`);
     
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
         
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button> 
          </div>
        
        </form>
        <h2 style={{color:'red'}}>{error}</h2>
        <h4>If you dont have login credentials, Please use name: user123, password : user@123 for chekking my work.</h4>
      </div>
    </div>

  );
};

export default Modal;