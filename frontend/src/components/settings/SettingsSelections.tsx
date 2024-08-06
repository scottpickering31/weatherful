import { useAppDispatch } from "../../hooks/useReduxState";
import { setSettingsText } from "../../state/reducers/setSettingsTextSlice";
import { settingSelectionObj } from "../../utils/settingSelectionObj";

function SettingsSelections() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col h-5/6 items-center">
      <div className="flex flex-col w-full h-full justify-evenly items-center">
        {settingSelectionObj.map((data) => (
          <div
            key={data.component}
            onClick={() => dispatch(setSettingsText(data.component))}
            className="flex flex-row gap-2 justify-around h-1/4 w-full items-center cursor-pointer hover:bg-slate-200"
          >
            <h1 className="w-5/6 text-center">{data.name}</h1>
            <p className="bg-slate-100 rounded-full cursor-pointer px-2 text-center">
              ?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsSelections;
