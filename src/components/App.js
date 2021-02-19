import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  useEffect(()=>{
    setBallPosition({
    left: x+"px",
    top: y+"px",
  })},[x,y]);

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
  };

  const renderChoice=()=>{
    if (renderBall) {
      return <div className="ball"
           style={
               {
                   left :x+"px",
                   top:y+"px",

              }}></div>
  } else {
      return <button className="start" onClick={()=>setRenderBall(true)} >Start</button>
  }
  }
  const keyDLogic = (event)=>{
    switch(event.keyCode){
        case 39:{  //right
            setX(x+5);
            break;
        }
        case 40:{ //up
          setY(y+5);
            break;
        }
        case 37:{   //left
          setX(x-5);
            break;
        }
        case 38:{   //down
          setY(y-5);
            break;
        }
        default: break;
    }
}
useEffect(()=>{
  document.addEventListener("keydown",keyDLogic);
  return ()=>document.removeEventListener("keydown",keyDLogic);
},
[]);
useEffect(()=>{
  document.addEventListener("keydown",keyDLogic);
  return ()=>document.removeEventListener("keydown",keyDLogic);
},
[x,y]);
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
