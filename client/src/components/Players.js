import React from 'react';
import axios from 'axios';
import PlayersData from "./PlayersData";




class Players extends React.Component {
    constructor(){
        super();
        this.state = {
            players : []


        };


    }

    componentDidMount(){
            axios.get(`http://localhost:5000/api/players`)
            .then(res => {
                
                this.setState({players : res.data});
                
            }).catch(error => {
                console.log("Data was not return", error);
              });
            
    }



    render(){
      //  console.log("dta bak", this.state.players)
        return(
            <div>
               
                
                
                    <PlayersData  playerData = {this.state.players}   />
                  
              


        
            </div>
        );
    }
}



export default Players;