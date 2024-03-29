export default function StackSvgLogo() {
  const stackList = ["Javascript", "Typescript", "React"];

  return (
    <div>
      <ul className="stackList">
        {stackList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
