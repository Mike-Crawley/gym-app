import PopupButton from "../components/PopupButton";
import "../css/Workouts.css"

export default function Workouts() {

    // Change this later from a database of exersises
    const popupsData = [
        {
          triggerText: "Workout 1",
          variant: "default",
          buttonSize: "medium",
          buttonShape: "rounded",
          content: (
            <>
              <h2>Popup 1</h2>
              <p>This is the first popup</p>
            </>
          ),
        },
        {
          triggerText: "Workout 2",
          variant: "default",
          buttonSize: "medium",
          buttonShape: "rounded",
          content: (
            <>
              <h2>Popup 2</h2>
              <p>This is the second popup</p>
            </>
          ),
        },
        {
          triggerText: "Workout 3",
          variant: "default",
          buttonSize: "medium",
          buttonShape: "rounded",
          content: (
            <>
              <h2>Popup 3</h2>
              <p>This is the third popup</p>
            </>
          ),
        },
        {
          triggerText: "Workout 4",
          variant: "default",
          buttonSize: "medium",
          buttonShape: "rounded",
          content: (
            <>
              <h2>Popup 4</h2>
              <p>This is the fourth popup</p>
            </>
          ),
        },
        {
            triggerText: "Workout 5",
            variant: "default",
            buttonSize: "medium",
            buttonShape: "rounded",
            content: (
              <>
                <h2>Popup 4</h2>
                <p>This is the fourth popup</p>
              </>
            ),
          },
          {
          triggerText: "Workout 6",
          variant: "default",
          buttonSize: "medium",
          buttonShape: "rounded",
          content: (
            <>
              <h2>Popup 4</h2>
              <p>This is the fourth popup</p>
            </>
          ),
        },
      ];


  return (
    <div className="p-4">
      <h1>Workouts</h1>

      <PopupButton triggerText="Create New Workout" variant="fullscreen" buttonSize="large" buttonShape="rounded">
            <p>This is a custom popup modal!</p>
            <p>You can put anything inside here.</p>
        </PopupButton>

      {/* Popup List Container for Grid Layout */}
      <div className="popup-list">
        {popupsData.map((popup, index) => (
          <PopupButton
            key={index}
            triggerText={popup.triggerText}
            variant={popup.variant}
            buttonSize={popup.buttonSize}
            buttonShape={popup.buttonShape}
          >
            {popup.content}
          </PopupButton>
        ))}
      </div>
    </div>
  );
}