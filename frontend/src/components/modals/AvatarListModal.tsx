import { useAppDispatch, useAppSelector } from "../../hooks/useReduxState";
import {
  setIconArrayVisible,
  setAvatarIconData,
} from "../../state/reducers/iconDataSlice";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

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
    (state) => state.iconData.iconArrayVisible
  );
  const currentIcon = useAppSelector((state) => state.iconData.avatarIconData);

  console.log("currentIcon", currentIcon);

  const user = useAppSelector((state) => state.userData.userData);

  console.log(user);

  const handleAvatarClick = () => {
    dispatch(setIconArrayVisible(!iconArrayVisible));
  };

  const handleIconClick = async (icon) => {
    const selectedAvatar = avatarArray[icon];
    dispatch(setAvatarIconData(selectedAvatar));
    dispatch(setIconArrayVisible(false));

    axios
      .patch(
        "https://xsjs2s-3000.csb.app/api/update-avatar",
        {
          email: user.email,
          avatarIconData: selectedAvatar,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Avatar updated successfully:", response.data);
        toast.success("Avatar updated successfully");
      })
      .catch((error) => {
        console.error("Error updating avatar:", error);
        toast.error("Error updating avatar");
      });
  };

  return (
    <div className="cursor-pointer">
      <Toaster />
      <div className="relative group">
        <img
          src={currentIcon}
          alt="current avatar"
          className="w-16 h-16 rounded-full"
          onClick={handleAvatarClick}
        />
        <div
          onClick={handleAvatarClick}
          className="absolute inset-0 flex items-center rounded-full justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-white text-sm ">Change Avatar</p>
        </div>
      </div>
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
