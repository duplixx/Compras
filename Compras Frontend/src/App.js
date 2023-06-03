import './App.css';
import Home from './Pages/home'
import Navbar from '../src/components/navbar'
import {useRoutes} from 'react-router-dom'
import {routes} from '../src/routes' 
const Routes=()=>{
  const element=useRoutes(routes)
  return(
    <div>
      <Navbar/>
      {element}
    </div>
  );
}

function App() {

  return (
    <div className="App">
    <Routes/>
    </div>
  );
}

export default App;
