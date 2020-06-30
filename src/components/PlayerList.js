import React, { useContext } from 'react';
import { ScoreboardContext } from './context';
import Player from './Player';

const PlayerList = () => {
  const context = useContext(ScoreboardContext);
  return (
    <>
      {context.players.map( (player, index) => 
        <Player 
          key={player.id} 
          index={index}
        />
      )}
    </>
  );
}

export default PlayerList;