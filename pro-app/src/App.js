
import './App.css';
// import {Navbar} from "./components/Navbar/Navbar";
// import {Header} from "./components/Header/Header";
// import {Cards} from "./components/Cards/Cards";

import {Navbar, Header, Cards} from './components/index' //bu sekilde tek bir satirda da import edilebilir. 

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>  
    <Cards/>
    
    </div>
  );
}

export default App;
