import "./list.css";

export default function List({ headline, activities, onDeleteActivity }) {
  return (
    <div>
      <h2 className="list-headline">{headline}</h2>
      {(activities ?? []).map((activity) => (
        <li key={activity.id} className="li">
          {activity.activityName}
          <button
            onClick={() => onDeleteActivity(activity.id)}
            className="del-button"
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}
