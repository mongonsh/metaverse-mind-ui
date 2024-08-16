import React from "react";

const MessageDialog = ({ isOpen, message, onClose, type }: any) => {
  if (!isOpen) return null;

  const dialogStyles = {
    base: "fixed inset-0 flex items-center justify-center z-50",
    overlay: "fixed inset-0 bg-black opacity-50",
    dialog: "bg-white rounded-lg shadow-lg p-6 max-w-sm w-full",
    header: {
      success: "text-green-600",
      error: "text-red-600",
      info: "text-blue-600",
    },
    button: "mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700",
  };

  return (
    <div className={dialogStyles.base}>
      <div className={dialogStyles.overlay} onClick={onClose}></div>
      <div className={dialogStyles.dialog}>
        <h2 className={"text-gray-800"}>
          {type === "success" && "Амжилт"}
          {type === "error" && "Алдаа"}
          {type === "info" && "Мэдээлэл"}
        </h2>
        <p>{message}</p>
        <button className={dialogStyles.button} onClick={onClose}>
          Хаах
        </button>
      </div>
    </div>
  );
};

export default MessageDialog;
