import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'

import Body from './Body/Body'

function App() {
  return (
    <BrowserRouter>
      <Body></Body>
    </BrowserRouter>
  );
}

export default App;
