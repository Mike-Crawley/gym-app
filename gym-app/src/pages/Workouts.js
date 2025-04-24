import { useState } from "react";

import PopupButton from "../components/PopupButton";
import SelectableList from "../components/SelectableList";
import WorkoutTracker from "../components/WorkoutTracker"
import "../css/Workouts.css"
import "../css/SelectableList.css"

import workouts from "../data/workouts.json";
import lifts from "../data/lifts.json";

export default function Workouts() {

  const [activeWorkoutId, setActiveWorkoutId] = useState(null);

  const handleStart = (closePopup, workoutId) => {
    closePopup();
    console.log(workoutId)
    setActiveWorkoutId(workoutId);
  };

  const makeActiveWorkout = (workoutId) => {
    return workouts[workoutId].lifs.map((id) => lifts[id])
  }

  return (
    <div className="p-4">
      <div className="workouts-body">
        <h1>Workouts</h1>

        <PopupButton
          triggerText="Create New Workout"
          variant="fullscreen"
          buttonSize="medium"
          buttonShape="rounded"
        >
          {(closePopup) => <SelectableList onSave={closePopup} />}
        </PopupButton>

        <div className="popup-list">
          {workouts.map((workout) => (
            <PopupButton
              key={workout.id}
              triggerText={workout.name}
              variant="default"
              buttonSize="medium"
              buttonShape="rounded"
            >
              {(closePopup) => (
                <>
                  <div className="exercise-list">
                    {workout.lifs.map((id) => (
                        <div className="exercise-item">
                      <span key={id}>
                        {lifts[id].name} ({lifts[id].type})
                      </span>
                      </div>
                    ))}
                    </div>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={() => handleStart(closePopup, workout.id)}
                  >
                    Start
                  </button>
                </>
              )}
            </PopupButton>
          ))}
        </div>
        {activeWorkoutId !== null && (
          <WorkoutTracker
            workout={workouts[activeWorkoutId]}
            exercises={makeActiveWorkout(activeWorkoutId)}
            onClose={() => setActiveWorkoutId(null)}
          />
        )}
      </div>
    </div>
  );
}