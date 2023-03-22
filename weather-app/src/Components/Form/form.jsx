import "./form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = e.target.elements;
    const activityName = formData.activityName.value;
    const isForGoodWeather = formData.isForGoodWeather.checked;

    const data = {
      activityName: activityName,
      isForGoodWeather: isForGoodWeather,
    };
    e.target.reset();
    onAddActivity(data);
    formData.activityName.focus();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="name-section">
          <label htmlFor="activityName">Name:</label>
          <input
            type="text"
            name="activityName"
            className="name-input"
            required
          />
        </section>
        <section className="check-section">
          <label htmlFor="isForGoodWeather">Good-weather activity:</label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            className="check-input"
          />
        </section>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
