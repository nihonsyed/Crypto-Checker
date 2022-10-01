import Axios from "axios";
import {useState,useEffect} from "react";
//for synchronizing 
export const sortFetched = (localData, fetchedKeys) => {
  return [...localData].sort(
    (a, b) => fetchedKeys.indexOf(a) - fetchedKeys.indexOf(b)
  )
}

function getData(){

  const [coin, setCoin] = useState(null);
  useEffect(() => {
    // console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cetherium%2Ctether%2Csolana%2Ccardano%2Cpolkadot%2Cxrp%2Cbinancecoin%2Cterra%2Clitecoin%2Cavalanche%2Cmonero%2Csteller%2Cdash%2Cnxt&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`).then(
      (response) => {
        setCoin(response.data);
      }
    );
  }, []);

  return coin;

   
 
   
  
 
}



export default getData;

