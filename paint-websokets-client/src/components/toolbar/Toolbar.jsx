import { useState } from "react";
import canvasStore from "../../store/canvasStore";
import toolStore from "../../store/toolStore";
import {
  ArrowIcon,
  BrushIcon,
  CircleIcon,
  ColorPaleteIcon,
  EraserIcon,
  SaveIcon,
  SquareIcon,
} from "../../svg";
import Brush from "../../tools/Brush";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";
import Rect from "../../tools/Rect";
import c from "./Toolbar.module.scss";
// let classNames = require("classnames/bind");
// let cx = classNames.bind(c);

export const Toolbar = () => {
  const [active, setActive] = useState("brush");

  const activateHandler = (e) => {
    console.log(e);
    setActive(e);
  };

  const changeColorHandler = (e) => {
    toolStore.setStrokeColor(e.target.value);
    toolStore.setFillColor(e.target.value);
  };

  return (
    <div className={c.wrapper}>
      <div className={c.toolbarWrapper}>
        <div className={c.toolbarLeft}>
          <div
            className={active === "brush" ? c.btnActive : c.btn}
            onClick={() => {
              toolStore.setTool(new Brush(canvasStore.canvas));
              activateHandler.call(this, "brush");
            }}
          >
            <BrushIcon className={c.brush} />
          </div>
          <div
            className={active === "rect" ? c.btnActive : c.btn}
            onClick={() => {
              toolStore.setTool(new Rect(canvasStore.canvas));
              activateHandler.call(this, "rect");
            }}
          >
            <SquareIcon className={c.square} />
          </div>
          <div
            className={active === "circle" ? c.btnActive : c.btn}
            onClick={() => {
              toolStore.setTool(new Circle(canvasStore.canvas));
              activateHandler.call(this, "circle");
            }}
          >
            <CircleIcon className={c.circle} />
          </div>
          <div
            className={active === "eraser" ? c.btnActive : c.btn}
            onClick={() => {
              toolStore.setTool(new Eraser(canvasStore.canvas));
              activateHandler.call(this, "eraser");
            }}
          >
            <EraserIcon className={c.eraser} />
          </div>
          <div
            className={c.btn}
            className={active === "line" ? c.btnActive : c.btn}
            onClick={() => {
              toolStore.setTool(new Line(canvasStore.canvas));
              activateHandler.call(this, "line");
            }}
          >
            <div className={c.line}></div>
          </div>
          <div className={c.btn}>
            <input
              type="color"
              className={c.colorPalete}
              onChange={(e) => changeColorHandler(e)}
            />
          </div>
        </div>
        <div className={c.toolbarRight}>
          <div className={c.btn} onClick={() => canvasStore.undo()}>
            <ArrowIcon className={c.arrowBack} />
          </div>
          <div className={c.btn} onClick={() => canvasStore.redo()}>
            <ArrowIcon className={c.arrowForward} />
          </div>
          <div className={c.btn}>
            <SaveIcon className={c.save} />
          </div>
        </div>
      </div>
    </div>
  );
};
