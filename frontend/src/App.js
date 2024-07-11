import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { useAuth } from './hook/useAuth';

function App() {
  const {isLoggedIn} = useAuth()
  return (
    <div>
      {isLoggedIn? <div>User logged in <Profile/></div>: <Home/>}
    </div>
  );
}

export default App;
