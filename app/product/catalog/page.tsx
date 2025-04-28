import CatalogList from "@/components/catalog/catalog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Catalog = () => {
    return ( 
        <div className="flex flex-col items-center mx-auto my-4"> 
            <CatalogList/>
            <Button asChild>
                <Link href='/product'>
                Back
                </Link>
            </Button>
        </div>
     );
}
 
export default Catalog;