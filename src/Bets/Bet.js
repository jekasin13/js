import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../Context";


function Bet ({bet,index}) {
    const classes =['list']
    const {swapbets} = useContext(Context)
    if(bet.open) {
        classes.push('list1')
        return (
        
            <li className={classes.join(' ')}> 
             <strong>{index+1}</strong> 
             <h1>{bet.name}</h1> 
             <h1>{bet.price}</h1>         
             <button className = 'button' onClick = {() => swapbets(bet.id)}>Close</button>
            </li>        
        )
    } else
    {
        return (
        
            <li className={classes.join(' ')}> 
             <strong>{index+1}</strong> 
             <h1>{bet.name}</h1> 
             <h1>{bet.pnl}</h1>         
             <button className = 'button' onClick = {() => swapbets(bet.id)}>Delete</button>
            </li>        
        )
    }



}

export default Bet