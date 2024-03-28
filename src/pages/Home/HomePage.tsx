import { Link } from "react-router-dom";
import homeImage from "../../assets/welcome-image.png";
import "./HomeStyle.css";

export function HomePage() {
  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <p className="geetingMessage">Hello I'm</p>
        <h1 className="title-level1">Ornella Borges</h1>
        <p className="jobName">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </section>
    </main>
  );
}
