import PropTypes from "prop-types";

export const SidebarButton = ({
  image,
  text,
  onClick,
}: {
  image: string;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        style={{ width: "2.5rem", height: "2.5rem" }}
        className="w-2/5"
      />
      <p className="text-slate-200 text-xl w-3/5">{text}</p>
    </button>
  );
};

SidebarButton.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarButton;
