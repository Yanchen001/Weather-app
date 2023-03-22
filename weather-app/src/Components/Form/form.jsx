import "./form.css";

export default function Form() {
  return (
    <>
      <form className="form">
        <h2>Add new activity:</h2>
        <label htmlFor="activity-name">Name:</label>
        <input type="text" name="activity-name" />
        <label htmlFor="good-weather">Good-weather activity:</label>
        <input type="checkbox" name="good-weather" />
        <button type="submit" onAddActivity="">
          Submit
        </button>
      </form>
    </>
  );
}
