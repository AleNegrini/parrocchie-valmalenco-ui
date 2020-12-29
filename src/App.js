import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/common.css'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Calendar from './pages/Calendar';
import ConfigHandler from './pages/ConfigHandler';

import GoogleFontLoader from 'react-google-font-loader';

import packageJson from '../package.json' ;

function App() {
  return (
    <div className="App">
      <GoogleFontLoader
        fonts={[
          {
            font: 'Cabin',
            weights: [400, 500, 600, 700],
          }
        ]}
      />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Calendar version={packageJson.version}/>}/>
          <Route exact path="/config" component={() => <ConfigHandler version={packageJson.version}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
