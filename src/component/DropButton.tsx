import React from "react";

interface Props {
  onClick: () => void;
}

export default function DropButton({ onClick }: Props) {
  return <button onClick={onClick}>ถอน</button>;
}
