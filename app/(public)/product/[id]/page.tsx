interface ProductIdProps {
    params: {
        id: string;
    };
}

const  ProductId  = async ({ params }: ProductIdProps) => {
    const {id}= await params

    
    return ( 
        <div className="items-center">
            sls black seirxe {id}
        </div>
    ); 
}
 
export default ProductId;