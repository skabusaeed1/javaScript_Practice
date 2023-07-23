import logo from './logo.svg';
import './App.css';
import Allauth from './Allauth/Allauth';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allauth/>
    </div>
  );
}

export default App;
