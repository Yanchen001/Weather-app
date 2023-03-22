// import logo from './logo.svg';
import "./App.css";
import Form from "./Components/Form/form";
import List from "./Components/List /list";
import { useState } from "react";
import {uid} from "uid";

function App() {
  const [activities, setActivity] = useState([]);
  //const [list, setList] = useState([]);



  function handleAddActivity(newActivity) {
    setActivity([...activities, {...newActivity, id:uid()}]);

  }
  // function handleShowActivity(newList){
  //   setList([...list,])
  // }

  
  console.log(activities);
  return (
    <div className="App">
      <header className="App-header">
        <List activities = {activities}/>
        <Form onAddActivity={handleAddActivity} />
      </header>
    </div>
  );
}

export default App;
