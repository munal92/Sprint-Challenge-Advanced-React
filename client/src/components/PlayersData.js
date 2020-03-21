import React from "react";
import PlayersCards from "./PlayersCard"

const PlayersData = props => {

    return(

       // console.log("playersdata props", {props.playerData})
        <div>
            {props.playerData.map(player => (
          <div key={player.id}>
            <PlayersCards player={player} />
          </div>
        ))}

    
    
        </div>
    
    
    );
    
    
    
    }
    
    
    export default PlayersData;