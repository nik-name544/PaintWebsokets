import { Canvas } from "../../components/canvas/Canvas";
import { SettingsBar } from "../../components/settingsBar/SettingsBar";
import { Toolbar } from "../../components/toolbar/Toolbar";

const MainPage = () => {
  return (
    <>
      <Toolbar />
      <SettingsBar />
      <Canvas />
    </>
  );
};

export default MainPage;
