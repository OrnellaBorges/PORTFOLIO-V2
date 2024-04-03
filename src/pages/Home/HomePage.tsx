import SvgIcon from "../../components/SVG/SvgIcon";
import { SvgData2 } from "../../api/svgData2";
import "./HomeStyle.css";

export function HomePage() {
  return (
    <section className="section-welcome">
      <div className="hello">
        <small className="greetingMessage">Hello I'm</small>
        <h1 className="title-level1">Ornella Borges</h1>
        <small className="jobName">Fullstack Developer</small>
      </div>

      <ul className="svgList">
        {SvgData2.map((icon) => (
          <li key={icon.id} className="svgItem">
            <SvgIcon name={icon.name} />
          </li>
        ))}
      </ul>

      {/* <StackSvgLogoTest /> */}
    </section>
  );
}
