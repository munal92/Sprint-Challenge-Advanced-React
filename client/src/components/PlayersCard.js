import React from "react";

const PlayerCards = props => {

return(
    <div>
            <h2>Name: {props.player.name}</h2>
			<p>Country: {props.player.country}</p>
			<p>searches: {props.player.searches}</p>
            <hr/>
    </div>


);



}


export default PlayerCards;