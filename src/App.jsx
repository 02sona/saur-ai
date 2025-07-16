import { HashRouter as Router ,Routes ,Route } from 'react-router-dom';


import './App.css';
 
import Firstsection from './components/Firstsection';

import Secondsection from './components/Secondsection';

import AutoSlider from './components/Autoslider';

import Thirdsection from './components/Thirdsection';

import Fourthsection from './components/Fourthsection';

import Nfts from './components/Nfts';

import Booknowpopup from './components/Booknowpopup'; // import the popup
 
function HomePage() {

  return (
<div className="nfts-saction-one nfts-saction-tow-one">
<Firstsection />
<Secondsection />
<AutoSlider />
<Thirdsection />
<Fourthsection />
</div>

  );

}
 
function App() {

  return (
<Router >
<div style={{ width: '100vw', overflowX: 'hidden' }}>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/nfts" element={<Nfts />} />
<Route path="/book-now" element={<Booknowpopup />} /> {/* new route */}
</Routes>
</div>
</Router>

  );

}
 
export default App;

 