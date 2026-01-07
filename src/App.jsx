import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showAutoCloseToast = () => {
    toast("This message will close automatically.", {
      autoClose: 3000,
      pauseOnHover: true,
    });
  };

  const showPersistentToast = () => {
    toast("This message stays until you close it.", {
      autoClose: false,
      closeButton: true,
    });
  };

  const showDraggableToast = () => {
    toast("You can drag or dismiss this toast.", {
      draggable: true,
    });
  };

  return (
    <div>
      <button onClick={showAutoCloseToast}>Auto-close Toast</button>
      <button onClick={showPersistentToast}>Persistent Toast</button>
      <button onClick={showDraggableToast}>Draggable Toast</button>

      <ToastContainer />
    </div>
  );
}

export default App;
