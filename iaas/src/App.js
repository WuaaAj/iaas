import logo from './logo.svg';
import Login from './LoginPage';
import Home from './Home';
import {useState} from "react";


function App() {
  const [page, setPage] = useState("login");
  return (
    <div>
      { page == "login"
        ? <Login setPage = {setPage}/>
        : <Home />
      }
    </div>
  );
}

export default App;
