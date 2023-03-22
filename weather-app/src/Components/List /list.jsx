export default function List({activities, onDeleteActivity}) {
  return (
    <div>
      {(activities ?? []).map((activity) => (
        <li key={activity.id}>{activity.activityName}
          <button
          onClick={()=> onDeleteActivity?.(activity)}>x</button>
        </li>)
      
      )}

      
    </div>
  );
}
