import React from "react";
import icons from "./LogoImport";
import getData from "./DataFetch";

 function List()
{
  
  const coins=getData();

  
  if(coins)
  { 
    
    const names=Object.keys(coins).map(n=>n.toUpperCase());
    return (
   
         
          Object.values(coins).map(

             (coin,i)=>{
              let imageUrl=null;
              icons.forEach((logo)=>{if(logo.name.includes(names[i].toLowerCase())){imageUrl=logo.icon; }})
              const clr=(coin.usd_24h_change<0)?'red':'rgb(10,235,10)';
              return (<tbody key={icons[i].key}>     
                <tr key={icons[i].key}>
                    <td>
                        {/* <img src={icons[i].icon} className="crypto-icons" alt=""/> */}
                        <img src={imageUrl} className="crypto-icons" alt=""/>
                        

                    </td>
                    <td className="coin-name">{names[i]}</td>
                    <td className="coin-code">BTC</td>
        <td >{coin.usd.to}</td>
        <td style={{color:clr}}>{`${coin.usd_24h_change.toFixed(2)}%`}</td>
        <td className="market-cap">{ `$ ${coin.usd_market_cap.toFixed(2)}`}</td>
        <td><button className="more-info">
            MORE INFO
        </button></td>

                </tr>
                </tbody>)
             }

          )
       

        
        
             
  );}
  else
  {
    return <tbody><tr><td>Loading...</td></tr></tbody> 
     
   
  }
}

  export default List;