import { useAppDispatch, useAppSelector } from "../../hooks/useReduxState";
import {
  setIconArrayVisible,
  setAvatarIconData,
} from "../../state/reducers/avatarIconDataSlice";
import toast, { Toaster } from "react-hot-toast";

function AvatarList() {
  const avatarArray = {
    default: "/avatars/placeholder-image.webp",
    sunset: "/avatars/RetroSunset.png",
    jedi1: "/avatars/Jedi1.png",
    jedi2: "/avatars/Jedi2.png",
    Wink: "/avatars/wink.png",
    memeface: "/avatars/memeface.png",
    avatar1: "/avatars/Avatar1.png",
    avatar2: "/avatars/Avatar2.png",
    avatar3: "/avatars/Avatar3.png",
    windy: "/avatars/Windy.png",
    smilingsun: "/avatars/SmilingSun.png",
    turtle: "/avatars/Turtle.png",
    kitten: "/avatars/Kitten.png",
    puppy: "/avatars/Puppy.png",
    koala: "/avatars/Koala.png",
  };

  const dispatch = useAppDispatch();
  const iconArrayVisible = useAppSelector(
    (state) => state.avatarIconData.iconArrayVisible
  );
  const currentIcon = useAppSelector(
    (state) => state.avatarIconData.avatarIconData
  );
  const user = useAppSelector((state) => state.userData.userData);

  const handleAvatarClick = () => {
    dispatch(setIconArrayVisible(!iconArrayVisible));
  };

  const handleIconClick = async (icon) => {
    const selectedAvatar = avatarArray[icon];
    dispatch(setAvatarIconData(selectedAvatar));
    dispatch(setIconArrayVisible(false));
    try {
      // const response = await fetch("http://localhost:3000/update-avatar", {
        const response = await fetch(
          "https://xsjs2s-3000.csb.app/update-avatar",
          {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          avatarIconData: selectedAvatar,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update avatar");
      }
      const result = await response.json();
      console.log("Avatar updated successfully:", result);
      toast.success("Avatar updated successfully");
    } catch (error) {
      console.error("Error updating avatar:", error);
      toast.error("Error updating avatar");
    }
  };

  return (
    <div>
      <Toaster />
      <img
        src={currentIcon}
        alt="current avatar"
        className="w-16 h-16 rounded-full cursor-pointer"
        onClick={handleAvatarClick}
      />
      {iconArrayVisible && (
        <div className="flex flex-row items-center justify-center absolute h-1/4 w-1/5 bg-slate-200 border-2 border-black rounded-2xl flex-wrap overflow-x-auto z-10">
          {Object.keys(avatarArray).map((key) => (
            <img
              key={key}
              src={avatarArray[key]}
              alt={key}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={() => handleIconClick(key)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AvatarList;
