import RemoveProduct from "./RemoveProduct";

function ProductList({ productList, deleteProduct }) {
    return ( 
        <div className="product-list-component">
            <ul>
                {
                    productList.map((product, index) => {
                        return (
                            <div className="product-list" key={index}>
                                <div>
                                    <div>{product.description}</div>
                                    <div>Quantity: {product.totalQuantity}, {product.id}</div>
                                </div>
                                <RemoveProduct 
                                    id={product.id} 
                                    handleClick={deleteProduct}
                                />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ProductList;