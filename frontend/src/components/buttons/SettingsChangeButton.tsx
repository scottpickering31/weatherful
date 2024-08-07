import { useAppDispatch } from "../../hooks/useReduxState";
import { setsettingsChange } from "../../state/reducers/settingsChangeButtonSlice";

function SettingsChangeButton({ title }: { title: string }) {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(setsettingsChange(title))}>
      <button className="text-blue-500">Change</button>
    </div>
  );
}

export default SettingsChangeButton;
