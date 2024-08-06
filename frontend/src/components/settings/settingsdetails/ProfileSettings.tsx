import { useAppSelector } from "../../../hooks/useReduxState";

function ProfileSettings() {
  const user = useAppSelector((state) => state.userData.userData);

  return (
    <div className="h-full">
      <div className="flex border-b-2 justify-center p-5 text-2xl w-full font-bold underline-offset-4 underline">
        <h1>Profile Settings</h1>
      </div>
      <div className="h-5/6 flex flex-col p-5 justify-evenly">
        <div>
          <h2 className="text-2xl font-bold">Name</h2>
          <div className="flex flex-row gap-2">
            <p>{user.name}</p>
            <p className="text-blue-500">Update</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Email Address</h2>
          <div className="flex flex-row gap-2">
            <p>{user.email}</p>
            <p className="text-blue-500">Update</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Password</h2>
          <div className="flex flex-row gap-2">
            <p>●●●●●●●●●●</p>
            <p className="text-blue-500">Update</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Local Timezone</h2>
          <div className="flex flex-row gap-2">
            <p>UTC</p>
            <p className="text-blue-500">Update</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
