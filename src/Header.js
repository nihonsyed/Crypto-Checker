import React, { useEffect, useState } from "react";
import axios from "axios";
 import ViewMore from "./ViewMore";

function Header()
{
  const [names,setNames]=useState([]);
  const[dt,setData]=useState([]);
  const[state,setState]=useState(''); 
  const [details,setDetails]=useState(null);
  const [moreDisplay,setmoreDisplay]=useState(false);
 

  useEffect(()=>{
     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(

      (res)=>{
        //console.log(res.data);
        setNames(
          res.data.map(record=>record.id)

        );
        setData(res.data);
      
    
      }
     ).catch(err=>{console.log(err)})
  }
  ,[]
  );

  const filterList=(e)=>{

     setState(e.target.value);
     //console.log(state)
   
    
  }

  
  
  return(
    <>
    <div className="nav">
    <h1 >Welcome to the CryptoChecker</h1>
    <textarea placeholder="SEARCH A COIN" onChange={filterList}></textarea>
    
    </div>
    
    <table>
      <tbody>
      <tr>
        <td></td>
        <td className="coin-name">Name</td>
        <td className="coin-code">Symbol</td>
        <td>Price Change%(24hrs)</td>
        <td className="market-cap">Market Cap</td>

      </tr>
      </tbody>
        {
          
            names.filter((name)=>name.includes(state)).map(

               (name,i)=>

               {
                
                return(

                  <tbody key={i}>     
                <tr key={i}>
                    <td>
                        
                        <img src={dt[i].image} className="crypto-icons" alt=""/>
                        

                    </td>
                    <td className="coin-name">{name.toUpperCase()}</td>
                    <td className="coin-code">{dt[i].symbol.toUpperCase()}</td>
        
        <td style={{color:(dt[i].price_change_percentage_24h<0)?'red':'#4af74a'}}>{`${dt[i].price_change_percentage_24h.toFixed(2)}%`}</td>
        <td className="market-cap">{ `$ ${dt[i].market_cap.toFixed(2)}`}</td>
        <td><button className="more-info" onClick={()=>{setDetails(dt[i]); setmoreDisplay(true); document.querySelectorAll("body :not(.view-more)").forEach(elem=>elem.style.opacity='0.85')}} > MORE INFO</button></td></tr></tbody>
              
                )
               }
            )
        }
    </table>
     {
      (moreDisplay)?<ViewMore info={details} show={setmoreDisplay} className="view-more"/>:<></>
     }
    </>
  );


}
export default Header;