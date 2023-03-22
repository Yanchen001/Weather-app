import "./form.css";

export default function Form({onAddActivity}) {

function handleSubmit(e){
  e.preventDefault();

  const formData = e.target.elements
  const activityName = formData.activityName.value
  const isForGoodWeather = formData.isForGoodWeather.checked

 
  const data = {activityName: activityName, isForGoodWeather:isForGoodWeather}

  //onAddActivity(data);
  console.log(data);
}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add new activity:</h2>
        <label htmlFor="activityName">Name:</label>
        <input type="text" name="activityName" />
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input type="checkbox" name="isForGoodWeather" />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
