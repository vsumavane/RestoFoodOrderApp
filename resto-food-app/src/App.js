import './App.css';
import SlidingImages from './Components/Homepage/SlidingImages';
import Navbar from './Components/Homepage/navbar';
import OrderPage from './Components/Orderpage/orderpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingImages />
      <OrderPage />
    </div>
  );
}

export default App;
