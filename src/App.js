import React, {useEffect} from "react";
import BetList from "./Bets/BetList";
import './index.css'
import Context from "./Context";

function App() {
  const [openbets, setBets] = React.useState([  
    {id:1, name:'BTC',open: true,price:63000},
    {id:2, name:'ETH',open: true,price:4500}
  ])

  const [closedbets, setClosedBets] = React.useState([
    {id:3, name:'BTC',open: false,pnl: 200},
    {id:4, name:'ETH', open: false, pnl: 300}
  ])
  let hui
  useEffect(() => {
  
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
    .then(response => response.json())
    .then(data => console.log(hui= data.price) )

  }, [])

 console.log(hui);

  function swapbets (id) {
    const bet = openbets.find(bet => bet.id === id)
    setBets(openbets.filter(bet => bet.id !==id))  
    setClosedBets([{id:1,name:bet.name,pnl:bet.price-51},
      ...closedbets
    ])
  }
  

  return (
    <Context.Provider value={{swapbets}}>
    <div className = "wrapper">
      <div className='live'>
        <h1>OPEN bets</h1> 
        <BetList bets = {openbets}/>
      </div>
      <div className ='sold'>
        <h1>Closed bets</h1> 
        <BetList bets = {closedbets}/>
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
