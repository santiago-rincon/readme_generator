import React from "react";

export const MessageError = ({ message }: { message: string }) => {
  return (
    <span className="text-sm text-red-600 font-semibold">
      {message}
    </span>
  );
};
