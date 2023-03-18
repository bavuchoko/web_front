import './index.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <div className="layoutHeader">
            <Header/>
        </div>
        <div className="layoutBody">
            <div className="2xl:w-3/5 xl:w-3/4 w-full xl:px-0 px-5 h-full m-auto">
                <Outlet/>
            </div>
        </div>
    </div>
  );
}

export default App;
