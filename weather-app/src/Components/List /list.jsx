

export default function List({activities, onDeleteActivity, headline} ) {

  
  return (
    <div>
      <h2>{headline}</h2>
      
      {(activities ?? []).map((activity) => (
        <li key={activity.id}>{activity.activityName}
          <button
          onClick={()=> onDeleteActivity?.(activity)}>x</button>
        </li>)
      
      )}
     
      
    </div>
  );
}
