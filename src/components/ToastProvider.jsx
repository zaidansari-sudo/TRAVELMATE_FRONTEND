"use client";

import { Toaster } from "react-hot-toast";

 function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#065f46",
          color: "#fff",
        },
      }}
    />
  );
}
export default ToastProvider