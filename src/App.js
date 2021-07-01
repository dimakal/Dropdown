import './App.scss';
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Dropdown disabled={false} maxWidth={300} />
    </div>
  );
}

export default App;
