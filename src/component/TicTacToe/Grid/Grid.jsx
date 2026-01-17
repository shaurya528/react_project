import { useState } from "react";
import Card from "../Card/Card";
function iswinner(boad, symbol) {
  if (boad[0] == boad[1] && boad[1] == boad[2] && boad[2] == symbol)
    return symbol;
  if (boad[3] == boad[4] && boad[4] == boad[5] && boad[5] == symbol)
    return symbol;
  if (boad[6] == boad[7] && boad[7] == boad[8] && boad[8] == symbol)
    return symbol;

  if (boad[0] == boad[3] && boad[3] == boad[6] && boad[6] == symbol)
    return symbol;
  if (boad[1] == boad[4] && boad[4] == boad[7] && boad[7] == symbol)
    return symbol;
  if (boad[2] == boad[5] && boad[5] == boad[8] && boad[8] == symbol)
    return symbol;

  if (boad[0] == boad[4] && boad[4] == boad[8] && boad[8] == symbol)
    return symbol;
  if (boad[2] == boad[4] && boad[4] == boad[6] && boad[6] == symbol)
    return symbol;
  return "";
}

function Grid({ numberofcard }) {
  const [turn, setTurn] = useState(true);
  const [boad, setBoad] = useState(
    Array(numberofcard).fill(null)
  );
    const [winner, setWinner] = useState("");

function reset(){
  setTurn(true);
  setBoad( Array(numberofcard).fill(null));
  setWinner("")
}

  function play(index) {
   if(winner) return ;
   if(boad[index]) return ;

   let newboad=[...boad];
   newboad[index]=turn ? 'O':'X'

    const win = iswinner(newboad, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }

    setBoad(newboad);
    setTurn(!turn);
  }
  return (
    <>
      {winner && (<>

        <h1>the winer is {winner}</h1>
        <button onClick={reset} class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"> RESET game</button>
        
        </>
        )}
      <h1> Now Turn {turn ? "O" : "X"}</h1>
      <div className="flex size-[315px] flex-wrap gap-1">
        {boad.map((value, idx) => {
          return <Card key={idx} player={value} onPlay={play} index={idx} />;
        })}
      </div>{" "}
      ;
    </>
  );
}

export default Grid;
