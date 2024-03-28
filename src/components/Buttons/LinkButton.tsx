import React from "react";
import { Link } from "react-router-dom";

type LinkButtonPropType = {
  linkUrlBtn: string;
  children: React.ReactNode;
};

export default function LinkButton({
  linkUrlBtn,
  children,
}: LinkButtonPropType) {
  return (
    <Link to={linkUrlBtn} className="d">
      {children}
    </Link>
  );
}
