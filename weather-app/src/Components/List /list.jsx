export default function List({ headline, activities, onDeleteActivity }) {
  return (
    <div>
      <h2>{headline}</h2>
      {(activities ?? []).map((activity) => (
        <li key={activity.id}>
          {activity.activityName}
          <button onClick={() => onDeleteActivity(activity.id)}>X</button>
        </li>
      ))}
    </div>
  );
}
