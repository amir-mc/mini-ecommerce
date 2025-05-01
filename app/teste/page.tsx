
import dynamic from "next/dynamic";
import Wrapp from "./comp";
import { Suspense } from "react";


const BigData = dynamic(() => import('./bigdata'), {
    loading: () => <p>Loading big data...</p>
    
  });
  

const Ax = () => {
    return ( 
     <div>

        <BigData />
     </div>
  
     );
}
 
export default Ax;