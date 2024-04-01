import './App.css';
import SlidingImages from './Components/Homepage/SlidingImages';
import Catalog from './Components/Homepage/bestseller_catalog';
import Navbar from './Components/Homepage/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingImages />
      <Catalog />
    </div>
  );
}

export default App;
