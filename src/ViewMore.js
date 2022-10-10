import React from "react";
import { BsXSquareFill } from "react-icons/bs";
function ViewMore({info,show})
{
  const close=(e)=>{
    show(false);
    document.querySelectorAll("body :not(.view-more)").forEach(elem=>elem.style.opacity='1');
    
  }

  return(

    <div className="box1">
      <BsXSquareFill style={{position:'relative',right:'2vw',top:'0vw',float:'right',fontSize:'1.5vw',borderRadius:'50%',color:'rgb(123, 84, 155)',opacity:'50%',cursor:'pointer'}}  onMouseOver={(e)=>{e.target.style.opacity='50%'}} onMouseLeave={(e)=>{e.target.style.opacity='100%'}} onClick={close} />
      <img src={info.image}  alt=""/>
     <h2>{info.id.toUpperCase()}</h2>
     <ul >
     <li>Fully Diluted Valuation: {info.fully_diluted_valuation}</li>
      <li>Circulating Supply: {info.circulating_supply}</li>
      <li>Total Volume: {info.total_volume}</li>
      <li>Current Price: {info.current_price}$</li>
      <li>Price Change(24h): 49.8$</li>
      
      <li>Max Supply: {info.max_supply}</li>
      <li>Total Supply: {info.total_supply}</li>
     
      <li>Price Change(24h): {info.price_change_24h.toFixed(2)}$</li>
      <li>Market Cap Rank: {info.market_cap_rank}</li>
      <li>Last Updated: {info.last_updated}</li>
     
     </ul>
    </div>
  )
}

export default ViewMore;