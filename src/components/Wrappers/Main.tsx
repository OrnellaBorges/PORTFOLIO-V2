import "./main.css";

type MainPropsType = {
  children: React.ReactNode;
};

export default function Main({ children }: MainPropsType) {
  return <main className="main">{children}</main>;
}
