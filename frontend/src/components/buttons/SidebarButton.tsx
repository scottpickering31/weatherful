export const SidebarButton = ({
  image,
  text,
  onClick,
  AIOutline,
  CurrentTimeFrame,
  stateText,
}: {
  image: string;
  text: string;
  onClick: () => void;
  AIOutline?: boolean;
  CurrentTimeFrame: string;
  stateText: string;
}) => {
  const getBackgroundColor = () => {
    if (AIOutline) {
      return "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700";
    }
    return CurrentTimeFrame === stateText
      ? "bg-gray-600"
      : "bg-gray-500 hover:bg-gray-600";
  };

  return (
    <button
      className={`flex flex-row w-full items-center justify-evenly ${getBackgroundColor()} text-white h-1/5 cursor-pointer transition duration-300`}
      onClick={onClick}
    >
      <img
        src={image}
        style={{ width: "2.5rem", height: "2.5rem" }}
        className="w-2/5"
        alt={text}
      />
      <p className="text-xl w-3/5">{text}</p>
    </button>
  );
};

export default SidebarButton;
