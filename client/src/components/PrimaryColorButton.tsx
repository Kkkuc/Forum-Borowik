interface PrimaryColorButtonInterface {
  value: string;
  clickAction: () => void;
}
const PrimaryColorButton = ({
  value,
  clickAction,
}: PrimaryColorButtonInterface) => {
  return (
    <input
      className="
            px-4 py-2
            text-slate-200
            font-medium
            transition-all duration-200 ease-in-out
            bg-blue-600
            hover:bg-blue-500
            hover:text-white
            hover:shadow-md
            active:scale-95
            rounded-sm"
      value={value}
      type="button"
      onClick={clickAction}
    />
  );
};

export { PrimaryColorButton, type PrimaryColorButtonInterface };
