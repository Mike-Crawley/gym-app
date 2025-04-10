// src/components/Popup.js
import { useState } from "react";
import "../css/PopupButton.css";

export default function PopupButton({
  triggerText = "Open",
  variant = "default",
  buttonSize = "medium",  // Default size is medium
  buttonShape = "rounded",  // Default shape is rounded
  children,
  onClose
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <button
        className={`popup-trigger ${variant} ${buttonSize} ${buttonShape}`} // Apply size and shape dynamically
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-box ${variant}`} onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✕</button>
            <div className="popup-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}