import './App.css';
import Navbar from "./components/Navbar";
import InputPanel from "./components/InputPanel";

function App(props) {
  return (
    <div className="app-div">
      <Navbar generatePDF={props.generatePDF}/>
      <InputPanel />
    </div>
  );
}

export default App;