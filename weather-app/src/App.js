// import logo from './logo.svg';
import "./App.css";
import Form from "./Components/Form/form";
import List from "./Components/List /list";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect } from "react";

function App() {
  const [activities, setActivity] = useLocalStorageState("activiteis", {
    defaultValue: [],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    console.log(data);
    setWeather(data);
  }

  function handleAddActivity(newActivity) {
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivity(activities.filter((activity) => activity.id !== id));
  }
  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="API-heading">
          <p className="emoji">{weather.condition}</p>
          <p className="temp">{weather.temperature} °C</p>
        </h2>
        <List
          activities={
            weather.isGoodWeather ? goodWeatherActivities : badWeatherActivities
          }
          headline={
            weather.isGoodWeather
              ? "The weather is awsome! Go outside and:"
              : "Bad weather outside! Here is what you can do:"
          }
          onDeleteActivity={handleDeleteActivity}
        />

        <Form onAddActivity={handleAddActivity} />
      </header>
    </div>
  );
}

export default App;
