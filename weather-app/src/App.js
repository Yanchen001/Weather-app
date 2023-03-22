// import logo from './logo.svg';
import "./App.css";
import Form from "./Components/Form/form";
import List from "./Components/List /list";
import { useState } from "react";
import {uid} from "uid";

function App() {
  const [activity, setActivity] = useState([]);

  function handleAddActivity(newActivity) {
    setActivity([...activity, {...newActivity, id:uid()}]);
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
