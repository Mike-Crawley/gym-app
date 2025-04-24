import { useState } from "react";
import "../css/PopupButton.css";

export default function PopupButton({
  triggerText = "Open",
  variant = "default",
  buttonSize = "medium",
  buttonShape = "rounded",
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
        className={`popup-trigger ${variant} ${buttonSize} ${buttonShape}`}
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className={`popup-box ${variant}`}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <div className="popup-content">
              {typeof children === 'function' ? children(closePopup) : children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}