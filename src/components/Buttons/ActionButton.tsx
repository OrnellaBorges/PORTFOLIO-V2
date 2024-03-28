type ActionButtonPropsType = {
  buttonName: "string";
  type: "submit" | "reset" | "button";
  event?: () => void;
};

export default function ActionButton({
  type,
  buttonName,
  event,
}: ActionButtonPropsType) {
  return (
    <button className="button" type={type} onClick={event}>
      {buttonName}
    </button>
  );
}
