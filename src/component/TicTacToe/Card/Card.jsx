import Icon from "../Icon/Icon";

function Card({ onPlay,player,index }) {
  let icon =<Icon/>
  if(player==='O'){
     icon=<Icon name="circle"/>
  }else  if(player==='X'){
    icon=<Icon name="cross"/>
  }
  return (
    <>
      <div className="p-[2px] rounded-[10%] flex justify-center items-center h-[120px] w-[120px] border border-black border-solid bg-yellow-400 basis-[30%]"  onClick={()=> onPlay(index)}>
       {icon}
      </div>
    </>
  );
}

export default Card;
