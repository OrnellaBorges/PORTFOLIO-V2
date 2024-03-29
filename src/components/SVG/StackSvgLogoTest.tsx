import { SvgData2 } from "../../api/svgData2";
import SvgComponent from "./SvgComponent";

export default function StackSvgLogoTest() {
  return (
    <ul className="stackList-container">
      {SvgData2.map((svg) => (
        <li key={svg.id} className="stackList-svgItem">
          <SvgComponent svgContent={svg.svgContent} />
          {/* <div dangerouslySetInnerHTML={{ __html: svg.svgContent }} /> */}
        </li>
      ))}
    </ul>
  );
}
