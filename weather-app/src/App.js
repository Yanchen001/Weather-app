// import logo from './logo.svg';
import "./App.css";
import Form from "./Components/Form/form";
import List from "./Components/List /list";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivity] = useLocalStorageState("activiteis", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }

  console.log(activities);

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="App">
      <header className="App-header">
        <List activities={goodWeatherActivities} />
        <Form onAddActivity={handleAddActivity} />
      </header>
    </div>
  );
}

export default App;
