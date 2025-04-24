import { useState } from "react";
import lifts from "../data/lifts.json";
import "../css/SelectableList.css"

export default function SelectableContent({ onSave }) {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const saveSelection = () => {
    console.log("Saved:", selected);
    localStorage.setItem("selectedDays", JSON.stringify(selected));
    onSave();
  };

  return (
    <div>
      <h1>Pick your workouts</h1>

      <div className="exersise-list">
        {lifts.map((lift) => (
          <div
            key={lift.id}
            onClick={() => toggleSelect(lift.id)}
            className="exercise-item"
          >
            <span>{lift.name} ({lift.type})</span>
            {selected.includes(lift.id) && <span>✔</span>}
          </div>
        ))}
      </div>

      <button
        onClick={saveSelection}
      >
        Save
      </button>
    </div>
  );
}