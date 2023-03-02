import './index.css';
import {Outlet} from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
        <div className="layoutHeader">
            <Header/>
        </div>
        <div className="layoutBody">
            <Outlet/>
        </div>
    </div>
  );
}

export default App;
