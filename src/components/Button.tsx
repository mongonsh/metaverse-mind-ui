import React from "react";

const Button = ({ val }: any) => {
  return (
    <button className="px-2 py-1 border rounded-sm hover:bg-slate-100">
      {val}
    </button>
  );
};

export default Button;
