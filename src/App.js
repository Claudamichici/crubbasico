import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListarProductos from './components/Productos/ListarProductos';
import AgregarProducto from './components/Productos/AgregarProducto';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/'>
        <Inicio></Inicio>
       </Route>
       <Route exact path='/productos'>
        <ListarProductos></ListarProductos>
       </Route>
       <Route exact path='/productos/nuevo'>
        <AgregarProducto></AgregarProducto>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
