// import logo from './logo.svg';
import "./App.css";
import Form from "./Components/Form/form";
import List from "./Components/List /list";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState([]);

  function handleAddActivity(newActivity) {
    setActivity([...activity, newActivity]);
  }
  console.log(activity);
  return (
    <div className="App">
      <header className="App-header">
        <List />
        <Form onAddActivity={handleAddActivity} />
      </header>
    </div>
  );
}

export default App;
