type SvgPropsType = {
  svgContent: string;
};

export default function SvgComponent({ svgContent }: SvgPropsType) {
  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
}
