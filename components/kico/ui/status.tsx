import { FaCheck } from "react-icons/fa6";
import { RiLoader2Fill } from "react-icons/ri";
import { MdOutlinePending } from "react-icons/md";

import React from "react";

type BadgeProps = {
  status: "done" | "inProgress" | "pending";
};

export const Status = ({ status }: BadgeProps) => {
  const message =
    status === "done"
      ? "done"
      : status === "inProgress"
      ? "In Progress"
      : "Pending";
  return (
    <div className="flex items-center px-4 py-1 bg-primary rounded text-muted space-x-2">
      {status === "done" ? (
        <FaCheck className="text-sm text-green-500" />
      ) : status === "inProgress" ? (
        <RiLoader2Fill className="text-sm text-orange-500" />
      ) : (
        <MdOutlinePending className="text-sm text-yellow-500" />
      )}
      <div className="tagline">{message}</div>
    </div>
  );
};
