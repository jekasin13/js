import React from "react";
import PropTypes from 'prop-types'
import Bet from "./Bet";

function BetList (props) {

    return(
        <ul>
         {props.bets.map((bet,index) => {
            return <Bet 
            bet={bet} 
            index = {index} 
            key = {bet.id}/>
         })}        
        </ul>
    )
    
}

export default BetList
