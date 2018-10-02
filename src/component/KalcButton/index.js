import React from 'react';

const KalcButton = ({onClickButton,onClearPerhitungan,onDelPerhitungan}) => 
   <div className="button-section">
     <div className="row-button" className="row-button">
     <button onClick={() => onClickButton("1")}>1 </button>
     <button onClick={() => onClickButton("2")}>2 </button>
     <button onClick={() => onClickButton("3")}>3 </button>
     </div>
     <div className="row-button">
     <button onClick={() => onClickButton("4")}>4 </button>
     <button onClick={() => onClickButton("5")}>5 </button>
     <button onClick={() => onClickButton("6")}>6 </button>
     </div>
     <div className="row-button">
     <button onClick={() => onClickButton("7")}>7 </button>
     <button onClick={() => onClickButton("8")}>8 </button>
     <button onClick={() => onClickButton("9")}>9 </button>
     </div>
     <div className="row-button">
      <button onClick={() => onClickButton("0")}>0</button>
      <button onClick={() =>  onDelPerhitungan()}>del</button>
      <button  onClick={() => onClickButton("+")}>+</button>
     </div>
     <div className="row-button-side">
     <button className="row-button-side" onClick={() => onClickButton("*")}>* </button>
     <button className="row-button-side" onClick={() => onClickButton("-")}>- </button>
     <button className="row-button-side" onClick={() => onClickButton("/")}>/</button>
     </div>
   </div>
    ;
export default KalcButton;
