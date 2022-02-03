import "./app.css";
import Main from "./components/main/Main";
import Mini from "./components/mini/Mini";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Mini />
    </div>
  );
}

export default App;
