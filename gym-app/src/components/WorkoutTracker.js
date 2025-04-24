import { useState } from "react";
import "../css/WorkoutTracker.css";

export default function WorkoutTracker({ workout, exercises = [], onClose }) {

  const [data, setData] = useState(() =>
    exercises.reduce((acc, ex) => {
      acc[ex.id] = [{ weight: "", reps: "" }];
      return acc;
    }, {})
  );

  const handleChange = (exId, setIdx, field, value) => {
    setData((prev) => {
      const updated = [...prev[exId]];
      updated[setIdx][field] = value;
      return { ...prev, [exId]: updated };
    });
  };

  const addSet = (exId) => {
    setData((prev) => ({
      ...prev,
      [exId]: [...prev[exId], { weight: "", reps: "" }],
    }));
  };

  const handleSave = () => {
    console.log("Workout logged:", data);
    onClose();
  };

  return (
    <div className="workout-tracker-popup">
      <h2 className="text-2xl mb-4">{workout.name}</h2>

      {exercises.map((ex) => (
        <div className="exercise-section" key={ex.id}>
          <h3>{ex.name} ({ex.type})</h3>
          {data[ex.id].map((set, idx) => (
            <div className="set-row" key={idx}>
              <input
                type="number"
                placeholder="Weight"
                value={set.weight}
                onChange={(e) =>
                  handleChange(ex.id, idx, "weight", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) =>
                  handleChange(ex.id, idx, "reps", e.target.value)
                }
              />
            </div>
          ))}
          <button onClick={() => addSet(ex.id)}>+ Add Set</button>
        </div>
      ))}

      <button onClick={handleSave} className="save-button">
        Save Workout
      </button>
    </div>
  );
}
