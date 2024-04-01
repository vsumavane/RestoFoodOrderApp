import './App.css';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>Welcome to the Resto Food App</h1>
        <p>Order your favorite food online!</p>
      </div>
    </div>
  );
}

export default App;
