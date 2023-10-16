import logo from './logo.svg';
import './App.css';
import Allauth from './Allauth/Allauth';
import Navbar from './components/Navbar/Navbar';
import Login from './Login';
import Theme from './Reduxfile/Theme';
import Map from './Higher_order/Map';
import UseMemo from './useMemo/UseMemo';
import Parent from './useCallback/Parent';
import FetchData from './FetchData/FetchData';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Allauth/> */}
      {/* <Login/> */}
      {/* <Theme/> */}
      {/* <Map/> */}
      {/* <UseMemo/> */}
      {/* <Parent/> */}
      <FetchData/>
    </div>
  );
}

export default App;
