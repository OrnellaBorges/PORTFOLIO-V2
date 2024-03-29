import SvgIcon from "../../components/SVG/SvgIcon";
import "./HomeStyle.css";

export function HomePage() {
  return (
    <section className="section-welcome">
      <small className="greetingMessage">Hello I'm</small>
      <h1 className="title-level1">Ornella Borges</h1>
      <small className="jobName">Fullstack Developer</small>

      <SvgIcon name="nodejs" />

      {/* <StackSvgLogoTest /> */}
    </section>
  );
}
