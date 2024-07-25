import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import {
  setIconArrayVisible,
  setAvatarIconData,
} from "../state/reducers/avatarIconDataSlice";

function AvatarList() {
  const avatarArray = {
    default: "/avatars/placeholder-image.webp",
    sunset: "/avatars/RetroSunset.png",
    sunset2: "/avatars/RetroSunset.png",
    sunset3: "/avatars/RetroSunset.png",
    sunset4: "/avatars/RetroSunset.png",
    sunset5: "/avatars/RetroSunset.png",
    sunset6: "/avatars/RetroSunset.png",
    sunset7: "/avatars/RetroSunset.png",
    sunset8: "/avatars/RetroSunset.png",
    sunset9: "/avatars/RetroSunset.png",
    sunset10: "/avatars/RetroSunset.png",
    sunset11: "/avatars/RetroSunset.png",
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
      const response = await fetch("http://localhost:3000/update-avatar", {
        // const response = await fetch("https://xsjs2s-3000.csb.app/update-avatar", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.email,
          avatarIconData: selectedAvatar,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update avatar");
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  return (
    <div>
      <img
        src={currentIcon}
        alt="current avatar"
        className="w-16 h-16 rounded-full cursor-pointer"
        onClick={handleAvatarClick}
      />
      {iconArrayVisible && (
        <div className="flex flex-row items-center justify-center absolute h-1/4 w-1/5 bg-slate-200 border-2 border-black rounded-2xl flex-wrap overflow-x-auto">
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
