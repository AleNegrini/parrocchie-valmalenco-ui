import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/common.css'

import Sidebar from './components/Sidebar.tsx';

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
      <div className="container-fluid page-body-wrapper">
        <div className="row page-body-wrapper">
          <Sidebar version={packageJson.version}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
