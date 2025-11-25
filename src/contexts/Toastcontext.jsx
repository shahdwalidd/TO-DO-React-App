import { createContext, useState } from "react";
import Mysnackbar from "../components/Mysnackbar";

// eslint-disable-next-line react-refresh/only-export-components
export const Toastcontext = createContext();

export const Toastprovider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <Toastcontext.Provider value={{ open, message, showHideToast }}>
          <Mysnackbar open={open} message={message}/>
      {children}
    </Toastcontext.Provider>
  );
};
