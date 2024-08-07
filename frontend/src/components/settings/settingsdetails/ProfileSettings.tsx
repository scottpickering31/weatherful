import { useAppSelector } from "../../../hooks/useReduxState";
import SettingsDetailSections from "./SettingsDetailSections";

function ProfileSettings() {
  const user = useAppSelector((state) => state.userData.userData);

  return (
    <div className="h-full">
      <div className="flex border-b-2 justify-center p-5 text-2xl font-bold underline-offset-4 underline">
        <h1>Profile Settings</h1>
      </div>
      <div className="h-5/6 flex flex-col p-5 justify-evenly">
        <SettingsDetailSections title={"Name"} description={user.name} />
        <SettingsDetailSections
          title={"Email Address"}
          description={user.email}
        />
        <SettingsDetailSections title={"Password"} description={"●●●●●●●●●●"} />
        <SettingsDetailSections title={"Local Timezone"} description="GMT" />
      </div>
    </div>
  );
}

export default ProfileSettings;
