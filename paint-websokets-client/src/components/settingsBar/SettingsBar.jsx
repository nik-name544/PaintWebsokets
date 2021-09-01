import toolStore from "../../store/toolStore";
import c from "./SettingsBar.module.scss";

export const SettingsBar = () => {
  return (
    <div className={c.wrapper}>
      <label htmlFor="line-width" className={c.label}>
        line width
      </label>
      <input
        type="number"
        min={1}
        defaultValue={1}
        max={50}
        id="line-width"
        onChange={(e) => toolStore.setLineWidth(e.target.value)}
      />
      <label htmlFor="stroke-color" className={c.label}>
        stroke color
      </label>
      <input
        type="color"
        id="stroke color"
        onChange={(e) => toolStore.setStrokeColor(e.target.value)}
      />
    </div>
  );
};
