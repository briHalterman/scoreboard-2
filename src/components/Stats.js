import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';

const Stats = () => {
  const context = useContext(ScoreboardContext);

  const totalPlayers = context.players.length;
  const totalPoints = context.players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;