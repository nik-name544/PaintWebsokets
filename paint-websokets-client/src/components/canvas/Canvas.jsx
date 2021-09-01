import c from "./Canvas.module.scss";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import canvasStore from "../../store/canvasStore";
import toolStore from "../../store/toolStore";
import Brush from "../../tools/Brush";

export const Canvas = observer(() => {
  const [w, setW] = useState(600);
  const [h, setH] = useState(400);
  const canvasRef = useRef();

  useEffect(() => {
    canvasStore.setCanvas(canvasRef.current);
    toolStore.setTool(new Brush(canvasRef.current));
    const { innerWidth: width, innerHeight: height } = window;
    setW((width / 100) * 80);
    setH((height / 100) * 70);
  }, []);

  const onMouseDownHandler = () => {
    canvasStore.pushToUndo(canvasRef.current.toDataURL());
  };

  return (
    <div className={c.canvas}>
      <canvas
        width={w}
        height={h}
        ref={canvasRef}
        onMouseDown={() => {
          onMouseDownHandler();
        }}
      />
    </div>
  );
});
