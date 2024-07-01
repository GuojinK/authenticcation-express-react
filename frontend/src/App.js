import logo from './logo.svg';
import './App.css';
import { googleLogin, profile } from './api/UserAPI';

function App() {

  const google = ()=>{
      googleLogin()
  }
  
  const getProfile = ()=>{
    profile()
  }
  return (
    <div>
      <button onClick={google}>Google</button>
      <button onClick={getProfile}>Profile</button>
    </div>
  );
}

export default App;
