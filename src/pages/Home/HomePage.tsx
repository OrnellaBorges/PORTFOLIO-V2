import StackSvgLogo from "../../components/Logos/StackSvgLogo";
import "./HomeStyle.css";
//import ArrowScroll from "../../components/UI/ArrowScroll";

export function HomePage() {
  return (
    <section className="section-welcome">
      <p className="greetingMessage">Hello I'm</p>
      <h1 className="title-level1">Ornella Borges</h1>
      <p className="jobName">Fullstack Developer</p>
      <StackSvgLogo />
    </section>
  );
}
