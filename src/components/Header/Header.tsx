import "./Header.css";
import LinkButton from "../Buttons/LinkButton";
import { MouseEventHandler } from "react";

type HeaderProps = {
  handleModalOpen: MouseEventHandler<HTMLButtonElement>;
};

export function Header({ handleModalOpen }: HeaderProps) {
  return (
    <header className="header">
      <div className="headerDiv">
        <LinkButton linkUrlBtn="/">LOGO</LinkButton>
      </div>
    </header>
  );
}
