
import dynamic from "next/dynamic";


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