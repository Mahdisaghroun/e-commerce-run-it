import logo from './logo.svg';
import './App.less'
import CardProduct from './SvgExport/CardProduct';
import LandingPage from './LandingPage/LandingPage'
import Register from './Register/Register'
//import Dashboard from './Dashbord/Dashboard';
import { Container } from '@material-ui/core';
import Client from './ProfileClient/Client';
import ProductsPage from './RouterPages/ProductsPage';
import Routers from './Router/Router';
function App() {
  return (




    <div className="App" id="App">
      <Routers></Routers>

    </div>
  );
}

export default App;
