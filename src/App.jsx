import './App.css'
import { useState } from 'react';
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'
import Notes from './components/Notes'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
    {isLoggedIn ?
      <div>
        <Welcome 
          userName={userName}
          setIsLoggedIn={setIsLoggedIn} 
          setUserName={setUserName} 
        /> 
      </div>
      :
      <>
        <LoginForm 
          styleData={{backgroundColor:"black", color:"pink"}} 
          setIsLoggedIn={setIsLoggedIn} 
          setUserName={setUserName} 
        />
        <Notes />
      </>
    }
    </>
  )
}

export default App;
