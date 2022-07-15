/** @format */

import React from "react";

export default function Homepage({
  className,
  msg,
}: {
  className?: string;
  msg?: string;
}) {
  return <div className={className}>{msg}</div>;
}
